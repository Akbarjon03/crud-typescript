import React from 'react';
import  "./Home.style.css";
import { useState } from "react";
import { IEmplopee } from './Employee.type';

function Home() {
  const [employeeList, setEmployeeList] = useState([] as IEmplopee[])

  return (
    <>
      <article className="article-header">
        <header>
          <h1>C.R.U.D in Typescript</h1>
        </header>
      </article>

      <section className="section-content">
        <div>This is content part</div>
      </section>
    </>
  )
}

export default Home