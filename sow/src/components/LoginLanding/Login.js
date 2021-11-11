import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect, useNavigate } from "react-router-dom";
// import axios from "axios";

function Login() {

    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

    };

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>Username</label><br />
                <input type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} /><br /><br />

                <label>Password</label><br />
                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} /><br /><br />

                <button type="submit" onClick={clickHandler} >Login</button>

            </form>
        </div>
    )
}

export default Login
