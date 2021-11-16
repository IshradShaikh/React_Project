import React from "react";
import { Pie } from "react-chartjs-2";

//logout
import logo from '../../logo_colored_jpg.png'

// Table
import Table from "./SOWComTable";

// API
// import { CustomerDataSet } from "./CustomerDataSet";
import axios from "axios";

function Pychart() {
  const [selectedGraphElement, setGraphElement] = React.useState("");
  const [elementsSelected, setElementsSelected] = React.useState("");
  const [selectedDataSets, setSelectedDataSets] = React.useState("");

  const [ActiveZone, setActiveZone] = React.useState({ length: 0 });
  const [WarningZone, setWarningZone] = React.useState({ length: 0 });
  const [DangerZone, setDangerZone] = React.useState({ length: 0 });

  const [companyData, setCompanyData] = React.useState(null);
  const [customer, setCustomer] = React.useState("");

  React.useEffect(() => {
    axios.get("http://192.168.1.251:8000/sow").then((res) => {
      setCompanyData(res.data);
      setActiveZone(res.data.data3);
      setWarningZone(res.data.data2);
      setDangerZone(res.data.data1);
    });
  }, []);

  const passData = [ActiveZone, WarningZone, DangerZone];

  const data = {
    labels: ["More than a month", "Less than a month", "Less than 15 days"],
    datasets: [
      {
        label: "SOW tracker",
        data: [ActiveZone.length, WarningZone.length, DangerZone.length],
        backgroundColor: [
          "rgb(10,132,10,0.5)",
          "rgb(255,165,0,0.5)",
          "rgb(255,0,0,0.8)",
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  };

  React.useEffect(() => {
    setCustomer(passData[selectedGraphElement.index]);
  }, [selectedGraphElement]);

  const getElementAtEvent = (element) => {
    if (!element.length) return;
    setGraphElement(element[0]);
    // console.log(element[0])
  };

  const getDatasetAtEvent = (datasets) => {
    if (!datasets.length) return;
    const datasetIndex = datasets[0].datasetIndex;
    setSelectedDataSets(data.datasets[datasetIndex].label);
  };

  const getElementsAtEvent = (elements) => {
    if (!elements.length) return;
    setElementsSelected(elements.length);
  };

  return (
    <>      
     {/* <header className="App-header">
    <div >
      <img src={logo} style={styles.Candent_Logo} alt="Logo" />
      <a href="/login" style={styles.logoutLink}>
        {" "}
        Logout{" "}
      </a>
    </div>
  </header>  */}
    <div className="container">
        <div style={{ float: "left" }}>
          <Pie
            data={data}
            options={options}
            getElementAtEvent={getElementAtEvent}
            getDatasetAtEvent={getDatasetAtEvent}
            getElementsAtEvent={getElementsAtEvent}
            width={500}
            height={500}
          />{" "}
      </div>
      {selectedGraphElement && (
        <div style={{ float: "right" }}>
          {customer && `${customer.length} SOW${customer.length==0?'s':''} here`}
          <Table Company={customer} />
        </div>
      )}{" "}
      {/* <button onClick={() =>{
  console.log(companyData)
  console.log(companyData.data1)
  console.log(companyData.data2)
  console.log(companyData.data3)
}
}> Show data </button> */}
    </div>
    </>
  );
}

export default Pychart;

const styles = {
  Candent_Logo: {
    width: 200,
    height: 70,
    
    
  },
  logoutLink: {
    alignItems: "right",
    float: "right",
    position: "absolute",
    right: 10,
    top: 20,
    textDecoration: "none",
    color: "white",
  },
  container:{
    backgroundColor : 'white',
  }
};