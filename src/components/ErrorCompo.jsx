import React from 'react'
import style from "../style/ErrorCompo.module.scss"
import errorIcon from "../assets/errorIcon.png"

const ErrorCompo = ({message}) => {
  return (
    <div className={style.errorContainer}>
        <img src={errorIcon} alt="" />
        <h2>{message}</h2>
    </div>
  )
}

export default ErrorCompo
