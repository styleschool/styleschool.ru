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
          <Text> ВШСДТ{props.pageName ? ` ⬤ ${props.pageName}` : ''}</Text>
        </Box>
        <Link as={NextLink} title="Авторизация" href="/intro"><IconProvider size='1.5rem' icon={<PiUserFill/>} /></Link>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="md">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{`АНО ДПО ВШСДТ`}</DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consequat nisl vel pretium lectus quam id. Semper quis lectus
                nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
                quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
                magna eget est lorem. Erat imperdiet sed euismod nisi porta.
                Lectus vestibulum mattis ullamcorper velit.
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
  )
}
