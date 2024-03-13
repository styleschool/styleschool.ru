'use client';

import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  useMediaQuery,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Box,
  useDisclosure,
  Link,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { PiUserFill } from "react-icons/pi";
import { IconProvider } from "./icon-provider";

export default function Header(props: any) {
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <Flex direction="row" align="center" height="35" bg="#F9F9F9" color="black" p={isMax959 ? 0 : "2rem 6rem"} sx={{position: 'fixed', width: '100%'}}>
        <IconButton aria-label='menu' icon={<HamburgerIcon />} onClick={onOpen}></IconButton>
        <Box color="secondary" m="0 auto">
          <Text> <Link as={NextLink} title="Авторизация" href="/">ВШСДТ</Link>{props.pageName ? ` • ${props.pageName}` : ''}</Text>
        </Box>
        <Link as={NextLink} title="Авторизация" href="/intro"><IconProvider size='1.5rem' icon={<PiUserFill/>} /></Link>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`АНО ДПО ВШСДТ`}</DrawerHeader>
            <DrawerBody>
            <Box p="1rem">
              <Link as={NextLink} title="Образование" href="/education"><Text textStyle="Regular20">Образование</Text></Link>
              <Link as={NextLink} title="Поступление" href="/enrollment"><Text textStyle="Regular20">Поступление</Text></Link>
              {/* <Link as={NextLink} title="Проекты" href=""><Text>Проекты</Text></Link>
              <Link as={NextLink} title="О Школе" href=""><Text>О Школе</Text></Link> */}
              <Link as={NextLink} title="Контакты" href="/contacts"><Text textStyle="Regular20">Контакты</Text></Link>
            </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
  )
}
