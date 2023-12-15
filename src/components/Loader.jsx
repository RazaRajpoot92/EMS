import React from 'react'
import style from "../style/Loader.module.scss"

const Loader = () => {
  return (
    <>
    <div className={style.loader}>
        <div className={style.spinouter}></div>
        <div className={style.spinInner}></div>
    </div>
    </>
  )
}

export default Loader
