'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import Footer from '../../footer';
import Header from '../../header';
import { CourseGrid } from '@/app/course/course-grid';

export default function Home() {
  return (
  <Flex direction="column">
    <Header/>
    <CourseGrid />
    <Footer/>
  </Flex>
  )
}
