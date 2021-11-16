import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
     
    },
    
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#0275d8"
    },
  },
  
  outerPaper:{
    padding: theme.spacing(2),
    margin: '10px -10rem  -10rem',
    backgroundColor:"#F5F5F5"
  },
  paper: {
    padding: theme.spacing(2),
    width:"100%",
    margin: '20px 0',
   
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
   
     
  },
  selectInput:{
    width: "97%",
    marginBottom: "10px",
    marginTop:"10px",
    borderBlockColor:"#0275d8"
  
  },
  placeholder:{
    marginLeft:"0px"
  },
  buttonSubmit: {
  backgroundColor:"#0275d8",
   // marginTop:"3px",
    //marginBottom: 10,
   
    
  },
 
}));