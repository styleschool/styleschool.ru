'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image';
import Footer from './footer';
import Header from './header';
import { useState } from 'react'

export default function Home() {
  const [ logo, setLogo ] = useState(0);
  const logoObj = [ 'Group_72.jpg', 'pawel-czerwinski-O3i.jpg']
  return (
  <Flex direction="column">
    <Header/>
    <Flex direction="column" align="center" p="2rem">
      <Image onMouseOut={e=>{setLogo(0)}} onMouseOver={e=>{setLogo(1)}} src={logoObj[logo]} width='200' height="200" alt="logo" />
    </Flex>
    <Flex direction="column" align="center" p="1rem">
      <Text textStyle="h1" color="black">ВЫСШАЯ ШКОЛА <Text textStyle="Light30" as="span" >СТИЛИСТИКИ</Text></Text>
      <Text textStyle="h1" color="black"><Text as="span" color="primary">ДИЗАЙНА</Text> И <Text as="span" color="secondary">ТЕХНОЛОГИЙ</Text></Text>
    </Flex>
    <Flex direction="row" mb="1.5rem" justify="center" p="1rem">
      <Flex direction="column">
        <Box p="1rem">
          <Text>Профессиональная переподготовка</Text>
          <Text>и повышение квалификации</Text>
          <Text>в креативных индустриях</Text>
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
