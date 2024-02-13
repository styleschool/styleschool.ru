'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image';
import Footer from '../components/footer';
import Header from '../components/header';
import { useState } from 'react'

export default function Home() {
  const [ logo, setLogo ] = useState(0);
  const logoObj = [ 'Group_72.jpg', 'pawel-czerwinski-O3i.jpg']
  return (
  <Flex direction="column">
    <Header/>
    <Flex direction="column" align="center" p="5rem 2rem">
      <Image onMouseOut={e=>{setLogo(0)}} onMouseOver={e=>{setLogo(1)}} src={logoObj[logo]} width='200' height="200" alt="logo" />
    </Flex>
    <Flex direction="column" align="center" p="1rem">
      <Text textStyle="h1" color="black">ВЫСШАЯ ШКОЛА СТИЛИСТИКИ</Text>
      <Text textStyle="h1" color="black">ДИЗАЙНА И ТЕХНОЛОГИЙ</Text>
    </Flex>
    <Flex direction="row" mb="1.5rem" p="1rem" justifyContent="center" alignItems="center">
    <Box p="1rem" sx={{ borderRight: '1px solid black' }}>
      <Text textStyle="h2">Мода</Text>
      <Text textStyle="h2">Дизайн</Text>
      <Text textStyle="h2">IT</Text>
      <Text>и повышение квалификации</Text>
      <Text>в креативных индустриях</Text>
    </Box>
      <Flex direction="column">
        <Box p="1rem">
          <Link as={NextLink} title="Образование" href="education"><Text>Образование</Text></Link>
          <Link as={NextLink} title="Поступление" href="enrollment"><Text>Поступление</Text></Link>
          {/* <Link as={NextLink} title="Проекты" href=""><Text>Проекты</Text></Link>
          <Link as={NextLink} title="О Школе" href=""><Text>О Школе</Text></Link> */}
          <Link as={NextLink} title="Контакты" href="contacts"><Text>Контакты</Text></Link>
        </Box>
      </Flex>
    </Flex>
    <Footer/>
  </Flex>
  )
}
