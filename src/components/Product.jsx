import { Button, Card, Row, Text } from "@nextui-org/react"
import { useShoppingCart } from "../context/ShoppingCartContext"
const Product = ({ id, name, image, price, openCard, cancel, addToCart }) => {
  const { handleAddToCart } = useShoppingCart()
  return (
    <>
        {!openCard?(
          <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                  <Card.Image
                      src={image?.url}
                      objectFit="cover"
                      width="100%"
                      height={200}
                      alt={name}
                  />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{name.length>15?name.slice(0, 15) + '...':name}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {price?.formatted_with_code}
                  </Text>
                </Row>
              </Card.Footer>
          </Card>
        ):(
          <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                  <Card.Image
                      src={image?.url}
                      objectFit="cover"
                      width="100%"
                      height="500px"
                      alt={name}
                  />
                  <Card.Divider />
                  <Row wrap="wrap" justify="space-between" align="center" css={{ p: 10 }}>
                    <Text b>{name}</Text>
                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                      {price?.formatted_with_code}
                    </Text>
                  </Row>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify="space-between">
                  <Button light onPress={cancel}>Cancel</Button>
                  <Button flat onPress={() => handleAddToCart(id, 1)}>Add to cart</Button>
                </Row>
              </Card.Footer>
          </Card>
        )}
    </>
  )
}

export default Product