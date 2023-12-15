import React from 'react'
import style from "../style/Sidebar.module.scss"
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"
import dashboard from "../assets/dashboard.png"
import clients from "../assets/clients.png"
import check from "../assets/check.png"
import feedback from "../assets/feedback.png"
import employeesIcon from "../assets/employeess.png"
import sirPic from '../assets/sir.jpg'

let img = "https://img.freepik.com/premium-photo/young-hipster-man-with-his-arms-crossed_1368-14152.jpg?w=360"


const SideBar = () => {
  return (
    <div className={style.sideBar}>

        <div className={style.logoCon}>

            <h1>Smart <span>Set</span></h1>
            <img className={style.logoIcon} src={logo} alt="" />
        </div>

        <div className={style.displaycon}>

            <img src={sirPic} className={style.profileImg} alt="" />
            <div>
                <h2>Rana Ajmal</h2>
                <p>Chief Executive Officer</p>
            </div>
        </div>


            <div className={style.links}>

                <Link to={"/"} className={style.link} >
                    <img className={style.linkIcon} src={dashboard} alt="" />
                    Dashboard
                    </Link>
                <Link to={"/employees"} className={style.link} >
                    <img className={style.linkIcon} src={employeesIcon} alt="" />
                    Employees
                </Link>

                <Link className={style.link} >
                    <img className={style.linkIcon} src={clients} alt="" />
                    Clients
                </Link>

                <Link className={style.link} >
                    <img className={style.linkIcon} src={check} alt="" />

                    Leaves Approval
                </Link>


                <Link className={style.link} >
                    <img className={style.linkIcon} src={feedback} alt="" />
                    Feedbacks
                </Link>

            </div>



        <div className={style.btnContainer}>
            <Link className={style.btn}>Logout</Link>

        </div>



    </div>
  )
}

export default SideBar
