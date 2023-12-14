import React from 'react'
import style from "../style/Employee.module.scss"
import { Link } from 'react-router-dom'

let img = "https://img.freepik.com/premium-photo/young-hipster-man-with-his-arms-crossed_1368-14152.jpg?w=360"

const Employee = ({employees,start, end, deleteEmployee}) => {
  return (

    <>
{
employees.slice(start,end).map((employee)=>(

    <tr key={employee.id} className={style.employee}>

        <td className={style.idTd}>{employee.id}</td>
        <td className={style.nameTd}>
            <div className={style.nameCon}>
                <img className={style.dp} src={employee.img} alt="" />
                <p>{employee.name}</p>
            </div>
        </td>
        <td>{employee.degnisation}</td>
        <td>{employee.email}</td>
        <td>{employee.phoneNo}</td>
        <td className={style.btnTD}>
            <Link to={`/updateemployee/${employee.id}`} className={style.btnEdit}>Edit</Link>
            <button onClick={()=>deleteEmployee(employee.id)} className={style.btnDel}>Delete</button>
        </td>
    </tr>
))
}
    </>
  )
}

export default Employee