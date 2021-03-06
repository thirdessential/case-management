import { Table, Tag, Space, Button,Modal, Popconfirm, message,notification} from 'antd';
import React from 'react'
import {Form} from 'react-bootstrap'
import api from '../../../../resources/api'
import {connect} from 'react-redux'

let res = {}
let newRes = {}
let data = []
let index = null
let newData ={}
class tables extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  async componentDidMount(){ 
    res = await api.get('/user/view/'+this.props.userId)

    data= res.data.data.customFields.map((value,index)=>{
      return {
        key: index,
        name: value.name,
        Type : value.type,
        Default : <Form.Check 
                  type="checkbox"
                  id={`Default`}
                 checked={value.default}
                  
              />,
          Required : <Form.Check 
                  type="checkbox"
                  id={`required`}
                  checked={value.required}
                 
              />
      }
    })
    this.setState({data : data})
    console.log(this.state.data)
    
  }
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };
  cancel(e) {
    console.log(e);
    message.error('Canceled');
  }


  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  openNotificationWithFailure = type => {
    notification[type]({
      message: 'Failure',
        });
  };
   openNotificationWithSucces = type => {
    notification[type]({
      message: 'success',
    });
  };
  render(){
    const HandleOk=()=>{
      notification.destroy()
      if(this.state.required == "on"){
        this.state.required = true
      }else{
        this.state.required = false
      }
      if(this.state.default == "on"){
        this.state.default = true
      }else{
        this.state.default = false
      }
      const newdata = {
        name : this.state.name,
        type : this.state.type,
        default : this.state.default,
        required : this.state.required
      }

  
      if(res!==null){
        newData = res.data.data
        console.log(newData.customFields)
        newData.customFields[index]=newdata
      }
      if ((newdata.name ==="" ||newdata.name ===undefined) || (newdata.type ==="" ||newdata.type ===undefined) || (newdata.required ===true && newdata.default ===true) || (newdata.required ===false && newdata.default ===false) ) {
        return notification.warning({
          message: "Fields Should Not Be Empty",
        });
      }else{
        api.post('/user/update/'+ this.props.userId, newData).then(()=>this.openNotificationWithSucces('success')).catch(()=>{this.openNotificationWithFailure('error')})
        this.setModal2Visible(false)
        setTimeout(() => {
          window.location.reload()
        }, 1000);
      }
    
    }
    const HandleChange=(e)=>{
      e.persist()
      this.setState(st=>({...st,[e.target.name]:e.target.value}))
      console.log(this.state)
    }

    const handleEdit=(record)=>{
      newRes = res.data.data
      index = record.key
      this.setModal2Visible(true)
    }
    
    const handleDelete=(record)=>{
      newRes = res.data.data
      newRes.customFields.splice(record.key, 1)
      console.log(newRes)
      api.post('/user/update/'+this.props.userId, newRes)
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    }
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Type',
        dataIndex: 'Type',
        key: 'Type',
      },
      {
          title: 'Default',
          dataIndex: 'Default',
          key: 'Default',
        },
        {
          title: 'Required',
          dataIndex: 'Required',
          key: 'Required',
        },
      
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button onClick={()=>handleEdit(record)} type="link">Edit</Button>
            <Popconfirm
          title="Are you sure delete this task?"
          onConfirm={()=>handleDelete(record)}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link">Delete</Button>
        </Popconfirm>
            
          </Space>
        ),
      },
    ];
    
    return <div>
      <Table columns={columns} dataSource={this.state.data} />
    <Modal
    title="Add Custom Feild"
    centered
    visible={this.state.modal2Visible}
    onOk={HandleOk}
    onCancel={() => this.setModal2Visible(false)}
  >
    <Form>
      <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" name="name" onChange={HandleChange}/>
      </Form.Group>
      <Form.Group controlId="Type">
          <Form.Label>Select Custom Feild type</Form.Label>
          <Form.Control as="select" name="type" onChange={HandleChange}>
          <option>Checkbox</option>
          <option>Contact Select</option>
          <option>Date</option>
          <option>Email Address</option>
          <option>Integer</option>
          <option>Matter</option>
          <option>Money</option>
          <option>Picklist</option>
          <option>Text</option>
          </Form.Control>
          <br></br>
          <Form.Check 
              type="checkbox"
              id={`Default`}
              label={`Default`}
              name="default"
              onChange={HandleChange}
          /><br></br>
          <Form.Check 
              type="checkbox"
              id={`Required`}
              label={`Required`}
              name="required"
              onChange={HandleChange}
          />

      </Form.Group>
      </Form>
  </Modal>
    </div>
  }
}


const mapStateToProps = state => ({
  userId: state.user.token.user._id
});
export default connect(mapStateToProps)(tables)
