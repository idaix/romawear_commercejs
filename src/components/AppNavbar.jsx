import { Button, Navbar, Row } from '@nextui-org/react'
import { Logo } from '.'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useShoppingCart } from '../context/ShoppingCartContext'
const AppNavbar = () => {
  const { handleOpenAndCloseCart } = useShoppingCart()
  return (
    <Navbar isBordered variant={'sticky'}>
        <Navbar.Brand>
            {/* <Text style={{letterSpacing: 5}} b color='inherit' >ROMAWEAR</Text> */}
            <Logo />
        </Navbar.Brand>
        <Row justify='flex-end' align='center'>
          <Button light color="inherit" auto
            onPress={handleOpenAndCloseCart}
          >
            <HiOutlineShoppingBag style={{ fontSize: 20 }} />
          </Button>
        </Row>
    </Navbar>
  )
}

export default AppNavbar