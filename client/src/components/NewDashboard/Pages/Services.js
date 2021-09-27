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
            newPasswd: "",
            confirmPasswd: "",

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
                connName: "",
                username: "",
                Lock: null

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

        if (this.state.option === "resetPassword") {
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
                username: "",
                connName:"Select Connection"
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
            <center>
                <h3 className="mb-2">Services</h3>
                 {/* <Card >
                    <Card.Header  as="h5"><b>Services</b></Card.Header>
                </Card> */}
                <div className="align-items-center mx-2 p-2 " >
                   
                    <form onSubmit={this.submitHandler}>

                        <div className="mx-2 p-2" >
                            <input className="form-check-input ms-4" type="radio" name="exampleRadios" id="exampleRadios1" value={Lock} style={{ marginRight: "0.5rem" }}
                                onClick={() => this.setState({ show: false, Lock: true, option: "Lock" })} />
                            {/* onClick={this.selectHandler} /> */}
                            <label className="form-check-label" for="exampleRadios1" style={{ marginRight: "4rem" }} >
                                Lock
                            </label>

                            <input className="form-check-input ms-4" type="radio" name="exampleRadios" id="exampleRadios2" value={UnLock} style={{ marginRight: "0.5rem" }}
                                //    onChange={this.changeHandler} name="UnLock" checked={this.state.UnLock} 
                                onClick={() => this.setState({ show: false, UnLock: true, option: "UnLock" })} />
                            <label className="form-check-label" for="exampleRadios2" style={{ marginRight: "4rem" }}>
                                UnLock
                            </label>

                            <input className="form-check-input ms-4" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" style={{ marginRight: "0.5rem" }}
                                //  checked="false"
                                onClick={() => this.setState({ show: true, option: "resetPassword" })} />
                            <label className="form-check-label" for="exampleRadios3">
                                Change Password
                            </label>
                        </div><br />
                        
                        <div className="mx-4 p-2  " >
                            <form >
                                                 
                                <div className="mb-3 row justify-content-center">
                                    <label for="inputUsername" className=" col-form-label col-sm-2 " >User Name</label>
                                        
                                        <input autoComplete="off" type="text" className="form-control col-sm-4 " id="inputUsername" name="username" value={username} onChange={this.changeHandler} />
                                   
                                </div>
                                <div className="mb-3 row justify-content-center">
                                    <label for="inputSelect" className="col-form-label col-sm-2">Connection</label>
                                    
                                        <select  id="inputSelect" className="form-control form-select col-sm-4" name="connName" value={connName} onChange={this.changeHandler} >

                                            <option selected value='none'>Select Connection</option>
                                            {users.map((user) => (
                                                <option value={user.connName} >{user.connName}</option>
                                            ))}
                                        </select>

                                </div>

                            </form>
                            {
                                this.state.show ? <form  >
                                    <div className="mb-3 row justify-content-center">
                                        <label for="inputNewPassword" className="col-form-label col-sm-2">New Password</label>
                            
                                            <input type="password" className="form-control col-sm-4" id="inputNewPassword" name="newPasswd" value={newPasswd} onChange={this.changeHandler} />
                                       
                                    </div>
                                    <div className="mb-3 row justify-content-center"  >
                                        <label for="inputConfirmPass" className="col-form-label col-sm-2">Confirm Password</label>
                                       
                                        <input type="password" className="form-control col-sm-4" id="inputConfirmPass" name="confirmPasswd" value={confirmPasswd} onChange={this.changeHandler} />
                                    
                                    </div>
                                </form> : null
                            }
                            <button type="button" className="btn btn-primary px-4" type="submit" value="Submit"  >
                                Submit
                            </button>

                        </div>
                    </form>

                </div>
            </center>
        )
    }
}

export default Services
