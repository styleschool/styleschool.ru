'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react';
import Footer from '../../footer';
import Header from '../../header';
import { CourseGrid } from '@/app/course/course-grid';

import data from "./course-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header/>
    <CourseGrid { ...data } />
    <Footer/>
  </Flex>
  )
}
