import React, { useState } from "react";
import { IEmplopee } from "./Employee.type";
import "./EditEmployee.style.css";

type Props = {
  data: IEmplopee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmplopee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd} = props;
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };
  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };
  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };
  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IEmplopee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };
  return (
    <>
      <form className="m-5" onSubmit={onSubmitBtnClickHnd}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={onFirstNameChangeHnd}
            placeholder="First name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={onLastNameChangeHnd}
            placeholder="Last name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={onEmailChangeHnd}
            placeholder="Email address"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
          <input
            type="button"
            className="btn btn-primary"
            value="Back"
            onClick={onBackBtnClickHnd}
          />
          <input
            type="submit"
            className="btn btn-success"
            value="Update employee"
          />
        </div>
      </form>
    </>
  );
};

export default EditEmployee;
