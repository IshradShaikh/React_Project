import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

import {toast} from 'react-toastify';
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
      status:false
    }

   

  }


  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  
  }
   notify = ()=>{ 
  
    // Calling toast method by passing string
    toast('Hello Geeks') 
}

  submitHandler = (e) => {
    e.preventDefault()
   // console.log(this.state)
    axios.post('http://192.168.1.251:8000/home/conn', this.state)
      .then(response => {
        console.log(response)
        toast.info(response.data.message ,{position: toast.POSITION.BOTTOM_RIGHT})
      })
      .catch(error => {
        console.log("Error: " + error)
      toast.error(error,{position: toast.POSITION.BOTTOM_RIGHT})
      })
      
      this.setState({
        connName: "",
        user: "",
        passwd: "",
        ashost: "",
        sysnr: "",
        client: "",
        status:false
      })
  }
  render() {
   
    const {
      connName,
      user,
      passwd,
      ashost,
      sysnr,
      client,status } = this.state
    return (
      <div>
        <Card style={{ width: "50%", marginLeft: "20rem", marginTop: "1rem", marginBottom: "2rem" }}>
          <Card.Header as="h5"><b><h3>Add Connection</h3></b></Card.Header>
        </Card>


        {/* <br/> <h3>Add Connection</h3><br/>  */}
        <form class="row g-3" onSubmit={this.submitHandler}>

          <div class="col-md-2" style={{ marginLeft: "20rem" }} >
            <label for="inputEmail4" class="form-label">ConnName</label>
            <input type="text" class="form-control" name="connName" value={connName} onChange={this.changeHandler} />
          </div>

          <div class="col-md-2" >
            <label for="inputEmail4" class="form-label"> Conn User Name</label>
            <input type="text" class="form-control" id="inputEmail4" name="user" value={user} onChange={this.changeHandler} />
          </div>
          <div class="col-md-2">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" name="passwd" value={passwd} onChange={this.changeHandler} />
          </div>
          <div class="col-md-2" style={{ marginLeft: "20rem" }}>
            <label for="inputCity" class="form-label">SYSNR</label>
            <input type="text" class="form-control" id="inputCity" name="sysnr" value={sysnr} onChange={this.changeHandler} />
          </div>
          <div class="col-2">
            <label for="inputAddress2" class="form-label">ASHOST</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="" name="ashost" value={ashost} onChange={this.changeHandler} />
          </div>

          <div class="col-md-2">
            <label for="inputZip" class="form-label">Client</label>
            <input type="text" class="form-control" id="inputZip" name="client" value={client} onChange={this.changeHandler} />

          </div>
          <div class="col-2" style={{ marginTop: "3rem" }}>


          </div>
          <div class="form-check form-switch">

            <label style={{ width: "100px", marginRight: "4rem" ,marginTop:"2rem" }}>
              <input class="form-check-input" type="checkbox" id="gridCheck" name="status" checked={status} onChange={this.changeHandler} />
              Is_Active</label>
          </div>
          

          <div class="col-12" >
            <br /><button type="submit" class="btn btn-primary"  style={{ width: "100px", marginRight: "4rem" }}>Add</button>
          </div>

        </form>
        <div>
        </div>

      <div>
    
      </div>

      </div>
    )
  }
}

export default AddConnections
