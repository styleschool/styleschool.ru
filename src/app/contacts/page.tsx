'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react';
import Footer from '../footer';
import Header from '../header';
import { PageGrid } from '@/app/course/page-grid';
import { Address } from './address';

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
