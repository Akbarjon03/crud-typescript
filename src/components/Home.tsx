import React from 'react';
import { useState } from "react";
import EmployeeList from "./EmployeeList";
import { IEmplopee, PageEnum, dummyEmplopeeList } from './Employee.type';
import AddEmployee from './AddEmployee';

function Home() {
  const [employeeList, setEmployeeList] = useState(
    dummyEmplopeeList as IEmplopee[]
  );
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add);
  }
  const showListPage = () => {
    setShownPage(PageEnum.list);
  }
  const addEmployee = (data: IEmplopee) => {
    setEmployeeList([...employeeList, data]);
  }
  return (
    <>
      <article className="text-center navbar navbar-expand-lg bg-info justify-content-center">
        <header>
          <h3>CRUD in Typescript</h3>
        </header>
      </article>

      <section className="">
        {shownPage === PageEnum.list && (
          <>
            <input type="button" value="Add Employee" className="btn btn-info m-2" onClick={onAddEmployeeClickHnd}/>
            <EmployeeList list={employeeList}/>
          </>
        )}
        {shownPage === PageEnum.add &&
          (
            <AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployee}/>
          )
        }
      </section>
    </>
  )
}

export default Home