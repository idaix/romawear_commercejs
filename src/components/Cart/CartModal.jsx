import { Badge, Button, Grid, Modal, Row, Text } from "@nextui-org/react"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { MdCleaningServices, MdPayment } from 'react-icons/md'
import Cart from "./Cart"

const CartModel = () => {
    const { isOpen, handleOpenAndCloseCart, cart, handleClearItems } = useShoppingCart()
    console.log(cart);
    return (
        <div>
            <Modal
                closeButton
                // blur 
                open={isOpen}
                onClose={handleOpenAndCloseCart}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Cart
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    {cart.total_items?(
                        <>
                            <Grid.Container css={{rowGap: 10}}>
                                {cart?.line_items.map(item => (
                                    <Grid xs={12} key={item.id}>
                                        <Cart {...item} />
                                    </Grid>
                                ))}
                            </Grid.Container>
                            <Text css={{textAlign: "end"}} color="#777">Total: {cart?.subtotal.formatted_with_code}</Text>
                        </>
                    ):(
                        <Text color="secondary" css={{textAlign: "center"}}>
                            Your Cart is Empty 😞
                        </Text>
                    )}
                </Modal.Body>
                <Modal.Footer justify="flex-start" css={{ flexWrap: 'nowrap'}}>
                    {cart.total_items>0&&(
                        <>
                            {/* <Text css={{textAlign: "start", flex: '1'}} color="#777">Total: {cart?.subtotal.formatted_with_code}</Text> */}
                            <Button 
                                light
                                auto 
                                css={{width: '100%'}}
                                icon={<MdCleaningServices style={{fontSize: 18}} />}
                                onPress={handleClearItems}
                            >
                                Clear All
                            </Button>
                            <Button 
                                flat 
                                auto 
                                css={{width: '100%'}} 
                                color="success"
                                icon={<MdPayment style={{fontSize: 18}} />}
                                onPress={()=> console.log("Checkout...")}
                            >
                                Checkout
                            </Button>
                        </>
                    )}
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default CartModel