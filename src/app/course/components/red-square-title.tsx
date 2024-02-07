import { Box, Flex, Text } from "@chakra-ui/react"
import { memo } from "react"

export const RedSquareTitle = memo(({
  id,
  displayRed = true,
  squareMR = "2rem", 
  containerMR = "7rem",
  containerDirection = "row",
  alignItems = 'flex-start',
  justify = 'flex-start',
  children
}:{
  displayRed?: boolean;
  squareMR?: string; 
  containerMR?: string;
  containerDirection?: any;
  alignItems?: string;
  justify?: string;
  children: any;
  id?: string;
}) => {
  return (<Flex direction={containerDirection} alignItems={alignItems} justify={justify} mb={containerMR}>

      { displayRed ? <Box w='xs' h='xs' bg='secondary' mr={squareMR} id={id} /> : null }

      {children}
    </Flex>
  )
})