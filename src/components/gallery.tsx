import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { memo } from "react"
import Image from 'next/image';

export const Gallery = memo(function Gallery(props: any) {
  const { data } = props;
  const [isMax1100] = useMediaQuery('(max-width: 1100px)')
  return (
    <Flex direction="column" w="100%" p={isMax1100 ? '1rem 2rem' : "3rem 6rem"} { ...props }>
      <Flex direction={isMax1100 ? 'column' : 'row'} wrap="wrap" justifyContent="center"> 
        {data ? data.map((item: {image: string; texts: string[]}, i:number) => { 
          return <Flex key={i} direction="column" justify="center" mb="sm" mr={isMax1100 ? undefined : "sm"} borderWidth='2px' borderRadius='lg' p="1rem 1rem">
            <Flex direction="row" justify="center" mb="1rem">
              <Image src={item.image} width='200' height="600" alt="logo" />
            </Flex>
              { item.texts? item.texts.map((text: string, i:number) => <Flex key={i} w={isMax1100 ? '100%' : '370px'} direction="row" justify="center" mb="1rem"><Text>{text}</Text></Flex>) : null }
          </Flex>}) : null
        }
      </Flex>
    </Flex>
  )
})
