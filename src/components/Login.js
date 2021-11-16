import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TextField } from '@material-ui/core';
import './Login.css'
import logo from '../logo_colored_jpg.png'
// const headers = {
//     Content-type : 'multipart/form-data',
// }
function Login() {
    let navigate = useNavigate();
    // const size = {
    //     height: 10,
    //     width: 10
    // }
    // var data={
    //     username:"rajani.salunkhe@candentech.com",
    //     password:"Admin@1234"
    // }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [user, setUser] = useState([])
    const clickHandler = () => {
        if (username == 'admin@admin.com' && password == 'admin123') {
            setUsername('');
            setPassword('');
            navigate("./Landing");
        }
        else {
            alert("Creds Invalid!");
            setUsername('');
            setPassword('');
        }
        // axios.post('http://192.168.1.251:8000/signin', data)
        //     .then(res => console.log(res))
    };
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="container">
            <img style={styles.logo} src={logo} alt='logo' />
            <form onSubmit={handleSubmit}>
                <h1>LogIn</h1>
                <div className="ui divider"></div>
                <div className="ui form"></div>
                <TextField className="field"
                    label="Username"
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br /><br />
                <TextField className="field"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br /><br />
                <Button variant="contained" type="submit" onClick={clickHandler} >Login</Button>
                <p className="forget-password text-right">
                    <Link to={'/ResetPassword'}>ResetPassword</Link>
                </p>
            </form>
        </div>
    )
}
export default Login
const styles = {
    logo: {
        height: 200,
        width: 600
    }
}