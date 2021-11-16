import React, { useState, useEffect } from 'react'
import { TextField, Button, Paper,  Container , Typography , Grow , Grid  } from '@material-ui/core';
import useStyles from './styles'
import Select from 'react-select';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const SowDetail = () => {

    var [mail , setMail]=useState([{
        label:""
    }]);
    const [selectedEmployee, setselectedEmployee] = useState([]);

    useEffect(()=>{
        axios.get('http://192.168.1.251:8000/sow/employeeCreation')
    .then(response => {
        console.log(response)
        // this.setState({
        //     users: response.data.data

        // })
        //console.log(response.data.data);
           mail=response.data.data.map(obj => ({...obj}));

        //
         console.log(mail)
        
        //   mail1.map(x=>mail.push(x))
           mail.map(x=>console.log(x.email))
          
    })
    .catch(error => {
        console.log(error)
        // this.setState({
        //     errorMsg: 'Error retriving data'
        // })
    })

    },[])

    const classes = useStyles();
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
    const date = dateForm(dt);
   
    const [projectName, setProjectName] = useState("");
    const [customerDetails, setCustDetails] = useState("");
    // const [selectedEmployee, setselectedEmployee] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState([]);
    const [file, setFile] = useState("");
    const [sowPdf, setSowPdf] = useState(null);
    const[username , setUsername]=useState("ishrad");
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

    // 
    const handleChange = (e) => {
        setselectedEmployee(Array.isArray(e) ? e.map(x => x.label) : []);
        console.log(selectedEmployee)

    }
    const handleChangeSkill = (e) => {
        setSelectedSkill(Array.isArray(e) ? e.map(x => x.label) : []);

    }

    //file upload
    const handlePdf = ({ target: { files } }) => {
        setFile(files[0].name)
        console.log(files[0])
        setSowPdf(files[0]);
      //  data.append('sowpdf', files[0]);
        
    }

    const show = (e) => {

        console.log("dateOfCreation : " + date)
        console.log("username : " + username)
        console.log("project : " + projectName)
        console.log("customer Details : " + customerDetails)
        console.log("startDate : " + dateForm(state[0].startDate))
        console.log("endDate : " + dateForm(state[0].endDate))
        // console.log(dt + " " + startDate)
        console.log(file)
        selectedEmployee.map(val => { console.log(val) })
        selectedSkill.map(val => { console.log(val) })


        data.append('customerDetails', customerDetails);
        data.append('employees', selectedEmployee.toString());
        data.append('endDate', dateForm(state[0].endDate));
        data.append('skillset', selectedSkill.toString());
        data.append('startDate', dateForm(state[0].startDate));
        data.append('projectName', projectName);
        data.append('username', username);
        data.append('sowpdf', sowPdf);

        axios.post('http://192.168.1.251:8000/sow/', data, {
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
     setFile("");
     setProjectName("");
     setselectedEmployee([]);
     setSelectedSkill([]);
     setFile("");
     setSowPdf(null);
    setState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
        }
    return (
       
      
         <Container maxWidth ='md'>
        
           <Paper className={classes.outerPaper}>
           <Typography variant="h5">Create SOW</Typography>
          
         <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3} > 
                        <Grid item xs={12} sm={6}>
           <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} >
                      <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
                <TextField
                    name="Customer"
                    variant="outlined"
                    label="Customer"
                    fullWidth
                    value={customerDetails} 
                    onChange={(e) => setCustDetails(e.target.value)}
                 
                />
                <TextField
                    name="project"
                    variant="outlined"
                    label="Project"
                    fullWidth
                    value={projectName} 
                    onChange={(e) => setProjectName(e.target.value)}/> 
                {/* <div className="custom-file" style={{width:"97%" , marginTop:"10px",marginBottom:"10px" ,   }}>
                <input 
                 type="file"
                  className="custom-file-input"
                 onChange={(e) => handlePdf(e)}
                 />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
    {file}
    </label>
</div> */}
                <div className={classes.selectInput}>
                <Select
                    options={data1} // set list of the data
                    className="dropdown"
                    placeholder="Select Employees"
                    value={data1.filter(obj => selectedEmployee.includes(obj.label))} // set selected values
                   // value={selectedEmployee}
                    onChange={handleChange} // assign onChange funct
                    isMulti
                    isClearable 

                    theme={theme => ({
                      ...theme,
                      colors: {
                    ...theme.colors,
            primary: "#0275d8",
          
          }
        })}
                />
                </div>
                <div className={classes.selectInput }>
                    <Select 
                     name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    options={skillSet} // set list of the data
                    className="dropdown"
                    placeholder="Select Skills"
                    value={skillSet.filter(obj => selectedSkill.includes(obj.label))} // set selected values
                    onChange={handleChangeSkill} // assign onChange function
                    isMulti
                    isClearable
                    theme={theme => ({
                      ...theme,
                      colors: {
                    ...theme.colors,
            primary: "#0275d8",
          
          }
        })}
                />
                </div>
                <Button  style={{marginTop:"9px" , marginBottom:"9px" , backgroundColor:"#1d8fbd" , color:"white"}}
  variant="contained"
  component="label"

>
  Select File
  <input
    type="file"
    hidden
    onChange={(e) => handlePdf(e)}
  />
</Button> <input style={{height:"2.4rem" , width:"73%",marginTop:"9px"  }}
                    name="project"
                    variant="outlined"
                   // label="Project"
                   // fullWidth
                    value={file} 
                    // onChange={(e) => setProjectName(e.target.value)}
                    /> 
           

            </form>
           
            </Paper>
       
        </Grid>
      
        
        <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} >
        <label style={{marginRight:"20%"}}> StartDate </label>
        <label>EndDate </label>
            <br />
        <div >
         <DateRange 
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            />
            </div>
                    </Paper>
                 
                    <Button className={classes.buttonSubmit} variant="contained" color="primary"  
                    size="large" onClick={show} type="submit" fullWidth>Submit</Button>

        </Grid>
        
        </Grid>
            </Container>
           </Grow>
                     </Paper >
        </Container>
        
       
    )
}
export default SowDetail;
