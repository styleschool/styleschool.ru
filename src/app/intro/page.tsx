'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image';
import Footer from '../footer';
import Header from '../header';
import { useState } from 'react'

export default function Home() {
  return (
  <Flex direction="column">
    <Header breadcrumbs={[{text: 'Личные кабинеты'}]}/>
    <Flex direction="column" align="center" p="2rem">
      <Image src={"Group_72.jpg"} width='200' height="200" alt="logo" />
    </Flex>
    <Flex direction="column" align="center" p="1rem">
      <Text textStyle="h1" color="black">ВЫСШАЯ ШКОЛА <Text textStyle="Light30" as="span" >СТИЛИСТИКИ</Text></Text>
      <Text textStyle="h1" color="black"><Text as="span" color="primary">ДИЗАЙНА</Text> И <Text as="span" color="secondary">ТЕХНОЛОГИЙ</Text></Text>
    </Flex>
    <Flex direction="row" mb="1.5rem" justify="center" p="1rem">
      <Flex direction="column">
        <Box p="1rem">
          <Text>МОДА</Text>
          <Text>ДИЗАЙН</Text>
          <Text>IT</Text>
        </Box>
      </Flex>
      <Flex direction="column">
        <Box p="1rem" sx={{ borderLeft: '1px solid black' }}>
          <Link as={NextLink} title="Образование" href="https://edu.styleschool.ru/login/index.php"><Text>ПК и ПП ВШСДТ</Text></Link>
          <Link as={NextLink} title="" href="#"><Text>ПК и ПП в рамках Содействия занятости</Text></Link>
          <Link as={NextLink} title="" href="https://lk.styleschool.ru/"><Text>Курсы на Soho LMS</Text></Link>
        </Box>
      </Flex>
    </Flex>
    <Footer/>
  </Flex>
  )
}
