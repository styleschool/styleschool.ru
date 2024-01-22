import { Box, Flex, Text } from "@chakra-ui/react"
import { memo } from "react"

export const RedSquareTitle = memo(({
  squareMR = "2rem", 
  containerMR = "7rem",
  containerDirection = "row",
  alignItems = 'flex-start',
  justify = 'flex-start',
  children
}:{
  squareMR?: string; 
  containerMR?: string;
  containerDirection?: any;
  alignItems?: string;
  justify?: string;
  children: any;
}) => {
  return (<Flex direction={containerDirection} alignItems={alignItems} justify={justify} mb={containerMR}>

      <Box w='xs' h='xs' bg='secondary' mr={squareMR} />

      {children}
    </Flex>
  )
})