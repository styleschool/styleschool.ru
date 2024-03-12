'use client';

import { Flex, Text, Box, Link, useMediaQuery } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image';
import Footer from '../../components/footer';
import Header from '../../components/header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

const breadcrumbs = [{text: 'Личные кабинеты'}];

export default function Home() {
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
  <Flex direction="column">
    <Header pageName="Личные кабинеты"/>
    <Flex direction="column" align="center" p="6rem 2rem 1rem">
      <Image src={"Group_72.jpg"} width='200' height="200" alt="logo" />
    </Flex>
    <Flex direction="column" align="center" p="1rem" justify={'center'}>
      <Text textStyle="h1" color="black" align={isMax959 ? 'center' : 'left'}>ВЫСШАЯ ШКОЛА СТИЛИСТИКИ</Text>
      <Text textStyle="h1" color="black" align={isMax959 ? 'center' : 'left'}>ДИЗАЙНА И ТЕХНОЛОГИЙ</Text>
    </Flex>
    <Flex direction="row" mb="1.5rem" justify="center" p="1rem">
      <Flex direction="column">
        <Box p="1rem">
          <Text textStyle="h2">МОДА</Text>
          <Text textStyle="h2">ДИЗАЙН</Text>
          <Text textStyle="h2">IT</Text>
        </Box>
      </Flex>
      <Flex direction="column">
        <Box p="1rem" sx={{ borderLeft: '1px solid black' }}>
          <Link as={NextLink} title="Образование" href="https://edu.styleschool.ru/login/index.php">
            <Text textStyle="Regular20">ПК и ПП ВШСДТ</Text>
          </Link>
          <Link as={NextLink} title="" href="#">
            <Text textStyle="Regular20">ПК и ПП в рамках Содействия занятости</Text>
          </Link>
          <Link as={NextLink} title="" href="https://lk.styleschool.ru/">
            <Text textStyle="Regular20">Курсы на Soho LMS</Text>
          </Link>
        </Box>
      </Flex>
    </Flex>
    <Breadcrumb separator='•' textAlign="center" fontSize='15px' p={isMax959 ? '0rem 2rem' : "0rem 6rem"}>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>ВШСДТ</BreadcrumbLink>
      </BreadcrumbItem>
      {breadcrumbs.map((crumb:any, i:number) => <BreadcrumbItem key={i} isCurrentPage={breadcrumbs.length === i+1}><BreadcrumbLink href={crumb.href}>{crumb.text}</BreadcrumbLink></BreadcrumbItem>)}
    </Breadcrumb>
    <Footer/>
  </Flex>
  )
}
