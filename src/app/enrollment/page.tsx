'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { PageGrid } from '@/components/page-grid';

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
