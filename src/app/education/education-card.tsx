
import { Flex, VStack, HStack, Box, Text, useMediaQuery } from '@chakra-ui/react';
import { HoveredStyledLink } from '../footer-link';
import { PiPlayFill } from "react-icons/pi";
import { IconProvider } from "../icon-provider";
import { useRouter } from 'next/navigation'

export default function EducationCard({tags, title, level, profession, document, link='#', key}: {tags: {href: string; text: string}[], title: string; level: string; profession: string; document?: string; key: any; link: string;}) {
  const [isMax959] = useMediaQuery('(max-width: 959px)');
  const [isMax628] = useMediaQuery('(max-width: 628px)');
  const router = useRouter()
    return (
    <Box key={key} borderWidth='2px' borderRadius='lg' p="1rem 1rem" w="100%">
      <Flex direction={isMax628 ? "column" : "row"} justifyContent="space-between"  borderRadius='lg' bg="#F9F9F9">
        <Flex direction="column">
          { tags?.length ?
            <HStack mb="1rem" p="1rem 1rem" spacing="1rem"  sx={{flexWrap: 'wrap'}}>
              { tags.map((tag)=> <HoveredStyledLink key={tag.text} href={tag.href} text={tag.text} />) }
            </HStack>
            : null
          }
          <Text p="0rem 1rem" textStyle="h4" color="secondary">Курс: {title}</Text>
          <VStack align="left" p="1.5rem">
            <Text>Уровень: {level}</Text>
            <Text>Профессия: {profession}</Text>
            <Text>Документ: {document}</Text>
          </VStack>
        </Flex>
        <Flex direction="column">
          <Box borderRadius={isMax628 ? 'lg' : '0% 0.5rem 0.5rem 0%'} as="button" w={isMax628 ? "100%" : "6rem"} h={isMax628 ? "6rem" : "100%"} bg='secondary' onClick={() => router.push(link)}>
            <Flex direction="row" justify="center">
              <IconProvider color="white" size='2rem' icon={<PiPlayFill />} />
            </Flex> 
          </Box>
        </Flex> 
      </Flex>  
    </Box>);
  }