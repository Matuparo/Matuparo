import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CartItem = ({data, deltocart}) => {
    const {name, value, amount} = data  
    return (
    <div>
        <p> {amount}x <strong> {name} </strong> {value * amount}</p>
        <button onClick={()=>deltocart(data)}><FontAwesomeIcon icon={faTrashCan}/></button>
    </div>
  )
}

export default CartItem