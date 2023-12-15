import { useEffect, useState } from "react"
import axios from "axios"


const apiUrl = "http://localhost:3000/employees"


export const useAPIData = ()=>{

const [employees, setEmployees] = useState([])
const [isError, setError] = useState(null)
const [loading, setLoading] = useState(true)
const [start , setStart] = useState(0)
const [end , setEnd] = useState(8)
const [noRecords , setNoRecords] = useState(false)
const [query, setQuery] = useState("")

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
        getEmployeesData
    }
}