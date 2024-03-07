'use client';

import { Flex } from '@chakra-ui/react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { PageGrid } from '@/components/page-grid';

import data from "./page-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header pageName="Дизайн интерьера" />
    <PageGrid { ...data } breadcrumbs={[{text: 'Каталог курсов', href: "/education"}, {text: 'Дизайн интерьера'}]} />
    <Footer/>
  </Flex>
  )
}
