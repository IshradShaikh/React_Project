import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Landing() {

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>

            {/* <button onClick={handleSubmit} type="submit" >Add Sow</button> &nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit} type="submit" >Admin</button> */}

            <Link to="/SowDetails"><button>Add Sow Details</button></Link> &nbsp;&nbsp;&nbsp;
            <Link to="/Admin"><button>Admin</button></Link> &nbsp;&nbsp;&nbsp;
            <Link to="/"><button>Log Out</button></Link>

        </div>
    )
}

export default Landing
