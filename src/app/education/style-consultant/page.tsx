'use client';

import { Flex } from '@chakra-ui/react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { PageGrid } from '@/components/page-grid';

import data from "./page-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header pageName="Курс: Консультант по стилю" />
    <PageGrid { ...data } breadcrumbs={[{text: 'Коммерческое образование', href: "/education"}, {text: 'Консультант по стилю'}]} />
    <Footer/>
  </Flex>
  )
}
