import React from 'react'
import style from "../style/Cart.module.scss"

const Cart = ({data,heading}) => {
  return (

    <div className={style.cartCon}>

        <h2>{heading}</h2>
        <h1>{data}</h1>

    </div>
  )
}

export default Cart
