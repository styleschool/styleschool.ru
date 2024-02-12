'use client';

import { Flex } from '@chakra-ui/react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { PageGrid } from '@/components/page-grid';
import { Address } from '../../components/address';

import data from "./page-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header breadcrumbs={[{text: 'Контакты'}]}/>
    <PageGrid { ...data } />
    <Address/>
    <Footer/>
  </Flex>
  )
}
