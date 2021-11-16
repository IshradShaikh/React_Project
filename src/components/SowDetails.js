import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function SowDetails() {

    let data = new FormData();

    var skillSet = [
        { value: 1, label: "React" },
        { value: 2, label: "Angular" },
        { value: 3, label: "UI5" }
    ]
    var data1 = [
        { value: 1, label: "Ishrad" },
        { value: 2, label: "Gaurav" },
        { value: 3, label: "Simran" }
    ]
    const dt = new Date();
    const date = dateForm(dt)
    const [startDate, setStartDate] = useState(dt);
    const [endDate, setEndDate] = useState(dt);
    const [custDetails, setCustDetails] = useState("");
    const [selectedEmployee, setselectedEmployee] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState([]);
    const [file, setFile] = useState("");
  

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    function dateForm(dt) {
        //  return dt.getDate() + " " +dt.toLocaleString('default', { month: 'long' }) + " " + dt.getFullYear()
        return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate()

    }

    const handleChange = (e) => {
        setselectedEmployee(Array.isArray(e) ? e.map(x => x.label) : []);

    }
    const handleChangeSkill = (e) => {
        setSelectedSkill(Array.isArray(e) ? e.map(x => x.label) : []);

    }

    //file upload
    const handlePdf = ({ target: { files } }) => {
        console.log(files[0])
        data.append('sowpdf', files[0]);
    }

    const show = (e) => {

        console.log("dateOfCreation : " + date)
        console.log("customer Details : " + custDetails)
        console.log("startDate : " + dateForm(state[0].startDate))
        console.log("endDate : " + dateForm(state[0].endDate))
        // console.log(dt + " " + startDate)
        console.log(file)
        selectedEmployee.map(val => { console.log(val) })
        selectedSkill.map(val => { console.log(val) })

        if (custDetails != "" && startDate != null && endDate != null && selectedEmployee != null && file != null && selectedSkill != null) {

            data.append('customerDetails', custDetails);
            data.append('employees', selectedEmployee.toString());
            data.append('endDate', dateForm(state[0].endDate));
            data.append('skillset', selectedSkill.toString());
            data.append('startDate', dateForm(state[0].startDate));

            axios.post('http://192.168.1.251:8000/sow', data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log(response)
                    toast.info(response.data.message, { position: toast.POSITION.BOTTOM_RIGHT })
                })
                .catch(error => {
                    console.log("Error: " + error)
                    toast.error("error", { position: toast.POSITION.BOTTOM_RIGHT })

                })

            setCustDetails("");
            setselectedEmployee([]);
            setSelectedSkill([]);
            // setfile("No File Chosen");
            setState([{
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection'
            }]);
            setFile("");
        }//if
        else {
            toast.error("All fields are required", { position: toast.POSITION.BOTTOM_RIGHT })
        }

    }

    return (

        <div>
            {/* <h3>Today's Date: {date}</h3> */}

            {/* <label><b>SOW Start Date</b></label>
            <DatePicker
                // value={startDate}
                selected={startDate}
                onChange={date => setStartDate(date)} />
            <br /><br />
            <label><b>SOW End Date</b></label>
            <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)} />
            <br /><br /> */}

            <label><b>Customer Deatails</b></label>
            <br />
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Customer Deatails</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>

            <input type="text" value={custDetails} style={{ width: "30%" }} onChange={(e) => setCustDetails(e.target.value)} />
            <br /><br />
            <div style={{ width: "30%", marginLeft: "27rem" }}>

                <label ><b>Select Employees</b></label>
                <Select
                    options={data1} // set list of the data
                    className="dropdown"
                    placeholder="Select Option"
                    value={data1.filter(obj => selectedEmployee.includes(obj.label))} // set selected values

                    onChange={handleChange} // assign onChange function
                    isMulti
                    isClearable
                />
                {/* {selectedEmployee && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                <div><b>Selected Value: </b> {JSON.stringify(selectedEmployee, null, 2)}</div>
            </div>

            } */}
                <br />
                <label><b>Skill Set</b></label>
                <Select style={{ width: "50%" }}
                    options={skillSet} // set list of the data
                    className="dropdown"
                    placeholder="Select Option"
                    value={skillSet.filter(obj => selectedSkill.includes(obj.label))} // set selected values

                    onChange={handleChangeSkill} // assign onChange function
                    isMulti
                    isClearable
                />
            </div>
            <br /> <br />
            <label><b>SOW Start Date & End Date</b></label>
            <br />
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
            <br />


            <label><b>SOW Pdf</b></label><br />
            <input type="file" onChange={(e) => handlePdf(e)} name="file" />
            {/* (e) => setfile(e.target.files)  accept="application/pdf"*/}
            <br /><br />
            <button onClick={show}>submit</button>

        </div>

    );
}

