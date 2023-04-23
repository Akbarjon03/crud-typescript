import { useState } from "react";
import EmployeeList from "./EmployeeList";
import { IEmplopee, PageEnum, dummyEmplopeeList } from "./Employee.type";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
  const [employeeList, setEmployeeList] = useState(dummyEmplopeeList as IEmplopee[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmplopee);

  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addEmployee = (data: IEmplopee) => {
    setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmplopee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];
    tempList.splice(indexToDelete, 1);
    setEmployeeList(tempList);
  };

  const editEmployeeData = (data: IEmplopee) => {
    setDataToEdit(data);
  };

  const updateData = (data: IEmplopee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    setEmployeeList(tempData);
  };

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
            <input
              type="button"
              value="Add Employee"
              className="btn btn-info m-2"
              onClick={onAddEmployeeClickHnd}
            />
            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}
        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addEmployee}
          />
        )}
        {shownPage === PageEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
