import EmployeeForm from '../components/UpdateEmployeeForm'
import style from "./AddEmployee.module.scss"
import {useAPIUpdate} from "../Custom API Hook/useAPIUpdate"
import { ToastContainer } from 'react-toastify'

const UpdatEmployee = () => {

    const {
        employee,
        setEmployee,
        handlSubmit,
    } = useAPIUpdate()


  return (
    <div className={style.container}>
      <EmployeeForm handlSubmit={handlSubmit} setEmployee={setEmployee} employee={employee} heading="Update " btnText = "Update Employee" />
        <ToastContainer />
    </div>
  )
}

export default UpdatEmployee;