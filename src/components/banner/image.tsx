import { Flex, Box } from '@chakra-ui/react'
import { memo } from "react"
import "react-image-gallery/styles/css/image-gallery.css";

export default memo(function imageBanner(props: any) {
  const { type, ...backgroudProps } = props;
  return (
    <Flex direction="column" w="100%">
        <Box {...backgroudProps} />
    </Flex>
  )
})
