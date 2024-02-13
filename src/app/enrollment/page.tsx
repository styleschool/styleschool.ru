'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { PageGrid } from '@/components/page-grid';

import data from "./page-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header pageName="Поступление"/>
    <PageGrid { ...data } breadcrumbs={[{text: 'Поступление'}]}  />
    <Footer/>
  </Flex>
  )
}
