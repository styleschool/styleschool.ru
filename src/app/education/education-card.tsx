
import { Flex, VStack, HStack, Box, Text } from '@chakra-ui/react';
import { HoveredStyledLink } from '../footer-link';

export default function EducationCard({tags, title, level, profession, document, key}: {tags: {href: string; text: string}[], title: string; level: string; profession: string; document?: string; key: any;}) {
    return (
    <Box borderWidth='2px' borderRadius='lg' p="1rem 1rem" w="100%">
      <Flex direction="row" justifyContent="space-between" bg="#F9F9F9">
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
        <Flex direction="column">
          <Box as="button" w="100px" h="100%" bg="#d9d9d9">
          </Box>
        </Flex>
      </Flex>  
    </Box>);
  }