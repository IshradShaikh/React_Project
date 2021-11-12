import React from "react";
import "./Table.css"

export default function SOWComTable({Company}) {
  return (
    <table>
      <tr>
        <th> Company Name </th>
        <th> Start Date </th>
        <th> End Date </th>
        <th> Days Left </th>
      </tr>
      { Company && Company.map((company) => (
        <tr>
          <td> {company.name} </td>
          <td> {company.startDate} </td>
          <td> {company.endDate} </td>
          <td> {company.daysLeft} </td>
        </tr>
      ))}
    </table>
  );
}