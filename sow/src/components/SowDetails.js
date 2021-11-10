import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function SowDetails() {
    function dateForm(dt){
       return dt.getDate() + " " +dt.toLocaleString('default', { month: 'long' }) + " " + dt.getFullYear()
    }

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
    const [custDetails , setCustDetails]=useState("");
    const [selectedValue, setSelectedValue] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState([]);
    const [sowPdf, setSowPdf] = useState("");
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);

    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.label) : []);

    }
    const handleChangeSkill = (e) => {
        setSelectedSkill(Array.isArray(e) ? e.map(x => x.label) : []);

    }

    //file upload
    const handlePdf=(e)=>{
        let files=e.target.files;
        let reader=new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload=(e)=>{
            const url=""
            const formData={file:e.target.result}
        }
        
    }

    const show = () => {
        console.log("dateOfCreation : "+ date)
        console.log("customer Details : "+ custDetails)
        console.log("startDate : "+ dateForm(state[0].startDate))
        console.log("endDate : "+ dateForm(state[0].endDate))
       // console.log(dt + " " + startDate)
        console.log(sowPdf)
        selectedValue.map(val => { console.log(val) })
        selectedSkill.map(val => { console.log(val) })
    }

    return (
        <form>
        <div>
            <h3>Today's Date: {date}</h3>

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
            <br/>
            <textArea type="text" style={{ width: "30%" }} onChange={(e)=>setCustDetails(e.target.value)} /> 
            <br/><br/>
            <div  style={{ width: "30%", marginLeft:"27rem"}}>
            
            <label><b>Select Employees</b></label>
            <Select
                options={data1} // set list of the data
                className="dropdown"
                placeholder="Select Option"
                value={data1.filter(obj => selectedValue.includes(obj.label))} // set selected values

                onChange={handleChange} // assign onChange function
                isMulti
                isClearable
            />
            {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
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
            <br/>
            <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
            <br/>
           
            <label><b>SOW Pdf</b></label><br />
            <input type="file" onChange={ (e) => setSowPdf(e.target.files)}  />
            {/* (e) => setSowPdf(e.target.files) */}
            <br/><br/>
            <button onClick={show}>submit</button>

        </div>
        </form>
    );
}

