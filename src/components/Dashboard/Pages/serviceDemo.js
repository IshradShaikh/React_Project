import React, { useState } from 'react'
import Demo from './Demo';
//import '../App.css'
import { Card } from 'react-bootstrap'

function Services() {
    const [show, setShow] = useState(false)

    function onSubmit() {
        // if(x==0){document.getElementById("mycode").style.display="block"}
        // else document.getElementById("mycode").style.display="none"
        window.confirm("oh");
        // return;
        // //  var a=getElementById('exampleRadios3');

    }
    return (
        <div >
                <Card style={{width:"50%"  ,marginLeft:"23rem" , marginTop:"1rem" ,marginBottom:"2rem"}}>
                    <Card.Header as="h5"><b><h3>Services</h3></b></Card.Header>
                </Card>

            <div style={{marginLeft:"8rem" , marginTop:"1rem"}}>
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" style={{ marginRight: "0.5rem"}}
                    onClick={() => setShow(false)} />
                <label class="form-check-label" for="exampleRadios1" style={{ marginRight: "4rem" }} >
                    Lock
                </label>

                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" style={{ marginRight: "0.5rem" }}
                    onClick={() => setShow(false)} />
                <label class="form-check-label" for="exampleRadios2" style={{ marginRight: "4rem" }}>
                    UnLock
                </label>

                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" style={{ marginRight: "0.5rem" }}
                    //  checked="false"
                    onClick={() => setShow(true)} />
                <label class="form-check-label" for="exampleRadios3">
                    Reset Password
                </label>
            </div><br />

            <div >
                <form class="row g-3" >
                    <div class="col-md-2" style={{ marginLeft: "30rem" }} >
                        <label for="inputEmail4" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="inputEmail4"  />
                    </div>
                    <div class="col-md-2"  >
                        <label for="inputEmail4" class="form-label">Connection</label>
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option>conn1</option>
                            <option>conn2</option>
                        </select>
                    </div>
                </form>
                {
                    show ? <form class="row g-3" >
                        <div class="col-md-2" style={{ marginLeft: "30rem" , marginTop:"2rem"}} >
                            <label for="inputEmail4" class="form-label">Change Password</label>
                            <input type="text" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-2"  style={{marginTop:"2rem"}} >
                            <label for="inputEmail4" class="form-label">Confirm Password</label>
                            <input type="text" class="form-control" id="inputEmail4" />
                        </div>
                    </form> : null
                }

                <input type="submit" value="Submit" onClick={onSubmit} style={{ marginTop: "2rem" , marginLeft:"7rem"}} className="btn btn-primary" />

            </div>

        </div>

    )
}

export default Services
