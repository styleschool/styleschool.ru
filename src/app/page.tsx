'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image';
import Footer from './footer';
import Header from './header';

export default function Home() {
  return (
  <Flex direction="column">
    <Header/>
    <Flex direction="column" align="center" p="1.5rem">
      <Image src="/Group_72.jpg" width='200' height="200" alt="logo" />
    </Flex>
    <Flex direction="row" mb="1.5rem" justify="center">
      <Flex direction="column">
        <Box p="1rem">
          <Box sx={{width: 100, height:'100px', background: 'black'}}></Box>
        </Box>
      </Flex>
      <Flex direction="column">
        <Box p="1rem" sx={{ borderLeft: '1px solid black' }}>
          <Link as={NextLink} title="Образование" href="education"><Text>Образование</Text></Link>
          <Link as={NextLink} title="" href=""><Text>Поступление</Text></Link>
          <Link as={NextLink} title="" href=""><Text>Проекты</Text></Link>
          <Link as={NextLink} title="" href=""><Text>О Школе</Text></Link>
          <Link as={NextLink} title="" href=""><Text>Контакты</Text></Link>
        </Box>
      </Flex>
    </Flex>
    <Footer/>
  </Flex>
  )
}
