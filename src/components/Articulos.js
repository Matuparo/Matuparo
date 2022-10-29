import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'



const Articulos = ({ data, addToCart }) => {
  let { name, img, description, value } = data
  const [amount, setamount] = useState(1)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>
        <center>
          <Card.Title><h5>{name}</h5></Card.Title>
        </center>
      </Card.Header>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Text>
          {description}
        </Card.Text>
        <div className='quantity'>
          <Button onClick={() => amount ? setamount(amount - 1) : alert("No se pueden agregar valores negativos")}><FontAwesomeIcon icon={faMinus} /></Button>
          <h6>{amount}</h6>
          <Button onClick={() => setamount(amount + 1)}><FontAwesomeIcon icon={faPlus} /></Button>
          <Button variant="success" onClick={() => addToCart({ amount: amount, id: data.id })} > {amount * value}$</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Articulos