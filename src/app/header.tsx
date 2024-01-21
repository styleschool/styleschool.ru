'use client';

import React from 'react';
import { HamburgerIcon, LockIcon } from '@chakra-ui/icons'
import { useMediaQuery, Flex, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, IconButton, Box, useDisclosure } from '@chakra-ui/react'

export default function Header(props: any) {
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
      <Flex direction="row" align="center" height="35" bg="#F9F9F9" color="black" p={isMax959 ? 0 : "2rem 6rem"}>
        <IconButton aria-label='menu' icon={<HamburgerIcon />} onClick={onOpen}></IconButton>
        <Box m="0 auto"><a href="/">ВШСДТ</a>{props?.page ? ' • ' + props?.page : ''}</Box>
        <LockIcon w={10} h={10} p="0.5rem"/>
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
