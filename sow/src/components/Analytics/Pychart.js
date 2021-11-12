import React from "react";
import { Pie } from "react-chartjs-2";

// Table
import Table from "./SOWComTable";

// API
import { CustomerDataSet } from "./CustomerDataSet";

function Pychart() {
  const [selectedGraphElement, setGraphElement] = React.useState("");
  const [elementsSelected, setElementsSelected] = React.useState("");
  const [selectedDataSets, setSelectedDataSets] = React.useState("");
  const [file, setFile] = React.useState(null);

  const [companyData, setCompanyData] = React.useState([]);

  const data = {
    labels: ["More than a month", "Less than a month", "Less than 15 days"],
    datasets: [
      {
        label: "SOW tracker",
        data: [
          CustomerDataSet[0].length,
          CustomerDataSet[1].length,
          CustomerDataSet[2].length,
        ],
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
    setCompanyData(CustomerDataSet[selectedGraphElement.index]);
  }, [selectedGraphElement]);

  const getElementAtEvent = (element) => {
    if (!element.length) return;
    setGraphElement(element[0]);
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
    <div>
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

      <div style={{ float: "right" }}>
        {(selectedGraphElement.index == "0" && "More than a month") ||
          (selectedGraphElement.index == "1" && "Less than a month") ||
          (selectedGraphElement.index == "2" && "Less than 15 days") ||
          ""}{" "}
        {selectedGraphElement && " - "}{" "}
        {selectedGraphElement &&
          CustomerDataSet[selectedGraphElement.index].length}
        {selectedGraphElement && <Table Company={companyData} />}{" "}
      </div>
    </div>
  );
}

export default Pychart;
