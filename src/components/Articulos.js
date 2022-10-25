import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Menu from '../data/Menu'


const Articulos = ({data, addToCart}) => {
  let {name, img, description, } = data
  let amount
    
  return (  
          <Card style={{ width: '18rem' }}>
            <Card.Header>
              <center>
                <Card.Title><h5>{name}</h5></Card.Title>
              </center>
            </Card.Header>
            <Card.Img variant="top" src={img} alt={name}/>
            <Card.Body>
              <Card.Text>
                {description}
              </Card.Text>
              <input type="number" min="1" max="100" defaultValue="0" steps="1" ref={node => amount = node}/>
              <button onClick={()=> addToCart({amount:amount.value, id:data.id})} className="btn-primary">Agregar</button>
            </Card.Body>
          </Card>  
  )
}

export default Articulos