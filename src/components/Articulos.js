import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'



const Articulos = ({ data, addToCart }) => {
  let { name, img, description } = data
  let amount
  const [value, setvalue] = useState(0)
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
          {value ? <Button onClick={() => setvalue(value - 1)}><FontAwesomeIcon icon={faMinus} /></Button> : <></>}
          <h6>{value}</h6>
          <Button onClick={() => setvalue(value + 1)}><FontAwesomeIcon icon={faPlus} /></Button>
          <Button onClick={() => addToCart({ amount: value, id: data.id })} className="btn-primary">Agregar</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Articulos