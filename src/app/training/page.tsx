'use client';

import { Flex, Box } from '@chakra-ui/react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { PageGrid } from '@/components/page-grid';

import data from "./page-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header pageName="Подготовка кадров"/>
    <PageGrid { ...data } breadcrumbs={[{text: 'Подготовка кадров'}]} />
    <Footer/>
  </Flex>
  )
}
