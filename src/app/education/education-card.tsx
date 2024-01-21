
import { Flex, VStack, HStack, Box, Text, useMediaQuery } from '@chakra-ui/react';
import { HoveredStyledLink } from '../footer-link';

export default function EducationCard({tags, title, level, profession, document, key}: {tags: {href: string; text: string}[], title: string; level: string; profession: string; document?: string; key: any;}) {
  const [isMax959] = useMediaQuery('(max-width: 959px)');
  const [isMax628] = useMediaQuery('(max-width: 628px)');
    return (
    <Box borderWidth='2px' borderRadius='lg' p="1rem 1rem" w="100%">
      <Flex direction={isMax628 ? "column" : "row"} justifyContent="space-between" bg="#F9F9F9">
        <Flex direction="column">
          { tags?.length ?
            <HStack mb="1rem" p="1rem 1rem" spacing="1rem"  sx={{flexWrap: 'wrap'}}>
              { tags.map((tag)=> <HoveredStyledLink key={tag.text} href={tag.href} text={tag.text} />) }
            </HStack>
            : null
          }
          <Text p="0rem 1rem" textStyle="h4">Курс: {title}</Text>
          <VStack align="left" p="1.5rem">
            <Text>Уровень: {level}</Text>
            <Text>Профессия: {profession}</Text>
            <Text>Документ: {document}</Text>
          </VStack>
        </Flex>
          <Flex direction="column"> <Box as="button" w={isMax628 ? "100%" : "6rem"} h={isMax628 ? "6rem" : "100%"} bg="#d9d9d9"/></Flex> 
      </Flex>  
    </Box>);
  }