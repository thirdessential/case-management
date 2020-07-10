import React from 'react'
import { Form, Row , Button, Col } from "react-bootstrap";
import { Upload, message,  Modal , notification, Space , Card} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import DynamicFeilds from './DynamicFeilds/index.js'
import api from '../../../resources/api'
import AddCompany from './AddCompany/indexModal.js'
import { connect } from 'react-redux';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validNameRegex = RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);

const validZipRegex = RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
const validUrlRegex = RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);



let editMode = null
let options = null
let response = {}
let feilds = {}
let editRes = ""
let customData =  []
let customFields = null
let res = ""
let error = {
  FirstName: "",
  MiddleName: "",
  LastName: "",
  Prefix: "",
  Title:"",
}
let errors ={
  Email: [""],
  phone: [""],
  Website:[""],
  Address:[""],
  Street:[""],
  City:[""],
  Country:[""],
  State:[""],
  ZipCode:[""],
}



class newPerson extends React.Component{
  constructor(props){
    super(props)
    this.state={
      address : [], emailAddress : [], phone : [], website:[],  customFields : [{
      }],modal : false, valid : false
    }
  }

  handleCustom(e){
    e.persist()
    const { id , value, name } = e.target
    customData[id]={[name] : value}
  }
  async componentDidMount(){
   response = await api.get('/company/viewforuser/'+this.props.userId)
    
     options = response.data.data.map((value,id)=>{
    return <option key={id}>{value.name}</option>
    })
    feilds = await api.get('/user/view/5eecb08eaec6f1001765f8d5')

    customFields = feilds.data.data.customFields.map((value, index)=>{
    
      return <Form.Group key={index} controlId={index}>
              <Form.Label>{value.name}</Form.Label>
              <Form.Control name={value.name} type={value.type} placeholder={value.name} onChange={this.handleCustom}/>
             </Form.Group>
    })

    this.setState({customFields , options})

  
{/*
    if(this.props.location.pathname == "/manage/contacts/edit/person"){
      editMode = true
      res= await api.get('/contact/showall')
      res = res.data.data[this.props.location.state]
      console.log(res)
    }
  */}
  }
  openNotificationWithIcon=(type) =>{
    notification[type]({
      message: 'Contact Saved',
      });
  };
   openNotificationWithfailure = type => {
    notification[type]({
      message: 'Failure'});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    notification.destroy()
     console.log(this.props)
      const validateForm = () => {
        let valid = true;
        Object.values(error).forEach((val) => val.length > 0 && (valid = false));
        Object.values(errors.Email).forEach((val) => val.length > 0 && (valid = false));
        Object.values(errors.phone).forEach((val) => val.length > 0 && (valid = false));
        Object.values(errors.State).forEach((val) => val.length > 0 && (valid = false));
        Object.values(errors.Street).forEach((val) => val.length > 0 && (valid = false));
        Object.values(errors.City).forEach((val) => val.length > 0 && (valid = false));
        Object.values(errors.ZipCode).forEach((val) => val.length > 0 && (valid = false));
        Object.values(errors.Country).forEach((val) => val.length > 0 && (valid = false));
        console.log(valid)
        return valid;
    
      };
      if (validateForm()) {
        console.log("all good")
        const data = this.state
        data.userId = this.props.userId
        data.customFields = customData
        console.log(data)
       if(editMode){
         //  dispatch(updateBlog({id:this.state._id,body:this.state}))
       }else{
          api.post('contact/create', data).then(()=>this.openNotificationWithIcon('success')).catch(()=>this.openNotificationWithfailure('error'))
       }
     
       if(this.props.location!=undefined){
         this.props.history.goBack()
     }
      } else {
        return notification.warning({
          message: "Please enter valid details",
        });
      }
    
  }
   
  
  render(){

    
    
    let address = null
    const handleChange = (e) => {
      e.persist()
      this.setState(st=>({...st,[e.target.name]:e.target.value}))
      console.log(this.state)
      const { name, value, id } = e.target;
      switch (name) {
        case "prefix":
          error.Prefix =  value === "default" ? "Prefix is required!" : "";
          break;
        case "firstName":
          error.FirstName =
              (value.length == 0) 
              ? "First Name is required!" 
              : (!validNameRegex.test(value))
              ? "First Name must be in characters!"
              : (value.length > 20) 
              ? "First Name must be less than 20 characters long!" 
              : "";
         break;
        case "middleName":
          error.MiddleName =
            (value.length == 0) 
            ? "" 
            : (!validNameRegex.test(value))
            ? "Middle Name must be in characters!"
            : (value.length > 20) 
            ? "Middle Name must be less than 20 characters long!" 
            : "";
        break;
        case "lastName":
          error.LastName =
            (value.length == 0) 
            ? "" 
            : (!validNameRegex.test(value))
            ? "Last Name must be in characters!"
            : (value.length > 20) 
            ? "Last Name must be less than 20 characters long!" 
            : "";
          break;
        
        case "title":
            error.Title =
              value.length == 0 ? "Title is Required" : "";
          break;
       
        default:
          break;
      }
  
    }
    const HandleAddressChange=(e)=>{
      e.persist()
      const { id, value, name} = e.target
      address = {...address, [name]:value}
      let newState = this.state
      newState.address[id]=address
      this.setState(newState)
      console.log(this.state)
      switch (e.target.name) {
        
        
        case "type":
          errors.Type[id] =  value === "default" ? "Type is required!" : "";
            break;  
       
        case "country":
                errors.Country[id] =
                  value === "default" ? "Country is required!" : "";
                break;

            case "street":
                errors.Street[id] =
                (value.length == 0) 
                ? "" 
                : (value.length < 2)
                ? "Street is Required" : "";
              break;
            case "city":
                errors.City[id] =
                  (value.length == 0) 
                    ? "" 
                    : (!validNameRegex.test(value))
                    ? "City Name must be in characters!"
                    : (value.length < 2) 
                    ? "City is Required" : "";
              break;
            case "state":
                errors.State[id] =
                    (value.length == 0) 
                    ? "" 
                    : (!validNameRegex.test(value))
                    ? "State Name must be in characters!"
                    : (value.length < 2) 
                    ? "State is Required" : "";
              break;
            case "zipCode":
                errors.ZipCode[id] = (value.length == 0) 
                  ? "" 
                  :  value.length > 4 && value.length < 10
                  ? ""
                  : "Zipcode is not valid!";
                break;      

      }

    }
    const handleMultipleChange = (e) => {
      e.persist()
      let list = this.state
      const { id , value, name } = e.target  
      list[name][id] = value
      this.setState(list)
      console.log(this.state)
      switch (name) {
        
        case "emailAddress":
          errors.Email[id] = validEmailRegex.test(value)
            ? ""
            : "Email is not valid!";
          break;
        case "phone":
            errors.phone[id] =
            value.length < 10 || value.length > 13
                  ? "phone number must be between 10 and 13 digits"
                  : "";
              break;
        
        default:
          break;
      }
 
    }
    
  
    const handleImageChange = e => {
      //this.setState(st=>({...st,[e.target.name]:e.target.value}))
      }
     const addFeild = (type) => {
      let list = this.state
        if(type==="emailAddress"){
          list.emailAddress.push("")
          this.setState(list)
        }else
        if(type==="address"){
          list.address.push("")
          this.setState(list)
        }else if(type==="phone"){
          list.phone.push("")
          this.setState(list)
        }else if(type==="website"){
          list.website.push("")
          this.setState(list)
        }
     
    }
  const imageHandler = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
    
   const AddCompanyHandler = ()=>{
    // api.post('/company/create', {companyData})
     this.setState({modal : false})
  
   }
   const handleDelete = (e)=>{
     e.persist()
      const { name , id } = e.target
      let newState = this.state
      newState[name].splice(id, 1)
      this.setState(newState)
   }

   
  
   
      
     
      return (
        <>
        <div>
          <div>
            <Form className="form-details"  onSubmit={this.handleSubmit}>
            <div className="form-header-container mb-4">
              <h3 className="form-header-text">Add New Person</h3>
            </div>
              <h4>Personal Details</h4>
              <Upload {...imageHandler} onChange={handleImageChange}>
                <antdButton className="form-upload-button">
                  <UploadOutlined /> Click to Upload
                </antdButton>
              </Upload><br></br>
              <Form.Group controlId="formGroupPrefix">
              <Form.Label>Prefix</Form.Label>
              <select    
                required
                name='Prefix'
                onChange={handleChange}
                value={res.Prefix}
                style={{"border-radius": "5px"}}
                >
                <option value="default">Prefix</option>
                <option value="Mr.">Mr.</option>
                <option value="Miss.">Miss.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
                <option value="Gov.">Gov.</option>
                <option value="Prof.">Prof.</option>
              </select>
            </Form.Group>
            <p className="help-block text-danger">{error.Prefix}</p>
          
            <p className="help-block text-danger">{error.Prefix}</p>
          
            <Form.Row>
              <Col>
                <Form.Group controlId="formGroupFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control  required name='firstName' type="text" placeholder="First Name" 
                  value={res.firstName} onChange={handleChange}/>
                </Form.Group>
                <p className="help-block text-danger">{error.FirstName}</p>
              </Col>
              <Col>
                <Form.Group controlId="formGroupMiddleName">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control name='middleName' type="text" placeholder="Middle Name" 
                  value={res.middleName} onChange={handleChange}/>
                </Form.Group>
                <p className="help-block text-danger">{error.MiddleName}</p>
              </Col>
              <Col>
                <Form.Group controlId="formGroupLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control required name='lastName' type="text" placeholder="Last Name" 
                  value={res.lastName} onChange={handleChange}/>
                </Form.Group>
                <p className="help-block text-danger">{error.LastName}</p>
              </Col>
            </Form.Row>
            
            <Row>
            <Col>
              <Form.Group controlId="formGroupCompany">
                <Form.Label>Company</Form.Label>
                <Form.Control as="select" onChange={handleChange}>
                  {options}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <div className="form-add mb-4">
              <span onClick={() => this.setState({modal : true})}>Add Company</span>
          </div>            
            <DynamicFeilds type={"emailAddress"} name={"emailAddress"} text={"Email"} error={errors.Email} inputList={this.state.emailAddress} change={handleMultipleChange} delete={handleDelete}></DynamicFeilds>
            <div className="form-add mb-4">
              <span onClick={()=>addFeild("emailAddress")}>Add an Email</span>
            </div>
            <Row>
              <Col>
                <Form.Group controlId="formGroupTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control name='title' type="text" placeholder="Title" 
                  value={res.title} onChange={handleChange}/>
                </Form.Group>
                <p className="help-block text-danger">{error.Title}</p>
              </Col>
            </Row>
  
            
            <DynamicFeilds type={"number"} name={"phone"} text={"Phone Number"} error={errors.phone} inputList={this.state.phone} change={handleMultipleChange} delete={handleDelete}></DynamicFeilds>
            <div className="form-add mb-4">
              <span onClick={()=>addFeild("phone")}>Add a Phone Number</span>
            </div>
            <DynamicFeilds type={"website"} name={"website"} text={"website"} error={errors.Website} inputList={this.state.website} change={handleMultipleChange} delete={handleDelete}></DynamicFeilds>
            <div className="form-add mb-4">
              <span onClick={()=>addFeild("website")}>Add a Website</span>
            </div>
            <p className="help-block text-danger">{errors.Website}</p>
  
            <p style={{"color" : "#4e4e91"}}><b>Address</b></p>
            {
              this.state.address.map((value, index)=>{
                return <div className="mb-3">
                   <Form.Row>
              <Col>
              <Form.Group controlId={index}>
                <Form.Label>Type</Form.Label>
                <Form.Control as="select" onChange={HandleAddressChange}>
                  <option>Work</option>
                  <option>Home</option>
                </Form.Control>
              </Form.Group>
              <p className="help-block text-danger">{errors.Type}</p>

              </Col>
              <Col>
              <Form.Group controlId={index}>
                  <Form.Label>Street</Form.Label>
                  <Form.Control name='street' type="text" placeholder="Street" 
                  onChange={HandleAddressChange}/>
                 </Form.Group>
            <p className="help-block text-danger">{errors.Street[index]}</p>
              </Col>
              
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId={index}>
                  <Form.Label>City</Form.Label>
                  <Form.Control name='city' type="text" placeholder="City" 
                  onChange={HandleAddressChange}/>
                </Form.Group>
                <p className="help-block text-danger">{errors.City[index]}</p>
              </Col>
              <Col>
                <Form.Group controlId={index}>
                  <Form.Label>State</Form.Label>
                  <Form.Control name='state' type="text" placeholder="State" 
                   onChange={HandleAddressChange}/>
                </Form.Group>
                <p className="help-block text-danger">{errors.State}</p>
              </Col>
            </Form.Row>
            <Row>
                <Col>
                  <Form.Group controlId={index}>
                    <Form.Label>ZipCode</Form.Label>
                    <Form.Control name='zipCode' type="number" placeholder="ZipCode" 
                    onChange={HandleAddressChange}/>
                  </Form.Group>
                  <p className="help-block text-danger">{errors.ZipCode[index]}</p>
                </Col>
                <Col>
                <Form.Group controlId={index}>
              <Form.Label>Country</Form.Label>
                <select
                          name="Country"
                          onChange={HandleAddressChange}
                          value={res.Country}
                          style={{"border-radius": "5px"}}
                        >
                          <option value="default">Country</option>
                          <option value="Afganistan">Afghanistan</option>
                          <option value="Albania">Albania</option>
                          <option value="Algeria">Algeria</option>
                          <option value="American Samoa">American Samoa</option>
                          <option value="Andorra">Andorra</option>
                          <option value="Angola">Angola</option>
                          <option value="Anguilla">Anguilla</option>
                          <option value="Antigua & Barbuda">
                            Antigua & Barbuda
                          </option>
                          <option value="Argentina">Argentina</option>
                          <option value="Armenia">Armenia</option>
                          <option value="Aruba">Aruba</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria</option>
                          <option value="Azerbaijan">Azerbaijan</option>
                          <option value="Bahamas">Bahamas</option>
                          <option value="Bahrain">Bahrain</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Barbados">Barbados</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Belgium">Belgium</option>
                          <option value="Belize">Belize</option>
                          <option value="Benin">Benin</option>
                          <option value="Bermuda">Bermuda</option>
                          <option value="Bhutan">Bhutan</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Bonaire">Bonaire</option>
                          <option value="Bosnia & Herzegovina">
                            Bosnia & Herzegovina
                          </option>
                          <option value="Botswana">Botswana</option>
                          <option value="Brazil">Brazil</option>
                          <option value="British Indian Ocean Ter">
                            British Indian Ocean Ter
                          </option>
                          <option value="Brunei">Brunei</option>
                          <option value="Bulgaria">Bulgaria</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          <option value="Burundi">Burundi</option>
                          <option value="Cambodia">Cambodia</option>
                          <option value="Cameroon">Cameroon</option>
                          <option value="Canada">Canada</option>
                          <option value="Canary Islands">Canary Islands</option>
                          <option value="Cape Verde">Cape Verde</option>
                          <option value="Cayman Islands">Cayman Islands</option>
                          <option value="Central African Republic">
                            Central African Republic
                          </option>
                          <option value="Chad">Chad</option>
                          <option value="Channel Islands">
                            Channel Islands
                          </option>
                          <option value="Chile">Chile</option>
                          <option value="China">China</option>
                          <option value="Christmas Island">
                            Christmas Island
                          </option>
                          <option value="Cocos Island">Cocos Island</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Comoros">Comoros</option>
                          <option value="Congo">Congo</option>
                          <option value="Cook Islands">Cook Islands</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cote DIvoire">Cote DIvoire</option>
                          <option value="Croatia">Croatia</option>
                          <option value="Cuba">Cuba</option>
                          <option value="Curaco">Curacao</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Djibouti">Djibouti</option>
                          <option value="Dominica">Dominica</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="East Timor">East Timor</option>
                          <option value="Ecuador">Ecuador</option>
                          <option value="Egypt">Egypt</option>
                          <option value="El Salvador">El Salvador</option>
                          <option value="Equatorial Guinea">
                            Equatorial Guinea
                          </option>
                          <option value="Eritrea">Eritrea</option>
                          <option value="Estonia">Estonia</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Falkland Islands">
                            Falkland Islands
                          </option>
                          <option value="Faroe Islands">Faroe Islands</option>
                          <option value="Fiji">Fiji</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="French Guiana">French Guiana</option>
                          <option value="French Polynesia">
                            French Polynesia
                          </option>
                          <option value="French Southern Ter">
                            French Southern Ter
                          </option>
                          <option value="Gabon">Gabon</option>
                          <option value="Gambia">Gambia</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Germany">Germany</option>
                          <option value="Ghana">Ghana</option>
                          <option value="Gibraltar">Gibraltar</option>
                          <option value="Great Britain">Great Britain</option>
                          <option value="Greece">Greece</option>
                          <option value="Greenland">Greenland</option>
                          <option value="Grenada">Grenada</option>
                          <option value="Guadeloupe">Guadeloupe</option>
                          <option value="Guam">Guam</option>
                          <option value="Guatemala">Guatemala</option>
                          <option value="Guinea">Guinea</option>
                          <option value="Guyana">Guyana</option>
                          <option value="Haiti">Haiti</option>
                          <option value="Hawaii">Hawaii</option>
                          <option value="Honduras">Honduras</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Hungary">Hungary</option>
                          <option value="Iceland">Iceland</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="India">India</option>
                          <option value="Iran">Iran</option>
                          <option value="Iraq">Iraq</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Isle of Man">Isle of Man</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Jamaica">Jamaica</option>
                          <option value="Japan">Japan</option>
                          <option value="Jordan">Jordan</option>
                          <option value="Kazakhstan">Kazakhstan</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Kiribati">Kiribati</option>
                          <option value="Korea North">Korea North</option>
                          <option value="Korea Sout">Korea South</option>
                          <option value="Kuwait">Kuwait</option>
                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                          <option value="Laos">Laos</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lebanon">Lebanon</option>
                          <option value="Lesotho">Lesotho</option>
                          <option value="Liberia">Liberia</option>
                          <option value="Libya">Libya</option>
                          <option value="Liechtenstein">Liechtenstein</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Macau">Macau</option>
                          <option value="Macedonia">Macedonia</option>
                          <option value="Madagascar">Madagascar</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Malawi">Malawi</option>
                          <option value="Maldives">Maldives</option>
                          <option value="Mali">Mali</option>
                          <option value="Malta">Malta</option>
                          <option value="Marshall Islands">
                            Marshall Islands
                          </option>
                          <option value="Martinique">Martinique</option>
                          <option value="Mauritania">Mauritania</option>
                          <option value="Mauritius">Mauritius</option>
                          <option value="Mayotte">Mayotte</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Midway Islands">Midway Islands</option>
                          <option value="Moldova">Moldova</option>
                          <option value="Monaco">Monaco</option>
                          <option value="Mongolia">Mongolia</option>
                          <option value="Montserrat">Montserrat</option>
                          <option value="Morocco">Morocco</option>
                          <option value="Mozambique">Mozambique</option>
                          <option value="Myanmar">Myanmar</option>
                          <option value="Nambia">Nambia</option>
                          <option value="Nauru">Nauru</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherland Antilles">
                            Netherland Antilles
                          </option>
                          <option value="Netherlands">
                            Netherlands (Holland, Europe)
                          </option>
                          <option value="Nevis">Nevis</option>
                          <option value="New Caledonia">New Caledonia</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Nicaragua">Nicaragua</option>
                          <option value="Niger">Niger</option>
                          <option value="Nigeria">Nigeria</option>
                          <option value="Niue">Niue</option>
                          <option value="Norfolk Island">Norfolk Island</option>
                          <option value="Norway">Norway</option>
                          <option value="Oman">Oman</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Palau Island">Palau Island</option>
                          <option value="Palestine">Palestine</option>
                          <option value="Panama">Panama</option>
                          <option value="Papua New Guinea">
                            Papua New Guinea
                          </option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Phillipines">Philippines</option>
                          <option value="Pitcairn Island">
                            Pitcairn Island
                          </option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Puerto Rico">Puerto Rico</option>
                          <option value="Qatar">Qatar</option>
                          <option value="Republic of Montenegro">
                            Republic of Montenegro
                          </option>
                          <option value="Republic of Serbia">
                            Republic of Serbia
                          </option>
                          <option value="Reunion">Reunion</option>
                          <option value="Romania">Romania</option>
                          <option value="Russia">Russia</option>
                          <option value="Rwanda">Rwanda</option>
                          <option value="St Barthelemy">St Barthelemy</option>
                          <option value="St Eustatius">St Eustatius</option>
                          <option value="St Helena">St Helena</option>
                          <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                          <option value="St Lucia">St Lucia</option>
                          <option value="St Maarten">St Maarten</option>
                          <option value="St Pierre & Miquelon">
                            St Pierre & Miquelon
                          </option>
                          <option value="St Vincent & Grenadines">
                            St Vincent & Grenadines
                          </option>
                          <option value="Saipan">Saipan</option>
                          <option value="Samoa">Samoa</option>
                          <option value="Samoa American">Samoa American</option>
                          <option value="San Marino">San Marino</option>
                          <option value="Sao Tome & Principe">
                            Sao Tome & Principe
                          </option>
                          <option value="Saudi Arabia">Saudi Arabia</option>
                          <option value="Senegal">Senegal</option>
                          <option value="Seychelles">Seychelles</option>
                          <option value="Sierra Leone">Sierra Leone</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="Solomon Islands">
                            Solomon Islands
                          </option>
                          <option value="Somalia">Somalia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Spain">Spain</option>
                          <option value="Sri Lanka">Sri Lanka</option>
                          <option value="Sudan">Sudan</option>
                          <option value="Suriname">Suriname</option>
                          <option value="Swaziland">Swaziland</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Syria">Syria</option>
                          <option value="Tahiti">Tahiti</option>
                          <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Togo">Togo</option>
                          <option value="Tokelau">Tokelau</option>
                          <option value="Tonga">Tonga</option>
                          <option value="Trinidad & Tobago">
                            Trinidad & Tobago
                          </option>
                          <option value="Tunisia">Tunisia</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Turkmenistan">Turkmenistan</option>
                          <option value="Turks & Caicos Is">
                            Turks & Caicos Is
                          </option>
                          <option value="Tuvalu">Tuvalu</option>
                          <option value="Uganda">Uganda</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Erimates">
                            United Arab Emirates
                          </option>
                          <option value="United States of America">
                            United States of America
                          </option>
                          <option value="Uraguay">Uruguay</option>
                          <option value="Uzbekistan">Uzbekistan</option>
                          <option value="Vanuatu">Vanuatu</option>
                          <option value="Vatican City State">
                            Vatican City State
                          </option>
                          <option value="Venezuela">Venezuela</option>
                          <option value="Vietnam">Vietnam</option>
                          <option value="Virgin Islands (Brit)">
                            Virgin Islands (Brit)
                          </option>
                          <option value="Virgin Islands (USA)">
                            Virgin Islands (USA)
                          </option>
                          <option value="Wake Island">Wake Island</option>
                          <option value="Wallis & Futana Is">
                            Wallis & Futana Is
                          </option>
                          <option value="Yemen">Yemen</option>
                          <option value="Zaire">Zaire</option>
                          <option value="Zambia">Zambia</option>
                          <option value="Zimbabwe">Zimbabwe</option>
                        </select>
              </Form.Group>
              <p className="help-block text-danger">{error.Country}</p>

                </Col>
              <Button id={index} name="address" style={{ "height": "45px", "margin-top": "25px"}} onClick={handleDelete}>-</Button>

              </Row>
                  
                </div>
              })
            }
            
            <div className="form-add mb-4">
              <span onClick={()=>addFeild("address")}>Add an Address</span>
            </div><br></br>
            <h4>Custom Feilds</h4>
            <p>Customise your<Button variant="link" onClick={()=>this.props.history.push('/settings/customFeilds')}>Custom Feild</Button></p>
            {customFields}
  
            <Button  type="submit" className="btn btn-success">{editMode?'Update':'Create'}</Button>
          </Form>
          
          <Modal
          centered
          visible={this.state.modal}
          onOk={AddCompanyHandler}
          onCancel={() => this.setState({modal : false})}
        >
         <AddCompany modal={true}></AddCompany>
  
        </Modal>
          </div>
      </div>
    </>  
  
           )  
  }
}
const mapStateToProps = state => ({
  userId: state.user.token.user._id
});
export default connect( mapStateToProps)(newPerson)
