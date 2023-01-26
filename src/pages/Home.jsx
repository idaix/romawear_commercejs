import { useEffect, useState } from 'react'
import { Products, Section } from '../components'
import { commerce } from '../lib/commerce'
const Home = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchProducts = async () => {
    setIsLoading(true)
    const { data } = await commerce.products.list()
    if (data) {
      setIsLoading(false)
      setProducts(data)
    }else {
      setIsError(true)
    }
  }
  useEffect(()=> {
    fetchProducts();
  }, [])  
  return (
    <>
      <Section title="Our Products">
        <Products data={products} isLoading={isLoading} isError={isError}/>
      </Section>
    </>
  )
}

export default Home