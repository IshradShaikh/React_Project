import * as React from 'react';
import { AppBar,Box,Toolbar, Button,MenuIcon , Typography   } from '@material-ui/core';
import * as FaIcons from 'react-icons/fa';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#1d8fbd" , height:"3rem" }}>
      {/* #0275d8 */}
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ marginBottom:"1rem" }} >
          <b>Candent</b>
          </Typography>
  
            <FaIcons.FaUserCircle  onClick={()=>{alert("LogOut")}} style={{ size:"10px" , marginLeft:"75rem" , marginBottom:"1rem" }}  />
          
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
