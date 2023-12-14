import tableStyle from "../style/EmployeesTable.module.scss"
import Employee from './Employee'
import searchIcon from "../assets/search.png"
import {Link} from "react-router-dom"
import Loader from './Loader'
import ErrorCompo from './ErrorCompo.jsx'
import Pagination from './Pagination.jsx'
import {useAPIData} from "../Custom API Hook/useAPIData.js"
import axios from 'axios'
import {ToastContainer,toast} from "react-toastify"


const EmployeesTable = () => {

  let {
    employees,
    isError,
    loading,
    start,
    end,
    setStart,
    setEnd,
    noRecords,
    query,
    setQuery,
    apiUrl,
    setError,
    getEmployeesData,
  } = useAPIData()


    const deleteEmployee=(id)=>{
    const confirm = window.confirm("Are you sure to delete?")
    if(confirm){
    axios.delete(`${apiUrl}/${id}`).catch(error=>setError(error.message))

    getEmployeesData(apiUrl)

    toast.success(`Employee Deleted with Id: ${id} `)
      }
    }




  const onNextPage = ()=>{
    let totalEmployees = employees.length
    if(end<totalEmployees){
      setStart(start+8)
      setEnd(end+8)
    }
  }

  const onPreviousPage = ()=>{
    if(start!==0){
      setStart(start-8)
      setEnd(end-8)
    }
  }


  let view;

  if(employees.length){
    view = <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Degnisation</th>
                    <th>Email</th>
                    <th>Phone No.</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              <Employee deleteEmployee={deleteEmployee} start={start} end={end} employees={employees} />
            </tbody>
          </table>

  } else if(loading){

    view =  <Loader />

  }else if(noRecords){
    view = <ErrorCompo message={"No records found!!!"} />

  }else if(isError){
    view = <ErrorCompo message={isError} />
  }



  return (
    <div className={tableStyle.tableContainer}>

      <ToastContainer />

      <div className={tableStyle.container}>
      <div className={tableStyle.Header}>
        <h3 className={tableStyle.heading}>Company Employees <span>({employees.length})</span></h3>
            <div className={tableStyle.searchBar}>
              <input value={query} onChange={(e)=>setQuery(e.target.value)} className={tableStyle.SearchInput} type="text" name="" id="" placeholder='Search here...' />
              <img  className={tableStyle.searchIcon} src={searchIcon} alt="" />

            </div>

            <Link to={"/addemployee"} className={tableStyle.btn}>Add Employee</Link>
        </div>

      <div>

      {view}

      <Pagination onPreviousPage={onPreviousPage} onNextPage={onNextPage} />

        </div>
        </div>

    </div>

  )
}

export default EmployeesTable