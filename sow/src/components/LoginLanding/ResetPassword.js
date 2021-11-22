// import React, { useState } from 'react'
// import { Button, TextField } from '@material-ui/core';
// import { BrowserRouter as Router, Routes, Route, Link, Redirect, useNavigate } from "react-router-dom";
// import './Login.css'
// import logo from './logo_colored_jpg.png'

// function ResetPassword() {

//     let navigate = useNavigate();

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [cnpassword, setCnPassword] = useState("");

//     function handleSubmit(event) {
//         event.preventDefault();
//     }

//     const clickHandler = () => {

//         navigate("/");

//         // if (username == 'admin@admin.com' && password == 'admin123') {
//         //     setUsername('');
//         //     setPassword('');
//         //     navigate("./Landing");

//         // }
//         // else {
//         //     alert("Creds Invalid!");
//         //     setUsername('');
//         //     setPassword('');
//         // }

//     };

//     return (
//         <div className="container">
//             <img style={styles.logo} src={logo} alt='logo' />
//             <form onSubmit={handleSubmit}>
//                 <h1>Reset Password</h1>
//                 <div className="ui divider"></div>
//                 <div className="ui form"></div>
//                 <TextField
//                     fullWidth={true}
//                     className="field"
//                     label="Username"
//                     type="email"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 /><br /><br />
//                 <TextField
//                     fullWidth={true}
//                     className="field"
//                     label="Password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 /><br /><br />
//                 <TextField
//                     fullWidth={true}
//                     className="field"
//                     label="Confirm Password"
//                     type="password"
//                     value={cnpassword}
//                     onChange={(e) => setCnPassword(e.target.value)}
//                 /><br /><br /><br />
//                 <Button variant="contained" type="submit" onClick={clickHandler} >Save</Button>
//             </form>
//         </div>
//     )
// }

// export default ResetPassword

// const styles = {
//     logo: {
//         marginTop: '50px',
//         marginLeft: '455px',
//         height: 150,
//         width: 425,
//     }
// }


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, Redirect, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Button, TextField } from '@material-ui/core';
// import './Login.css'
// import logo from './logo_colored_jpg.png'
// import { Zoom, Slide } from 'react-reveal';


// function Login() {

//     let navigate = useNavigate();

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [cnpassword, setCnPassword] = useState("");


//     const user = { username: username, password: password, cmpassword: cnpassword }

//     const clickHandler = () => {

//         let headersList = {
//             "Content-Type": "application/x-www-form-urlencoded",
//         }
//         let reqOptions = {
//             url: "http://192.168.1.251:8000/changePassword",
//             method: "POST",
//             headers: headersList,
//             data: user,
//         }
//         axios.request(reqOptions)
//             .then(res => {
//                 console.log(res)
//                 if (res.data.message == "Successfully Change Password") {
//                     alert(res.data.message)
//                     navigate("/")
//                     setUsername('');
//                     setPassword('');
//                     setCnPassword('');
//                 }
//                 else {
//                     alert(res.data.message)
//                     navigate(".")
//                     setUsername('');
//                     setPassword('');
//                     setCnPassword('');
//                 }
//             })
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//     }

//     return (
//         <div >
//             <img style={styles.logo} src={logo} alt='logo' />
//             <div className="container">

//                 <form onSubmit={handleSubmit}>
//                     <h2>Reset Password</h2>
//                     <div className="login">
//                         <TextField
//                             fullWidth={true}
//                             className="field"
//                             label="Username"
//                             type="email"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         /><br /><br />
//                         <TextField
//                             fullWidth={true}
//                             className="field"
//                             label="New Password"
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         /><br /><br />
//                         <TextField
//                             fullWidth={true}
//                             className="field"
//                             label="Confirm Password"
//                             type="password"
//                             value={cnpassword}
//                             onChange={(e) => setCnPassword(e.target.value)}
//                         /><br /><br /><br />
//                         <Button fullWidth={true} size="small" color="primary" variant="contained" type="submit" onClick={clickHandler} >Save</Button><br /><br />
//                     </div>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login

// const styles = {
//     logo: {
//         marginTop: '50px',
//         marginLeft: '455px',
//         height: 150,
//         width: 425,
//     }
// }



import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { } from '@material-ui/core';
import logo from './Candent_Logo2.png'
import { Grid, Paper, Avatar, TextField, Button, Typography, } from '@material-ui/core'
import Alert from '@mui/material/Alert';
import { } from '@material-ui/core';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Info } from '@mui/icons-material';
toast.configure();


function Login() {

    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cnpassword, setCnPassword] = useState("");


    const user = { username: username, password: password, cmpassword: cnpassword }

    const clickHandler = () => {

        let headersList = {
            "Content-Type": "application/x-www-form-urlencoded",
        }
        let reqOptions = {
            url: "http://192.168.1.251:8000/changePassword",
            method: "POST",
            headers: headersList,
            data: user,
        }
        axios.request(reqOptions)
            .then(res => {
                console.log(res)
                if (res.data.message == "Successfully Change Password") {
                    // <Alert severity="success">{(res.data.message)}</Alert>
                    toast.success(res.data.message, { position: toast.POSITION.BOTTOM_RIGHT })
                    navigate("/Login")
                    setUsername('');
                    setPassword('');
                    setCnPassword('');
                }
                else {
                    if(username == '' && password == '' && cnpassword == ''){
                        toast.info('All fields are empty!', { position: toast.POSITION.BOTTOM_RIGHT })
                        navigate(".")
                    }
                    else{
                    toast.error(res.data.message, { position: toast.POSITION.BOTTOM_RIGHT })
                    console.log(res.data)
                    navigate(".")
                    setUsername('');
                    setPassword('');
                    setCnPassword('');
                    }
                }
            })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }


    const paperStyle = { padding: 20, height: '55vh', width: 300, margin: "20px auto" }

    return (
        <Grid>
            <img style={styles.logo} src={logo} alt='logo' /><br /><br />
            <Paper elevation={5} style={paperStyle}>

                <Grid align='center'>
                    <h2>Reset Password</h2>
                </Grid><br />
                <TextField
                    fullWidth={true}
                    className="field"
                    label="Username"
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br /><br />
                <TextField
                    fullWidth={true}
                    className="field"
                    label="New Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br /><br />
                <TextField
                    fullWidth={true}
                    className="field"
                    label="Confirm Password"
                    type="password"
                    value={cnpassword}
                    onChange={(e) => setCnPassword(e.target.value)}
                /><br /><br /><br />
                <Button fullWidth={true} size="small" color="primary" variant="contained" type="submit" onClick={clickHandler} >Save</Button><br /><br />
            </Paper>
        </Grid>
    )
}

export default Login

const styles = {
    logo: {
        marginTop: '50px',
        marginLeft: '468px',
        height: 140,
        width: 425,
    }
}