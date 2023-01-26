import { Button, Card, Col, Row, Text } from '@nextui-org/react'
import React from 'react'

const Cart = ({ id, image, price, quantity, product_name }) => {
  return (
    <Card variant="bordered">
      {/* <Card.Header></Card.Header> */}
      <Row>
          <img src={image.url} alt={product_name} width={50} height='100%' style={{objectFit: 'cover'}} />
          <div style={{paddingLeft: 10, lineHeight: 0.3}}>
            <Text>{product_name}</Text>
            <Text size={13} b color="#777777">{price.formatted} x {quantity}</Text>
          </div>
      </Row>
      
      {/* <Card.Footer></Card.Footer> */}
    </Card>
  )
}

export default Cart