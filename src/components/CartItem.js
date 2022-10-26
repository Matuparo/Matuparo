import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CartItem = ({ data, delToCart }) => {
  const { name, value, amount, id } = data
  return (
    <tr>
      <td>{amount}</td>
      <td>{name}</td>
      <td>{value}</td>
      <td>{value * amount}</td>
      <button onClick={() => delToCart({id:id})}><FontAwesomeIcon icon={faTrashCan} /></button>
    </tr>
  )
}

export default CartItem