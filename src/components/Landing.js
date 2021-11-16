import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Analytics from './Analytics'
function Landing() {

  var role = true;
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
   
    <div className="col d-flex justify-content-center ">   
    
      <Link to="/SowDetail" style={{color:"black" , textDecorationLine:"none"}} >
      <div className="card" style={{width: "15rem" , height:"10rem" ,backgroundColor:"white"}} >
        <div className="card-body">
          <h5 className="card-title">Add SowDetail</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>        </div>
      </div>
      </Link>
      <Link to="/Admin" style={{color:"black" , textDecorationLine:"none"}} >
      <div className="card" style={{width: "15rem" , height:"10rem",backgroundColor:"white"}} >
        <div className="card-body">
          <h5 className="card-title">Admin</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>        </div>
      </div>
      </Link>
      <Link to="/Analytics" style={{color:"black" , textDecorationLine:"none"}} >
      <div className="card" style={{width: "15rem" , height:"10rem" ,backgroundColor:"white"}} >
        <div className="card-body">
          <h5 className="card-title">Analytics</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>        </div>
      </div>
      </Link>  
    </div>
  )
}

export default Landing