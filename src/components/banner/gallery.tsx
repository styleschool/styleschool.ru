import { Flex, Text, useMediaQuery, Box } from '@chakra-ui/react'
import { memo } from "react"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default memo(function Gallery(props: any) {
  const { text, items } = props;
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
    <Flex direction="column" w="100%" p={isMax959 ? '1rem 2rem' : "3rem 6rem"} { ...props }>
      <Flex direction={isMax959 ? 'column' : 'row'} wrap="wrap" alignItems="center"> 
        { text ? 
        <Box  width={isMax959 ? "100%" : '40%'} p="1rem" sx={{ borderRight: isMax959 ? 'none' : '1px solid black' }}>
          <Text textStyle="Regular16" align="justify">{text}</Text>
        </Box> : null}
        <Box p="1rem" width={isMax959 ? "100%" : '60%'}>
          <ImageGallery items={items} />
        </Box>
      </Flex>
    </Flex>
  )
})
