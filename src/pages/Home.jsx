import Cart from "../components/Cart"
import style from "./Home.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import ProjectChart from "../components/ProjectChart"
import EmployeesChart from "../components/EmployeeChart"

const apiUrl = "http://localhost:3000/employees"

const Home = () => {

  const [data, setData] = useState()

  useEffect(()=>{

    const getApiData = ()=>{
      axios.get(apiUrl).then(res=>setData(res.data)).catch(err=>console.log(err.message))
    }

    getApiData()

  },[])

  return (

      <div className={style.container}>
      <div className={style.topContainer}>
        <div className={style.cartContainer}>
          <div className={style.con}>
          <Cart heading="Employees" data={data?data.length:0} />
          <Cart heading="Projects" data="7" />
          </div>
          <div className={style.con}>
          <Cart heading="Revenue" data={"$20K"} />
          <Cart heading="Time" data="100h" />
          </div>
        <div className={style.backdesign}></div>
        </div>
        <div className={style.pieContainer}>
         <EmployeesChart />
        </div>
      </div>
      <ProjectChart />
    </div>
  )
}

export default Home