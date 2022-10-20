import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Menu from '../data/Menu'


const Articulos = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        {Menu.map(({ name, description, img, value, width }) => (
          <Card style={{ width: '18rem' }}>
            <Card.Header>
              <center>

                <Card.Title><h5>{name}</h5></Card.Title>
              </center>
            </Card.Header>
            <Card.Img variant="top" src={img} alt={name} width={width} />
            <Card.Body>
              <Card.Text>
                {description}
              </Card.Text>
              <Button>$ {value} </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Articulos