
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
const App = () => {
  return (
    <ShoppingCartProvider>
      <Layout>
        <Home />
      </Layout>
    </ShoppingCartProvider>
  )
}

export default App