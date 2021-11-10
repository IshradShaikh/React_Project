import React from "react";
import { Pie } from "react-chartjs-2";

import Table from "./SOWComTable"

function Pychart() {

  const [selectedGraphElement,setGraphElement] = React.useState('')
  const [elementsSelected, setElementsSelected] = React.useState('')
  const [selectedDataSets, setSelectedDataSets] = React.useState('')

  const data = {
    labels: ["Active", "Warning", "Danger"],
    datasets: [
      {
        label: "SOW",
        data: [30, 12, 5],
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
  };

  const getElementAtEvent = element => {
    if(!element.length) return;
    setGraphElement(element[0])
  }

  const getDatasetAtEvent = datasets => {
    if(!datasets.length) return;
    const datasetIndex = datasets[0].datasetIndex 
    setSelectedDataSets(data.datasets[datasetIndex].label)
  }

  const getElementsAtEvent = elements => {
    if (!elements.length) return;
    setElementsSelected(elements.length);
  }

  return (
    <div>
      <Pie data={data} options={options} redraw={false}
      getElementAtEvent={getElementAtEvent} getDatasetAtEvent={getDatasetAtEvent} getElementsAtEvent={getElementsAtEvent} />

      <h5> {selectedGraphElement && `selectedGraphElement : ${selectedGraphElement.index}`} </h5>

      { selectedGraphElement && <Table/>}

    </div>
  );
}

export default Pychart;