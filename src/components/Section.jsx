import { Text } from '@nextui-org/react'
import React from 'react'

const Section = ({ title, children }) => {
  return (
    <div style={{ padding: '10 0' }}>
        <Text h3 css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%"}}>{title}</Text>
        {children}
    </div>
  )
}

export default Section