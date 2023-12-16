import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"


const apiUrl = "http://localhost:3000/employees"


export const useAPIData = ()=>{

const [employees, setEmployees] = useState([])
const [isError, setError] = useState(null)
const [loading, setLoading] = useState(true)
const [start , setStart] = useState(0)
const [end , setEnd] = useState(8)
const [noRecords , setNoRecords] = useState(false)
const [query, setQuery] = useState("")

// Get Employee Data API
const getEmployeesData = (apiUrl)=>{

    setLoading(true)

    setTimeout(() => {

      axios.get(`${apiUrl}?q=${query}`)
      .then(response=> setEmployees(response.data))
      .then(()=> employees.length&setNoRecords(true))
      .catch(err=>setError(err.message))
      .finally(setLoading(false))

    },1000)
}


// Delete employee API
const deleteEmployee=(id)=>{
  const confirm = window.confirm("Are you sure to delete?")
  if(confirm){
  axios.delete(`${apiUrl}/${id}`).catch(error=>setError(error.message))

  getEmployeesData(apiUrl)

  toast.success(`Employee Deleted with Id: ${id} `)
    }
  }

useEffect(()=>{

  getEmployeesData(apiUrl)

}

,[query])

return {
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
        setEmployees,
        setError,
        getEmployeesData,
        deleteEmployee
    }
}