import React,{useState } from 'react'


import LineChart from './LineChart'
import TableFile from './TableFile'
// import '../Components/SideBar.css'


function Dashboard(props) {

    return (
      <div>
        <TableFile/>
        
{/* <div style={{width: "80vw" ,marginLeft:"7rem" }}>
  <LineChart/>
</div> */}
{/* <h1>{props.name}</h1> */}
        </div>
    )
}

export default Dashboard
