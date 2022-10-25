import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CartItem = ({ data, deltocart }) => {
  const { name, value, amount } = data
  return (
    <tr>
      <td>{amount}</td>
      <td>{name}</td>
      <td>{value}</td>
      <td>{value * amount}</td>
      <button onClick={() => deltocart(data)}><FontAwesomeIcon icon={faTrashCan} /></button>
    </tr>
  )
}

export default CartItem