'use client';

import { HamburgerIcon, LockIcon } from '@chakra-ui/icons'
import { Flex, Text } from '@chakra-ui/react'

export default function Header(props: any) {
  return (
      <Flex direction="row" align="center" height="35" bg="#F9F9F9" color="black">
        <HamburgerIcon w={10} h={10} p="0.5rem"/>
        <Text>меню</Text>
        <Text m="auto">{props?.name ? 'ВШСДТ • ' + props?.name : 'ВШСДТ'}</Text>
        <LockIcon w={10} h={10} p="0.5rem"/>
      </Flex>
  )
}
