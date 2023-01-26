import { Container } from "@nextui-org/react"
import { Toaster } from "react-hot-toast"
import { AppNavbar, CartModal } from "../components"

const Layout = ({ children }) => {
    return (
        <div>
            <AppNavbar />
            <CartModal />
            <Toaster />
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Layout