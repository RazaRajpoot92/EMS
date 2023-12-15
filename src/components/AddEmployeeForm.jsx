import React from 'react'
import style from "../style/EmployeeForm.module.scss"
import employeeIcon from "../assets/employee.png"
import { Link } from 'react-router-dom'
const AddEmployeeForm = ({handlSubmit,heading,setEmployee, employee, btnText}) => {
  return (
    <div className={style.formContainer}>
        <div className={style.content}>
        <img className={style.empIcon} src={employeeIcon} alt="" />
        <h3 className={style.heading}>{heading} <span>Employee</span></h3>
        </div>
        <form onSubmit={handlSubmit} >
          <div className={style.formInputs}>

        <div className={style.Con}>
          <div className={style.employeeInput}>
            <label htmlFor="name">Employee Name</label>
            <input onChange={e=>setEmployee({...employee,name:e.target.value})} value={employee.name} placeholder='Enter employee name' required type="text" name='name' />
          </div>

          <div className={style.employeeInput}>
            <label htmlFor="email">Email Address</label>
            <input onChange={e=>setEmployee({...employee,email:e.target.value})} value={employee.email} placeholder='Enter employee email' type="email" name='email' />
          </div>
        </div>

          <div className={style.jobInput}>
            <label htmlFor="pic">Picture</label>
            <input onChange={e=>setEmployee({...employee,img:e.target.value})}  value={employee.img} placeholder='Enter picture url' type="text" name='pic' />
          </div>


          <div className={style.Con}>
          <div className={style.employeeInput}>
            <label htmlFor="phone">Job Position</label>
            <input onChange={e=>setEmployee({...employee,designation:e.target.value})} value={employee.designation} placeholder='Enter employee job position' type="text" name='phone' />
          </div>

          <div className={style.employeeInput}>
            <label htmlFor="dp">Phone</label>
            <input onChange={e=>setEmployee({...employee,phoneNo:e.target.value})} value={employee.phoneNo} placeholder='Enter employee phone number' type="text" name='dp' />
          </div>
          </div>
          </div>

          <div className={style.btnCon}>
            <button className={style.Addbtn}>{btnText}</button>
            <Link to={"/employees"} className={style.backBtn} >Back</Link>
          </div>

        </form>
    </div>
  )
}

export default AddEmployeeForm
