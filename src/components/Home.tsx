import React from 'react';
import  "./Home.style.css";
import { useState } from "react";
import EmployeeList from "./EmployeeList";
import { IEmplopee, dummyEmplopeeList } from './Employee.type';

function Home() {
  const [employeeList, setEmployeeList] = useState(dummyEmplopeeList as IEmplopee[])

  return (
    <>
      <article className="article-header">
        <header>
          <h1>C.R.U.D in Typescript</h1>
        </header>
      </article>

      <section className="section-content">
        <EmployeeList list={employeeList}/>
      </section>
    </>
  )
}

export default Home