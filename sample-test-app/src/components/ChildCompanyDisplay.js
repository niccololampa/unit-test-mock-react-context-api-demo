import React from "react";
import { CompanyConsumer } from "../contexts/CompanyContext";


const ChildCompanyDisplay = ({ companyName, employee }) => {
  return (
    <div>{`${employee}: ${companyName}`}</div>
  )
};

export default CompanyConsumer(ChildCompanyDisplay);
