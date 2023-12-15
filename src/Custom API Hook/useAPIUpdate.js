import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

let apiUrl = "http://localhost:3000/employees/"

export const useAPIUpdate = ()=>{


    const {id} = useParams()
    const [employee, setEmployee] = useState({

        name:"",
        email:"",
        phoneNo:"",
        img:"",
        designation:"",
    })

useEffect(()=>{

    const getEmployee=()=>{
        axios.get(`${apiUrl}/${id}`)
        .then(res=>setEmployee({...employee,
            name:res.data.name,
            email:res.data.email,
            img:res.data.img,
            phoneNo:res.data.phoneNo,
            designation:res.data.designation,

        }))
        .catch(err=>toast.error(err.message))
    }
    getEmployee()
},[])


    const handlSubmit=(e)=>{
        e.preventDefault()
        axios.put(`${apiUrl}/${id}`,employee)
        .then(()=>toast.success("Employeed Updated Sucessfully!"))
        .catch(err=>toast.error(err.message))
    }


    return{
        id,
        employee,
        setEmployee,
        handlSubmit,
    }

}