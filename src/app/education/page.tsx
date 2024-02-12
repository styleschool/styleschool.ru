'use client';

import { Flex, VStack, useMediaQuery } from '@chakra-ui/react';

import Footer from '../../components/footer';
import EducationCard from '../../components/education-card';
import Header from '../../components/header';
import courses from './courses.json';

export default function Home() {
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
  <Flex direction="column">
    <Header breadcrumbs={[{text: 'Коммерческое образование'}]}/>
    <VStack align="center" p={isMax959 ? "1rem 1rem" : "3rem 6rem"} spacing="2rem">
      { courses.map((course, i)=> <EducationCard key={i} {...course} /> ) }
    </VStack>
    <Footer/>
  </Flex>
  )
}
