import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export class Services extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            show: false,
            createdBy: "rajani123",
            username: "",
            connName: "",
            Lock: false,
            UnLock: false,
            option: "",
            selected: '',
            newPasswd:"",
            confirmPasswd:"",
           
        }
    }
    componentDidMount() {

        axios.get('http://192.168.1.251:8000/home/home_conn')
            .then(response => {
                console.log(response)
                this.setState({
                    users: response.data.data

                })
                console.log(this.state.users)
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errorMsg: 'Error retriving data'
                })
            })
    }
    handleClear = (e) => {
        this.setState(
            {
                connName:"",
                username: "",
                Lock:null

            })
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

   
    submitHandler = (e) => {

        console.log(this.state.option + this.state.Lock)
        if (this.state.option === "Lock" && this.state.Lock === true) {
            e.preventDefault()
            // console.log(this.state)
            axios.post('http://192.168.1.251:8000/home/services/userLock', this.state)
                .then(response => {
                    console.log(response)
                    //toast.info(response.data)
                    toast.info(response.data.message, { position: toast.POSITION.BOTTOM_RIGHT })
                })
                .catch(error => {
                    console.log("Error: " + error)
                    toast.error(error)
                })

        }

        if (this.state.option === "UnLock" && this.state.UnLock === true) {
            e.preventDefault()
            // console.log(this.state)
            axios.post('http://192.168.1.251:8000/home/services/userUnlock', this.state)
                .then(response => {
                    console.log(response)

                    toast.info(response.data.message, { position: toast.POSITION.BOTTOM_RIGHT })
                })
                .catch(error => {
                    console.log("Error: " + error)
                    toast.error(error)
                })
        }

        if (this.state.option === "resetPassword" ) {
            e.preventDefault()
            // console.log(this.state)
            axios.post('http://192.168.1.251:8000/home/services/changePassword', this.state)
                .then(response => {
                    console.log(response)
                    //toast.info(response.data)
                    toast.info(response.data.message, { position: toast.POSITION.BOTTOM_RIGHT })
                })
                .catch(error => {
                    console.log("Error: " + error)
                    toast.error(error)
                })
            
        }

        this.setState(
            {
                username: ""
            })

    }

   

    render() {

        const {
            users,
            username,
            connName,
            Lock,
            UnLock,
            newPasswd,
            confirmPasswd
        } = this.state
        return (
            <div >
                <Card style={{ width: "50%", marginLeft: "23rem", marginTop: "1rem", marginBottom: "2rem" }}>
                    <Card.Header as="h5"><b><h3>Services</h3></b></Card.Header>
                </Card>
                <form onSubmit={this.submitHandler}>

                    <div style={{ marginLeft: "4rem", marginTop: "1rem" }}>
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={Lock} style={{ marginRight: "0.5rem" }}
                            onClick={() => this.setState({ show: false, Lock: true, option: "Lock" })} />
                        {/* onClick={this.selectHandler} /> */}
                        <label class="form-check-label" for="exampleRadios1" style={{ marginRight: "4rem" }} >
                            Lock
                        </label>

                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={UnLock} style={{ marginRight: "0.5rem" }}
                            //    onChange={this.changeHandler} name="UnLock" checked={this.state.UnLock} 
                            onClick={() => this.setState({ show: false, UnLock: true, option: "UnLock" })} />
                        <label class="form-check-label" for="exampleRadios2" style={{ marginRight: "4rem" }}>
                            UnLock
                        </label>

                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" style={{ marginRight: "0.5rem" }}
                            //  checked="false"
                            onClick={() => this.setState({ show: true , option: "resetPassword" })} />
                        <label class="form-check-label" for="exampleRadios3">
                            Change Password
                        </label>
                    </div><br />

                    <div >
                        <form class="row g-3" >
                            <div class="col-md-2" style={{ marginLeft: "30rem" }} >
                                <label style={{ marginLeft: 0, paddingLeft: 0 }}>User Name</label>
                                <input type="text" class="form-control" id="inputEmail4" name="username" value={username} onChange={this.changeHandler} />
                            </div>
                            <div class="col-md-2"  >
                                <label for="inputEmail4" class="form-label">Connection</label>

                                <select id="inputState" class="form-select" name="connName" value={users.connName} onChange={this.changeHandler} >
                                    {/* <option selected value='none'>Select_Connection </option> */}
                                    <option selected value='none'>Select Conn</option>
                                    {users.map((user) => (
                                        <option value={user.id} >{user.connName}</option>
                                    ))}
                                     </select>
                            </div>
                        </form>
                        {
                            this.state.show ? <form class="row g-3" >
                                <div class="col-md-2" style={{ marginLeft: "30rem", marginTop: "2rem" }} >
                                    <label for="inputEmail4" class="form-label">New Password</label>
                                    <input type="password" class="form-control" id="inputEmail4" name="newPasswd" value={newPasswd} onChange={this.changeHandler} />
                                </div>
                                <div class="col-md-2" style={{ marginTop: "2rem" }} >
                                    <label for="inputEmail4" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" id="inputEmail4" name="confirmPasswd" value={confirmPasswd} onChange={this.changeHandler} />
                                </div>
                            </form> : null
                        }

                        {/* <input type="submit" value="Submit" style={{ marginTop: "2rem", marginLeft: "7rem" }} className="btn btn-primary" /> */}
                        <button style={{ marginTop: "2rem", marginLeft: "2rem" }} type="button" class="btn btn-primary" type="submit" value="Submit" >
                            Add
                        </button>

                    </div>
                </form>

            </div>

        )
    }
}

export default Services
