import React, { useState } from 'react';
import { IEmplopee } from './Employee.type';

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmplopee) => void;
};
const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const { onBackBtnClickHnd, onSubmitClickHnd } = props;
  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  }
  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  }
  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  }
  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const data: IEmplopee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    }
    onSubmitClickHnd(data);
  }

  return (
    <>
      <form className="m-5" onSubmit={onSubmitBtnClickHnd}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={firstName} onChange={onFirstNameChangeHnd} placeholder="First name" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" value={lastName} onChange={onLastNameChangeHnd} placeholder="Last name" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" value={email} onChange={onEmailChangeHnd} placeholder="Email address" aria-describedby="basic-addon1"/>
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
          <input type="button" className="btn btn-primary" value="Back" onClick={onBackBtnClickHnd}/>
          <input type="submit" className="btn btn-success" value="Add employee"/>
        </div>
      </form>
    </>
  )
}

export default AddEmployee