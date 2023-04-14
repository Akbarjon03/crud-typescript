import React from 'react';
import "./EmployeeList.style.css";
import { IEmplopee } from './Employee.type';

type Props = {
  list: IEmplopee[]
}
const EmployeeList = (props: Props) => {
  const { list } = props;
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {list.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  <input type="button" value="View"/>
                  <input type="button" value="Edit"/>
                  <input type="button" value="Delete"/>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  )
}

export default EmployeeList