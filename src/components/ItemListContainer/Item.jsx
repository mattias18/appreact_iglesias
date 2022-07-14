import React from 'react'
import { Card, Button } from 'react-bootstrap'


export const Item = ({title, description, price, pictureUrl }) => {

  return (
    
    <Card style={{ width: '18rem' }} id="item">
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>precio: $ {price}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}
