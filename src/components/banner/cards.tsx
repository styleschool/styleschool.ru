import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { memo } from "react"
import Image from 'next/image';

export default memo(function Cards(props: any) {
  const { data } = props;
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
    <Flex direction="column" w="100%" p={isMax959 ? '1rem 2rem' : "3rem 6rem"} { ...props }>
      <Flex direction={isMax959 ? 'column' : 'row'} wrap="wrap" justifyContent="center"> 
        {data ? data.map((item: {image: string; texts: { text: string }[]}, i:number) => { 
          return <Flex key={i} direction="column" justify="center" mb="sm" mr={isMax959 ? undefined : "sm"} borderWidth='2px' borderRadius='lg' p="1rem 1rem">
            <Flex direction="row" justify="center" mb="1rem">
              <Image src={item.image} width='200' height="600" alt="logo" />
            </Flex>
              { item.texts? item.texts.map((itemText: {text: string}, i:number) => <Flex key={i} w={isMax959 ? '100%' : '370px'} direction="row" justify="center" mb="1rem"><Text>{itemText.text}</Text></Flex>) : null }
          </Flex>}) : null
        }
      </Flex>
    </Flex>
  )
})
