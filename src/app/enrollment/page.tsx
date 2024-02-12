'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react';
import Footer from '../footer';
import Header from '../header';
import { PageGrid } from '@/app/course/page-grid';

import data from "./page-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header breadcrumbs={[{text: 'Поступление'}]}/>
    <PageGrid { ...data } />
    <Footer/>
  </Flex>
  )
}
