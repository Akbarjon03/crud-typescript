import React from "react";
import "./EmployeeModal.sytle.css";
import { IEmplopee } from "./Employee.type";

type Props = {
  onClick: () => void;
  data: IEmplopee;
};

const EmployeeModal = ({ onClick, data }: Props) => {
  // Added data to the destructured props
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClick}>
          &times;
        </span>
        <div>
          <h3> Employee data</h3>
          <div>
            <label> First name : {data.firstName}</label>
          </div>
          <div>
            <label> Last name : {data.lastName}</label>
          </div>
          <div>
            <label> Email Address : {data.email}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
