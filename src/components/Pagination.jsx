import React from 'react'
import style from "../style/Pagination.module.scss"
import nextIcon from "../assets/nextIcon.png"
import backIcon from "../assets/backIcon.png"
const Pagination = ({onNextPage,onPreviousPage}) => {
  return (
    <div className={style.container}>
        <img onClick={onPreviousPage} className={style.backIcon} src={backIcon} alt="" />
        <img onClick={onNextPage} className={style.nextIcon} src={nextIcon} alt="" />
    </div>
  )
}

export default Pagination
