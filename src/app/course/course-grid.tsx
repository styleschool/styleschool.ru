import { Box, Flex, HStack, List, ListItem, Text, UnorderedList, VStack, useMediaQuery } from "@chakra-ui/react"
import { memo, use } from "react"
import { HoveredStyledLink } from "../footer-link";
import { RedSquareTitle } from "./components/red-square-title";
import { TextContainer } from "./components/text-container";
import { TextDescription } from "./components/text-description";
import { PointList } from "./components/list-items";


export const CourseGrid = memo(function CourseGrid(props: any) {
  const [isMax667] = useMediaQuery('(max-width: 628px)');
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  const { 
    title1, title2, description, details,
    tags, startDate, duration, points } = props;
  return (<>
      <Flex direction="column" w="100%" p={isMax959 ? '1rem 2rem' : "3rem 6rem"}>
        <Flex direction={isMax959 ? 'column' : 'row'} justify={isMax959 ? 'flex-start' : 'space-between'} mb="sm">
          <TextContainer direction="row" alignItems="flex-end" justify="flex-start" width={isMax959 ? '100%' : '50%'} mb={0} alignSelf='unset'>

            { !isMax667 ? <Box w="xs" h="100%" mr="2rem">
              <Box w="xs" h="xs" bg='secondary' />
            </Box> : null }

            <VStack align="flex-start" w="calc(100% - 2rem)" >
              <Text as="h1" textStyle="h1">{title1}</Text>
              <Text as="h2" textStyle="h2" mb="xs">{title2}</Text>
              <TextDescription
                mb={0} 
                text={description}
              />
              <HStack spacing={isMax959 ? "0.5rem" : "1.5rem"} mb={isMax959 ? 'md' : undefined}>
                {tags.map((tag, i) => (
                  <HoveredStyledLink key={i} text={tag.text} href={`#${tag.id}`} />
                ))}
              </HStack>
              {
                details && details.length ? details.map((text, i) => 
                <TextDescription 
                  key={i}
                  mb={0} 
                  text={text}
                />) : null
              }
            </VStack>
          </TextContainer>
          <VStack justify="center" align="flex-start">
            <Text 
              as="h4" 
              textStyle="Regular28"
              sx={{
                '&:first-letter': {
                  color: 'secondary',
                  fontWeight: 'bold',
                }
              }}
            >Старт: {startDate}.</Text>
            <Text as="h4"
              textStyle="Regular28"
              sx={{
                '&:first-letter': {
                  color: 'secondary',
                  fontWeight: 'bold',
                }
              }}
            >Длительность: {duration}.</Text>
          </VStack>
        </Flex>
      </Flex>

      <Box w="100%" h="10rem" bg="secondary" mb="sm">
        // здесь расположить картинку
      </Box>

        { points && points.length ? points.map((point, i) => <Box key={i}>
        <Flex direction="column" w="100%"  p={isMax959 ? '1rem 2rem' : "3rem 6rem"}>
          <RedSquareTitle id={point.id} displayRed={ !isMax667 ? true : false }>
            <Flex direction="column" align="flex-start">
              { point.title ? <Text as="h2" textStyle="Light20">{point.title}</Text> : null }
              { point.title2 ? <Text as="h2" textStyle="Bold20" mb="1rem">{point.title2}</Text> : null }
            </Flex>
          </RedSquareTitle>
          <TextContainer>
            {
              point.content && point.content.length ? point.content.map((item, i) => 
              <TextDescription 
                key={i}
                mb={item.mb}
                text={item.text}
              />) : null
            }
            <PointList type={point.list.type} content={point.list.content} isMax959={isMax959}/>
            { point.button ? <Box position="relative" textAlign="right" mb="md">
              <Box 
                w="4rem" h="4rem" 
                border="thin solid rgb(125,1,1)"
                borderRadius="50%" 
                position="absolute" top="-1.5rem" right="3rem" zIndex="1" 
                _hover={{ transform: 'scale(1.5)' }} 
                sx={{
                  transition: 'transform 0.5s ease-in-out',
                }}
              />
              <Text textStyle="Bold16">{point.button}</Text>
            </Box> : null 
            }
            {
              point.details && point.details.length ? point.details.map((detail, i) => 
              <TextDescription
                key={i}
                text={detail}
              />) : null
            }
          </TextContainer>
        </Flex>
        </Box>) : null }
    </>
  )
})
