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
  const deleteEmployee = (data: IEmplopee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList ];
    tempList.splice(indexToDelete, 1);
    setEmployeeList(tempList);
  }
  return (
    <>
      <article className="text-center navbar navbar-expand-lg bg-info justify-content-center">
        <header>
          <h3>Crud in Typescript</h3>
        </header>
      </article>

      <section className="text-center m-1">
        {shownPage === PageEnum.list && (
          <>
            <input type="button" value="Add Employee" className="btn btn-info m-2" onClick={onAddEmployeeClickHnd}/>
            <EmployeeList list={employeeList} onDeleteClickHnd={deleteEmployee}/>
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