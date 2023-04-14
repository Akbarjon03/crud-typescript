import React from 'react';
import  "./Home.style.css";
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
    setShownPage(PageEnum.list)
  }

  return (
    <>
      <article className="article-header">
        <header>
          <h1>C.R.U.D in Typescript</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input type="button" value="Add Employee" onClick={onAddEmployeeClickHnd}/>
            <EmployeeList list={employeeList}/>
          </>
        )}
        {shownPage === PageEnum.add && <AddEmployee onBackBtnClickHnd={showListPage}/>}
      </section>
    </>
  )
}

export default Home