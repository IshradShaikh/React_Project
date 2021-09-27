import React, { Component } from 'react'
import axios from 'axios'
import Switch from "@material-ui/core/Switch";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export class AddConnections extends Component {

  constructor(props) {

    super(props)
    this.state = {
      hostname: "localhost",
      connName: "",
      user: "",
      passwd: "",
      ashost: "",
      sysnr: "",
      client: "",
      createdOn: "",
      createdBy: "rajani123",
      status: false
    }



  }
  

  changeHandler1 = (event) => {
    if(event.target.value=="false"){
      event.target.value="true"
    
    }
      else{
        event.target.value="false"
     
      }
   
   this.setState({
   
      [event.target.name]: event.target.value
    })
    // alert(event.target.value)
  }

  changeHandler = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }
  notify = () => {

    // Calling toast method by passing string
    toast('Hello Geeks')
  }

  submitHandler = (e) => {
    e.preventDefault()
    // console.log(this.state)
    axios.post('http://192.168.1.251:8000/home/conn', this.state)
      .then(response => {
        console.log(response)
        toast.info(response.data.message, { position: toast.POSITION.BOTTOM_RIGHT })
      })
      .catch(error => {
        console.log("Error: " + error)
        toast.error(error, { position: toast.POSITION.BOTTOM_RIGHT })
      })

    this.setState({
      connName: "",
      user: "",
      passwd: "",
      ashost: "",
      sysnr: "",
      client: "",
      status: false
    })
  }
  render() {

    const {
      connName,
      user,
      passwd,
      ashost,
      sysnr,
      client, status } = this.state
    return (
      <center>
        <h3 className="mb-4 mt-2">Add Connection</h3>
      <div className="align-items-center m-2 p-2 ">
        {/* <Card style={{ width: "50%", marginLeft: "20rem", marginTop: "1rem", marginBottom: "2rem" }}>
          <Card.Header as="h5"><b><h3>Add Connection</h3></b></Card.Header>
        </Card> */}


        {/* <br/> <h3>Add Connection</h3><br/>  */}
        <form  onSubmit={this.submitHandler}>

          <div className="mb-3 row justify-content-center">
            <label for="inputConnName" className="col-form-label col-sm-2">Conn Name</label>
            <input type="text" className="form-control col-sm-4" id="inputConnName" name="connName" value={connName} onChange={this.changeHandler} />
          
            <label for="inputConnUser" className="col-form-label col-sm-2 "> Conn User Name</label>
            <input type="text" className="form-control col-sm-4" id="inputConnUser" name="user" value={user} onChange={this.changeHandler} />
       
          </div>

          
          <div className="mb-3 row justify-content-center">
            <label for="inputPassword4" className="col-form-label col-sm-2">Password</label>
            <input type="password" className="form-control col-sm-4" id="inputPassword4" name="passwd" value={passwd} onChange={this.changeHandler} />
          
            <label for="inputCity" className="col-form-label col-sm-2">SYSNR</label>
            <input type="text" className="form-control col-sm-4" id="inputCity" name="sysnr" value={sysnr} onChange={this.changeHandler} />

          </div>
         
          <div className="mb-3 row justify-content-center">
            <label for="inputAddress2" className="col-form-label col-sm-2">ASHOST</label>
            <input type="text" className="form-control col-sm-4" id="inputAddress2" placeholder="" name="ashost" value={ashost} onChange={this.changeHandler} />
          
            <label for="inputZip" className="col-form-label col-sm-2">Client</label>
            <input type="text" className="form-control col-sm-4" id="inputZip" name="client" value={client} onChange={this.changeHandler} />

          </div>
           <div className="mb-3  row justify-content-center">
          
          <Switch  color="primary" name="status" checked={status} value={status} onChange={this.changeHandler1}/>
          <label className="mt-2 ml-2 row justify-content-center" >Is Active</label>
          </div>
         

          <button type="submit" className="btn btn-primary px-4 m-2"  >ADD</button>


        </form>
        <div>
        </div>

        <div>

        </div>

      </div>
      </center>
    )
  }
}

export default AddConnections
