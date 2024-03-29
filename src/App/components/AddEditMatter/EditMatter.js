import React, { useState, useEffect, useDispatch, useSelector} from 'react'
import { Form, Row , Col , Button } from "react-bootstrap";
import { message,  Modal, Card, Result, notification } from 'antd';
import api from '../../../resources/api'
import AddPerson from '../AddEditContact/AddPersonModal'
import DynamicFeild from '../AddEditMatter/DynamicFeilds/index'
import { connect } from 'react-redux'

const validNameRegex = RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);

let res = {}
let customFields = null
let contacts = {}
let optns = null
let editMode = true;
let editRes = ""
let customData =  []
let clientId = 0
let error = {
  relationship: [""]
}

class AddEditMatter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rate : "Flat",
      status :"Open",
      editData : "",
      client : "",
      relatedContacts : [],
      customFields : [],
      modal : false,
    }

  }
  handleCustom(e){
    e.persist()
    const { id , value, name } = e.target
    customData[id]={[name] : value}
  

  }
  handleChange = (e) => {
    e.persist()
    this.setState(st=>({...st,[e.target.name]:e.target.value}))
    if(e.target.name==="client"){
      clientId = e.target.selectedIndex - 1
    }
  }
  async componentDidMount(){
      
    const editData = await api.get('/matter/view/'+this.props.location.state)
    this.setState({editData : editData.data.data, matterDescription : editData.data.data.matterDescription , relatedContacts : editData.data.data.relatedContacts? editData.data.data.relatedContacts : [] })
    this.setState({client: editData.data.data.client._id})

    if(this.props.location.pathname==="/manage/Matter/edit"){
      editMode= true;
      editRes= this.props.location.state
    }
    res = await api.get('/user/view/'+this.props.userId).then(
      contacts = await api.get('contact/viewforuser/'+this.props.userId))
    
   
    optns = contacts.data.data.map((value, index)=>{
 
      return <option id={index}>{value.firstName}</option>
     })
     console.log(this.state.editData.client)
     const formData = <div>
       <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Client</Form.Label>
              <Form.Control as="select" name="client" defaultValue={this.state.editData.client.firstName} onChange={this.handleChange}>
              <option>Select a contact</option>

                {optns}
              </Form.Control>
            </Form.Group>
            <div className="form-add mb-4">
              <span onClick={() => this.setState({modal:true})}>Add Contact</span>
            </div>
        <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Practise Area</Form.Label>
                <Form.Control as="select" name="practiseArea" onChange={this.handleChange} defaultValue={this.state.editData.practiseArea}>
                  <option>Select a practiseArea</option>
                  <option>Attorney</option>
                  <option>Administrative</option>
                  <option>Business</option>
                  <option>Family</option>
                  <option>Imployment</option>
                  <option>Tax</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select" name="status" onChange={this.handleChange} defaultValue={this.state.editData.status}>
                  <option>Open</option>
                  <option>Closed</option>
                  <option>Pending</option>
                </Form.Control>
              </Form.Group>
              <Form.Row>
                <Col>
                  <Form.Group controlId="formGroupOpenDate">
                  <Form.Label>Open Date</Form.Label>
                  <Form.Control name='openDate' type="Date" defaultValue={this.state.editData.openDate} 
                  onChange={this.handleChange}/>
                  </Form.Group>
                </Col>
                <Col>  
                  <Form.Group controlId="formGroupClosing Date">
                  <Form.Label>Closing Date</Form.Label>
                  <Form.Control name='closeDate' type="Date" defaultValue={this.state.editData.closeDate}
                   onChange={this.handleChange}/>
                  </Form.Group>
                </Col>  
                <Col>
                  <Form.Group controlId="formGroupPendingDate">
                  <Form.Label>Pending Date</Form.Label>
                  <Form.Control name='pendingDate' type="Date" defaultValue={this.state.editData.pendingDate}
                 onChange={this.handleChange}/>
                  </Form.Group>
                </Col> 
              </Form.Row>
     </div>
     this.setState({formData : formData})
   
    /*
    customFields = res.data.data.customFields.map((value, index)=>{
      return <Form.Group key={index} controlId={index}>
              <Form.Label>{value.name}</Form.Label>
              <Form.Control required={value.required} 
              name={value.name} type={value.type} 
              defaultValue={this.state.editData.customFields ? this.state.editData.customFields[index][value.name] : ""}
               onChange={this.handleCustom}/>
             </Form.Group>
    })*/
    this.setState({optns : optns, customFields : customFields})
  }
   openNotificationWithIcon = type => {
    notification[type]({
      message: 'Matter Saved'});
  };
    openNotificationWithfailure = type => {
    notification[type]({
      message: 'Failure'});
  };
   
  handleSubmit = (event) => {
    event.preventDefault();
    notification.destroy()
   

    if ((this.state.matterDescription ==="" ||this.state.matterDescription ===undefined) ) {
      return notification.warning({
        message: "Please add a matter description",
      });
    }else  if ((this.state.client ==="" ||this.state.client ===undefined) ) {
      return notification.warning({
        message: "Please select a contact",
      });
    }else{
      console.log("all good")
       const data = this.state
        data.customFields = customData
        data.client = contacts.data.data[clientId]._id
        data.userId = this.props.userId

       if(editMode){
        api.post('/matter/edit/'+this.props.location.state, data).then((res)=>{
            console.log(res)
            this.openNotificationWithIcon('success')
            if(this.props.location!=undefined){
              this.props.history.goBack()
             }
          }).catch(()=>{
            this.openNotificationWithfailure('error')
          })
            /*
             if(this.props.location!=undefined){
               this.props.history.goBack()
              }
              */

       }else{
         api.post('/matter/create', data).then(res=>console.log(res)).then(()=>this.openNotificationWithIcon('success')).catch(()=>this.openNotificationWithfailure('error'))
         
       }

       
    }
  }
  
  render(){
    

    const addFeild=() =>{
      let list = this.state.relatedContacts
      list.push({relationship : "", contact : "", billThis : "", id: ""})
      this.setState({relatedContacts : list})
 
    }
  
  const handleChange = (e) => {
    e.persist()
    this.setState(st=>({...st,[e.target.name]:e.target.value}))
    if(e.target.name==="client"){
      clientId = e.target.selectedIndex - 1
    }
  }
  const handleDelete = (e)=>{
    e.persist()
     const { name , id } = e.target
     let newState = this.state
     newState.relatedContacts.splice(id, 1)
     this.setState(newState)
  }

  const HandleDynamicChange = (e)=>{
    e.persist()
    let list = this.state
    const { id , value, name , checked ,selectedIndex } = e.target
    if(name==="billThis"){
      list.relatedContacts[id][name] = checked
    }else{
    list.relatedContacts[id][name] = value
    }
    if(name=='contact'){
      list.relatedContacts[id][name] = contacts.data.data[e.target.selectedIndex]._id
      list.relatedContacts[id].id = selectedIndex
    }
 
    switch (name) {
      case "relationship":
        error.relationship[id] =
        (!validNameRegex.test(value))
        ? "Realtionship must be in characters!"
        : (value.length > 20) 
        ? "Relationship must be less than 20 characters long!" 
        : "";
   break;
     
      default:
        break;
    }
    this.setState(list)

  }

 
  
  
   
    return (
      <div className='form-width'>
      <div className="form-header-container mb-4">
            <h3 className="form-header-text">Add New Matter</h3>
      </div>
      <Card title="Matter Information" className="mb-4">
        <Form className="form-details" >
          {console.log(this.state.editData)}
          
           
            <Form.Group controlId="formGroupMatter">
              <Form.Label>Matter Description</Form.Label>
                <Form.Control required name='matterDescription' as="textarea" rows="3" type="text" defaultValue={this.state.editData.matterDescription}
                 onChange={handleChange}/>
              </Form.Group>
              {
                this.state.formData
              }
              <Form.Group controlId="formGroupClientRefenceNumber">
                <Form.Label>Client reference number</Form.Label>
                <Form.Control name='clientReferenceNumber' type="number" defaultValue={this.state.editData.clientReferenceNumber}
                 onChange={handleChange}/>
              </Form.Group>
            
       </Form>
      </Card>

      <Card title="Related Contacts" className="mb-4">
          <Form className="form-details">
          <DynamicFeild name="realtedContacts"   InputList={this.state.relatedContacts}  option={optns} error={error.relationship} change={HandleDynamicChange}  delete={handleDelete} editMode={editMode}></DynamicFeild> 

    
            <br/>
            <div className="form-add mb-4">
              <span onClick={addFeild}>Add Related Contact</span>
            </div>
          </Form>
      </Card>
      <Card title="Custom Feilds"  className="mb-4">
      <Form className="form-details">
      <p>Customise your<Button variant="link" onClick={()=>this.props.history.push('/settings/customFeilds')}>Custom Feilds</Button></p>

      {customFields}
      </Form>
      </Card>
      <Card title="Billing Preference"  className="mb-4">
        <Form className="form-details">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rate</Form.Label>
            <Form.Control as="select" onChange={handleChange} defaultValue={this.state.editData.rate} >
              <option>Flat</option>
              <option>Hourly</option>
              <option>Contagious</option>
            </Form.Control>
          </Form.Group>
      </Form>
      </Card>

      <Card title="Task Automation"  className="mb-4">
      <Form className="form-details">
      <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Task</Form.Label>
                <Form.Control as="select" onChange={handleChange} defaultValue={this.state.editData.task}>
                  <option>Client Intake</option>
                  <option>Task List</option>
                  <option>New Task List</option>
                </Form.Control>
              </Form.Group>
       
      </Form>
      </Card>
      <Button onClick={this.handleSubmit} className="btn btn-success" >Update</Button>
      <Button onClick={()=>{this.props.history.goBack()}} >CANCEL</Button>
     <br></br>
      <Modal
        centered
        visible={this.state.modal}
        onOk={() => this.setState({modal :false})}
        onCancel={() => this.setState({modal :false})}
      >
      <AddPerson></AddPerson>

      </Modal>
      </div>
   
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.token.user._id
});
export default connect(mapStateToProps)(AddEditMatter)


