import { Flex, Text, useMediaQuery, Box } from '@chakra-ui/react'
import { memo } from "react"
import ReactPlayer from 'react-player'

export default memo(function Video(props: any) {
  const { text, url } = props;
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
    <Flex direction="column" w="100%" p={isMax959 ? '1rem 2rem' : "3rem 6rem"} { ...props }>
      <Flex direction={isMax959 ? 'column' : 'row'} wrap="wrap" alignItems="center"> 
        { text ? 
        <Box  width={isMax959 ? "100%" : '40%'} p="1rem" sx={{ borderRight: isMax959 ? 'none' : '1px solid black' }}>
          <Text textStyle="Regular16" align="justify">{text}</Text>
        </Box> : null}
        <Box p="1rem" width={isMax959 ? "100%" : '60%'}>
          <ReactPlayer url={url}  width="100%"/>
        </Box>
      </Flex>
    </Flex>
  )
})
