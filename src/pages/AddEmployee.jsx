import React, { useState } from 'react'
import AddEmployeeForm from '../components/AddEmployeeForm'
import style from "./AddEmployee.module.scss"
import axios from 'axios'
import {toast, ToastContainer} from "react-toastify"


let apiUrl = "http://localhost:3000/employees/"

const AddEmployee = () => {


    const [employee, setEmployee] = useState({
        name:"",
        email:"",
        img:"",
        degnisation:"",
        phoneNo:""
    })
    const [error, setError] = useState(null)


    const handlSubmit=(e)=>{
        e.preventDefault()
        axios.post(`${apiUrl}`,employee)
        .then(()=>toast.success("Employee Added!"))
        .catch(err=>toast.error(err.message))
        setEmployee({
            name:"",
            email:"",
            img:"",
            degnisation:"",
            phoneNo:""
    })



    }


  return (
    <div className={style.container}>
      <AddEmployeeForm handlSubmit={handlSubmit} setEmployee={setEmployee} employee={employee} heading="Add New " btnText = "Add Employee"  />
        <ToastContainer />
    </div>
  )
}

export default AddEmployee
