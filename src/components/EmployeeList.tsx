import React, { useState } from 'react';
import { IEmplopee } from './Employee.type';
import EmployeeModal from './EmployeeModal';

type Props = {
  list: IEmplopee[];
  onDeleteClickHnd: (data: IEmplopee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd } = props;
  const [showModel, setShowModel] = useState(false);
  const [dataToShow, setDataToShow] = useState();

  const viewEmployee = () => {
    setShowModel(true);
  };

  const onCloseModal = () => setShowModel(false);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((employee) => (
            <tr key={employee.id}>
              <th scope="row"></th>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div className="btn-group" role="group">
                  <input type="button" className="btn btn-success" value="View" onClick={()=>viewEmployee(employee)}/>
                  <input type="button" className="btn btn-warning" value="Edit" />
                  <input type="button" className="btn btn-danger" value="Delete" onClick={() => onDeleteClickHnd(employee)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModel && <EmployeeModal onClick={onCloseModal} data={}/>}
    </div>
  );
};

export default EmployeeList;
