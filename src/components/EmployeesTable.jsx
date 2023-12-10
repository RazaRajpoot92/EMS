import React from 'react'
import tableStyle from "../style/EmployeesTable.module.scss"
import Employee from './Employee'

const EmployeesTable = () => {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Action</th>
            </tr>
        </thead>
        

        <tbody>
          
            <Employee />
            
        </tbody>
        

    </table>
  )
}

export default EmployeesTable