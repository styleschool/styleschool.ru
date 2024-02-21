'use client';

import { Flex } from '@chakra-ui/react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { PageGrid } from '@/components/page-grid';

import data from "./page-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header pageName="Курс: Интерьерный стилист" />
    <PageGrid { ...data } breadcrumbs={[{text: 'Коммерческое образование', href: "/education"}, {text: 'Интерьерный стилист'}]} />
    <Footer/>
  </Flex>
  )
}
