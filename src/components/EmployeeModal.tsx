import React from 'react';
import "./EmployeeModal.sytle.css";

function EmployeeModal() {
  return (
      <div id='myModal' className='modal'>
        <div className='modal-content'>
          <span className='close'>&times;</span>
          <p>some text</p>
        </div>
      </div>
  )
}

export default EmployeeModal