import React from 'react';
import { IEmplopee } from './Employee.type';

type Props = {
  list: IEmplopee[]
}
const EmployeeList = (props: Props) => {
  const { list } = props;
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
        {list.map((employee) => {
          return (
            <tbody>
              <tr key={employee.id}>
              <th scope="row"></th>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{employee.email}</td>
                <td>
                  <div className="btn-group" role="group">
                    <input type="button" className="btn btn-success" value="View"/>
                    <input type="button" className="btn btn-warning" value="Edit"/>
                    <input type="button" className="btn btn-danger" value="Delete"/>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  )
}

export default EmployeeList