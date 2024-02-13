'use client';

import { Flex, VStack, useMediaQuery } from '@chakra-ui/react';

import Footer from '../../components/footer';
import EducationCard from '../../components/education-card';
import Header from '../../components/header';
import courses from './courses.json';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

const breadcrumbs = [{text: 'Коммерческое образование'}];

export default function Home() {
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
  <Flex direction="column">
    <Header pageName="Коммерческое образование"/>
    <VStack align="center" p={isMax959 ? "5rem 1rem" : "7rem 6rem"} spacing="2rem">
      { courses.map((course, i)=> <EducationCard key={i} {...course} /> ) }
    </VStack>

    <Breadcrumb separator='⬤' textAlign="center" fontSize='15px' p={isMax959 ? '0rem 2rem' : "0rem 6rem"}>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>ВШСДТ</BreadcrumbLink>
      </BreadcrumbItem>
      {breadcrumbs.map((crumb:any, i:number) => <BreadcrumbItem key={i} isCurrentPage={breadcrumbs.length === i+1}><BreadcrumbLink href={crumb.href}>{crumb.text}</BreadcrumbLink></BreadcrumbItem>)}
    </Breadcrumb>
    <Footer/>
  </Flex>
  )
}
