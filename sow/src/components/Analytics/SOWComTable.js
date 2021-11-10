import React from "react";

export default function SOWComTable() {
  const [CompanySOW, setCompany] = React.useState(companySOW);

  return (
    <table>
      <tr>
        <th> Company Name </th>
        <th> End Date </th>
        <th> Days Left </th>
      </tr>
      { CompanySOW && CompanySOW.map((company) => (
        <tr>
          <td> {company.name} </td>
          <td> {company.endDate} </td>
          <td> {company.daysLeft} </td>
        </tr>
      ))}
    </table>
  );
}

const companySOW = [
  {
    name: "INFOSYS LTD.",
    startDate: "01/02/2021",
    endDate: "01/01/2022",
    daysLeft: "16",
  },
  {
    name: "INFOSYS LTD.",
    startDate: "01/02/2021",
    endDate: "01/01/2022",
    daysLeft: "7",
  },
  {
    name: "INFOSYS LTD.",
    startDate: "01/02/2021",
    endDate: "01/01/2022",
    daysLeft: "18",
  },
  {
    name: "INFOSYS LTD.",
    startDate: "01/02/2021",
    endDate: "01/01/2022",
    daysLeft: "3",
  },
  {
    name: "INFOSYS LTD.",
    startDate: "01/02/2021",
    endDate: "01/01/2022",
    daysLeft: "12",
  },
];
