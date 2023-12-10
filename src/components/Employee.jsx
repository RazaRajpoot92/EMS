import React from 'react'
import style from "../style/Employee.module.scss"

let img = "https://img.freepik.com/premium-photo/young-hipster-man-with-his-arms-crossed_1368-14152.jpg?w=360"

const Employee = () => {
  return (

    <>
   
   

    <tr className={style.employee}>
        <td className={style.idTd}>1</td>
        <td className={style.nameTd}>
            <div className={style.nameCon}>
                <img className={style.dp} src={img} alt="" /> 
                <p>Raza</p>
            </div>
        </td>
        <td>raza@gmail.com</td>
        <td>0303333333</td>
        <td className={style.btnTD}>
            <button className={style.btnEdit}>Edit</button>
            <button className={style.btnDel}>Delete</button>
        </td>
    </tr>

    <tr className={style.employee}>
        <td className={style.idTd}>1</td>
        <td className={style.nameTd}>
            <div className={style.nameCon}>
                <img className={style.dp} src={img} alt="" /> 
                <p>Raza</p>
            </div>
        </td>
        <td>raza@gmail.com</td>
        <td>0303333333</td>
        <td className={style.btnTD}>
            <button className={style.btnEdit}>Edit</button>
            <button className={style.btnDel}>Delete</button>
        </td>
    </tr>

    <tr className={style.employee}>
        <td className={style.idTd}>1</td>
        <td className={style.nameTd}>
            <div className={style.nameCon}>
                <img className={style.dp} src={img} alt="" /> 
                <p>Raza</p>
            </div>
        </td>
        <td>raza@gmail.com</td>
        <td>0303333333</td>
        <td className={style.btnTD}>
            <button className={style.btnEdit}>Edit</button>
            <button className={style.btnDel}>Delete</button>
        </td>
    </tr>

    <tr className={style.employee}>
        <td className={style.idTd}>1</td>
        <td className={style.nameTd}>
            <div className={style.nameCon}>
                <img className={style.dp} src={img} alt="" /> 
                <p>Raza</p>
            </div>
        </td>
        <td>raza@gmail.com</td>
        <td>0303333333</td>
        <td className={style.btnTD}>
            <button className={style.btnEdit}>Edit</button>
            <button className={style.btnDel}>Delete</button>
        </td>
    </tr>

    <tr className={style.employee}>
        <td className={style.idTd}>1</td>
        <td className={style.nameTd}>
            <div className={style.nameCon}>
                <img className={style.dp} src={img} alt="" /> 
                <p>Raza</p>
            </div>
        </td>
        <td>raza@gmail.com</td>
        <td>0303333333</td>
        <td className={style.btnTD}>
            <button className={style.btnEdit}>Edit</button>
            <button className={style.btnDel}>Delete</button>
        </td>
    </tr>

    <tr className={style.employee}>
        <td className={style.idTd}>1</td>
        <td className={style.nameTd}>
            <div className={style.nameCon}>
                <img className={style.dp} src={img} alt="" /> 
                <p>Raza</p>
            </div>
        </td>
        <td>raza@gmail.com</td>
        <td>0303333333</td>
        <td className={style.btnTD}>
            <button className={style.btnEdit}>Edit</button>
            <button className={style.btnDel}>Delete</button>
        </td>
    </tr>

    <tr className={style.employee}>
        <td className={style.idTd}>1</td>
        <td className={style.nameTd}>
            <div className={style.nameCon}>
                <img className={style.dp} src={img} alt="" /> 
                <p>Raza</p>
            </div>
        </td>
        <td>raza@gmail.com</td>
        <td>0303333333</td>
        <td className={style.btnTD}>
            <button className={style.btnEdit}>Edit</button>
            <button className={style.btnDel}>Delete</button>
        </td>
    </tr>

    <tr className={style.employee}>
        <td className={style.idTd}>1</td>
        <td className={style.nameTd}>
            <div className={style.nameCon}>
                <img className={style.dp} src={img} alt="" /> 
                <p>Raza</p>
            </div>
        </td>
        <td>raza@gmail.com</td>
        <td>0303333333</td>
        <td className={style.btnTD}>
            <button className={style.btnEdit}>Edit</button>
            <button className={style.btnDel}>Delete</button>
        </td>
    </tr>

    </>
  )
}

export default Employee