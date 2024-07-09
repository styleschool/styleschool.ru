'use client';

import { Flex, Text, Box, Link, useMediaQuery, Menu, MenuButton,  MenuList,  MenuItem } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';
import Header from '../components/header';
import { useState } from 'react';

export default function Home() {
  const [ opacity, setOpacity ] = useState(0);
  const [ isMax959 ] = useMediaQuery('(max-width: 959px)')
  return (
  <Flex direction="column">
    <Header/>
    <Flex direction="column" align="center" p="6rem 2rem 1rem">
      <Image onMouseOut={e=>{setOpacity(0)}} onMouseOver={e=>{setOpacity(1)}}  src="pawel-czerwinski-O3i.jpg" width='200' height="200" alt="logo" style={{
        position:'absolute',
        opacity: opacity,
        transition:'opacity 0.5s linear'
        }} />
      <Image src="Group_72.jpg" width='200' height="200" alt="logo" />
    </Flex>
    <Flex direction="column" align="center" p="1rem" justify={'center'}>
      <Text textStyle="h1" color="black" align={isMax959 ? 'center' : 'left'}>ВЫСШАЯ ШКОЛА СТИЛИСТИКИ</Text>
      <Text textStyle="h1" color="black" align={isMax959 ? 'center' : 'left'}>ДИЗАЙНА И ТЕХНОЛОГИЙ</Text>
    </Flex>
    <Flex direction="row" mb="1.5rem" p="1rem" justifyContent="center" alignItems="center">
      <Box p="1rem" sx={{ borderRight: '1px solid black' }}>
        <Text align="right" textStyle="h2">Мода</Text>
        <Text align="right" textStyle="h2">Дизайн</Text>
        <Text align="right" textStyle="h2">IT</Text>
        <Text align="right" textStyle="Regular20">Профессиональная переподготовка</Text>
        <Text align="right" textStyle="Regular20">и повышение квалификации</Text>
        <Text align="right" textStyle="Regular20">в креативных индустриях</Text>
      </Box>
      <Flex direction="column">
        <Box p="1rem">
          <Link as={NextLink} title="Образование" href="education"><Text textStyle="Regular20">Каталог курсов</Text></Link>
          <Menu isLazy>
            <MenuButton><Text textStyle="Regular20">Акселератор</Text></MenuButton>
            <MenuList>
              <MenuItem><Link as={NextLink} title="Дизайнер модного бренда" href="accelator/fashion_brand_designer"><Text textStyle="Regular16"> Дизайнер модного бренда</Text></Link></MenuItem>
              <MenuItem><Link as={NextLink} title="Модный бренд в fashion - индустрии" href="accelator/brand_in_fashion_industry"><Text textStyle="Regular16">Модный бренд в fashion - индустрии</Text></Link></MenuItem>
              <MenuItem><Link as={NextLink} title="Карьерный трект стилистов и дизайнеров" href="accelator/career_track"><Text textStyle="Regular16">Карьерный трект стилистов и дизайнеров </Text></Link></MenuItem>
            </MenuList>
          </Menu>
          <Link as={NextLink} title="Поступление" href="enrollment"><Text textStyle="Regular20">Поступление</Text></Link>
          <Link as={NextLink} title="Подготовка кадров" href="training"><Text textStyle="Regular20">Подготовка кадров</Text></Link>
          <Link as={NextLink} title="Контакты" href="contacts"><Text textStyle="Regular20">Контакты</Text></Link>
        </Box>
      </Flex>
    </Flex>
    <Footer/>
  </Flex>
  )
}
