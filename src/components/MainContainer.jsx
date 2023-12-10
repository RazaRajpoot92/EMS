import React from 'react'
import style from "../style/MainContainer.module.scss"
import EmployeesTable from './EmployeesTable'

const MainContainer = () => {
  return (
    <div className={`${style.container}`}>
      <div className={style.upercon}>
        <div className={style.searchBar}>
        <input className={style.SearchInput} type="text" name="" id="" placeholder='search...' />
        <p>Search</p>
        </div>
      </div>
      
        <div className={style.tableContainer}>
        <EmployeesTable />
        </div>
    
    </div>
  )
}

export default MainContainer