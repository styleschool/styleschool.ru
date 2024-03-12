import { Flex, Text, Box, useMediaQuery, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { memo } from "react"

export default memo(function Recommendations(props: any) {
  const { data } = props;
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
    <Flex direction="column" w="100%" p={isMax959 ? '1rem 2rem' : "3rem 6rem"} { ...props }>
      <Flex direction={isMax959 ? 'column' : 'row'} wrap="wrap" justifyContent="center"> 
        {data ? data.map((item: {image: string; title: string; href: string; text: { text: string; textStyle?: string, backgroundColor?: string; color?: string; }}, i:number) => { 
          return (
            <Link key={i} as={NextLink} title={item.title} href={item.href} >
              <Flex direction="column" justify="center" mb="sm" mr={isMax959 ? undefined : "sm"} borderWidth='2px' borderRadius='lg' p="1rem 1rem">
                <Box width={ isMax959 ? '100%' : '390px'} height="500px" backgroundImage={item.image ? item.image : '/Group_72.jpg'} backgroundPosition="center" backgroundRepeat="no-repeat">
                  <Flex alignItems="flex-end" justifyContent="center" height="100%">
                    <Box backgroundColor={item?.text?.backgroundColor ? item?.text?.backgroundColor : 'white'} p="1rem" width="100%">
                      <Text textStyle={item?.text?.textStyle ? item?.text?.textStyle : "Regular16" } color={item?.text?.color ? item?.text.color : 'black'}>{item?.text?.text}</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Link>
          )}
        ) : null }
      </Flex>
    </Flex>
  )
})
