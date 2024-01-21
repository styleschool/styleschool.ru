'use client';

import { Flex, VStack, HStack, Box, Text } from '@chakra-ui/react';

import Footer from '../footer';
import { HoveredStyledLink } from '../footer-link';
import Header from '../header';
import Image from 'next/image';

export default function Home() {
  return (
  <Flex direction="column">
    <Header page="Коммерческое образование"/>
    <VStack align="center" p="1.5rem">
      <Box borderWidth='2px' borderRadius='lg'  w='70%' p={4}>
        <Flex direction="row">
          <Flex direction="column">
            <HStack mb="1rem" spacing="1rem"  sx={{flexWrap: 'wrap'}}>
              <HoveredStyledLink url="#" text="#нейросети" />
              <HoveredStyledLink url="#" text="#дизайн" />
              <HoveredStyledLink url="#" text="#стиль" />
              <HoveredStyledLink url="#" text="мода" />
              <HoveredStyledLink url="#" text="дизайнер" />
              <HoveredStyledLink url="#" text="стилист" />
            </HStack>
            <Text textStyle="h4">Курс: Нейросети для дизайнеров и стилистов (3 месяца)</Text>
            <VStack align="left" p="1.5rem">
              <Text>Уровень: ИИ и нейросети, 1 ступень</Text>
              <Text>Профессия: контент менеджер, промпт инженер</Text>
              <Text>Документ: удостоверение о повышении квалификации</Text>
            </VStack>
          </Flex>
          <Flex direction="column">
            <Image src="Group_72.jpg" width='100' height="100" alt="logo" />
          </Flex>
        </Flex>  
      </Box>
    </VStack>
    <Footer/>
  </Flex>
  )
}