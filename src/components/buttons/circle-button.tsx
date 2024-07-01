import { Flex, Box, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { memo } from "react";
import NextLink from 'next/link';

export default memo(function CircleButton(props: any) {
    const [isMax959] = useMediaQuery('(max-width: 959px)')

  return (
    <Flex direction="row" w="100%" justifyContent="flex-end">
        <Link as={NextLink} title={props.title} href={props.href} target={props.target ? props.target : "_blank" }><Box position="relative" textAlign="right" mb={props.mb === true ? isMax959 ? 0 : 'md' : props.mb ? props.mb : undefined }>
            <Box 
                w="6.5rem" h="6.5rem" 
                border="thin solid rgb(125,1,1)"
                borderRadius="80%" 
                position="absolute" top="-2.5rem" right="9.5rem" zIndex="1" 
                _hover={{ transform: 'scale(1.5)' }} 
                sx={{
                transition: 'transform 0.5s ease-in-out',
                }}
            />
                <Text textStyle="Bold16">{props.text}</Text>
            </Box>
        </Link>
    </Flex>
  )
})
