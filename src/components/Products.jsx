import { Grid, Text, Loading, Row } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Product from "./Product";


const Products = ({ data, isLoading, isError }) => {
  const [selectedId, setSelectedId] = useState(null)
  if (isError) return (
    <Row align="center" justify="center">
      <Text size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>No Products!</Text>
    </Row>
  )
  if (isLoading) return (
    <Row justify="center" align="center" css={{ paddingTop:20}}>
            <Loading />
    </Row>
  )
  return (
    <>
        <Grid.Container gap={2} justify="flex-start">
            {data.map(item => (
                <Grid xs={6} sm={4} md={3} key={item.id}>
                    <motion.div layoutId={item.id} onClick={()=> setSelectedId(item.id)} style={{width:'100%'}}>
                      <Product {...item} />
                    </motion.div>
                </Grid>
            ))}
        </Grid.Container>
          <AnimatePresence>
              {selectedId && (
                <div 
                  style={{width: '100vw', height:'100vh', display: "flex", alignItems: "center", justifyContent: 'center', position: "fixed", top: 0, left: 0, background: '#00000050', transition: '1s', zIndex:1000 }}
                  onClick={(e) => e.target.localName=='div'&& setSelectedId(null)}
                >
                  <motion.div layoutId={selectedId} >
                    
                    <Product {...data.find(item=>item.id == selectedId)} openCard cancel={() => setSelectedId(null)}/>


                  </motion.div>
                </div>
              )}
          </AnimatePresence>
    </>
  )
}

export default Products