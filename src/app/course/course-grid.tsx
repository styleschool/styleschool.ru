import { Box, Flex, HStack, List, ListItem, Text, UnorderedList, VStack, useMediaQuery } from "@chakra-ui/react"
import { memo, use } from "react"
import { HoveredStyledLink } from "../footer-link";
import { RedSquareTitle } from "./components/red-square-title";
import { styleConsultantListCourseReview, styleConsultantListProgram1 } from "./course-data";
import { TextContainer } from "./components/text-container";
import { TextDescription } from "./components/text-description";
import { UnorderList } from "./components/list-items";

const tags = [
  {
    id: 'program',
    text: '#Программа',
  },
  {
    id: 'teachers',
    text: '#Преподователи',
  },
  {
    id: 'cost',
    text: '#Стоимость',
  }
]

export const CourseGrid = memo(function CourseGrid(props: any) {
  const [isMax628] = useMediaQuery('(max-width: 628px)');
  return (<>
      <Flex direction="column" w="100%" p="3rem 6rem">
        <Flex dir={isMax628 ? 'column' : 'row'} justify={isMax628 ? 'flex-start' : 'space-between'} mb="sm">
          <TextContainer direction="row" alignItems="flex-end" justify="flex-start" width={isMax628 ? '100%' : '50%'} mb={0} alignSelf='unset'>

            <Box w="xs" h="100%" mr="2rem">
              <Box w="xs" h="xs" bg='secondary' />
            </Box>

            <VStack align="flex-start" w="calc(100% - 2rem)" >
              <Text as="h1" textStyle="h1">Консультант по стилю</Text>
              <Text as="h2" textStyle="h2" mb="xs">Быстрый старт</Text>
              <TextDescription 
                mb={0} 
                text="В этом курсе мы собрали самые нужные знания, чтобы вы могли учиться с нуля, в любом возрасте, в любом городе, получая нужный результат: для себя, для карьеры дипломированного стилиста, для бизнеса."
              />
              <HStack spacing={isMax628 ? "0.5rem" : "1.5rem"}>
                {tags.map((tag, i) => (
                  <HoveredStyledLink key={i} text={tag.text} href={`#${tag.id}`} />
                ))}
              </HStack>
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
            >Старт: 20 февраля 2024г.</Text>
            <Text as="h4"
              textStyle="Regular28"
              sx={{
                '&:first-letter': {
                  color: 'secondary',
                  fontWeight: 'bold',
                }
              }}
            >Длительность: 2 месяца</Text>
          </VStack>
        </Flex>
      </Flex>

      <Box w="100%" h="10rem" bg="secondary" mb="sm">
        // здесь расположить картинку
      </Box>

      <Flex direction="column" w="100%" p="3rem 6rem">
        <RedSquareTitle>
          <Flex direction="column" align="flex-start">
            <Text as="h2" textStyle="Light20">1 ступень  - быстрый старт</Text>
            <Text as="h2" textStyle="Bold20" mb="1rem">консультант по стилю</Text>
          </Flex>
        </RedSquareTitle>

        <TextContainer>
          <TextDescription mb="md" 
            text="Первый шаг в мир профессиональных возможностей. Участники овладевают ключевыми этапами создания индивидуального стиля в одежде, детально разбирая каждый аспект. Командная работа под руководством опытных преподавателей обеспечивает постоянный прогресс." />

          <Flex direction={isMax628 ? "column" : "row"} mb="md">
            <Flex direction="column" alignItems="flex-start" justify="flex-start" w={isMax628 ? '100%' : '50%'} mr={isMax628 ? 0 : '2rem'}>
              <HStack spacing={isMax628 ? '0.5rem' : '1rem'} mb="xs">
                <Text textStyle="Bold16">Длительность:</Text>
                <TextDescription mb={0} text="8 недель" />
              </HStack>
              <HStack spacing={isMax628 ? '0.5rem' : '1rem'} mb="xs">
                <Text textStyle="Bold16">Категория слушателей:</Text>
                <TextDescription mb={0} text="без ограничений" />
              </HStack>
              <HStack spacing={isMax628 ? '0.5rem' : '1rem'} mb="xs">
                <Text textStyle="Bold16">Требования при поступлении:</Text>
                <TextDescription mb={0} text="нет" />
              </HStack>
              <HStack spacing={isMax628 ? '0.5rem' : '1rem'} mb="xs">
                <Text textStyle="Bold16">Образовательная траектория:</Text>
                <TextDescription mb={0} text="мода и стиль, 1 уровень" />
              </HStack>
              <TextDescription mb={0} text="Документ об образовании ведущего государственного ВУЗа" />
            </Flex>
            <Flex direction="column" alignItems="flex-start" justify="flex-start" w={isMax628 ? '100%' : '50%'}>
              <HStack spacing={isMax628 ? '0.5rem' : '1rem'} mb="xs">
                <Text textStyle="Bold16">Стоимость курса:</Text>
                <TextDescription mb={0} text="50 000 ₽, доступна рассрочка" />
              </HStack>
              <HStack spacing={isMax628 ? '0.5rem' : '1rem'} mb="xs">
                <Text textStyle="Bold16">Стоимость для вольных слушателей:</Text>
                <TextDescription mb={0} text="30 000 ₽" />
              </HStack>
              <TextDescription text="Доступно бесплатное обучение в рамках федерального проекта “Содействие занятости”" mb="xs" />
              <TextDescription mb={0} text="Доступна очно-заочная форма обучения" />
            </Flex>
          </Flex>

          <Box position="relative" textAlign="right" mb="md">
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
            <Text textStyle="Bold16">поступление</Text>
          </Box>
          <TextDescription 
            text="Цель курса - передача необходимых технологий и закрепление навыков для успешного старта в профессии консультанта по стилю." />

          <TextDescription mb="sm" 
            text="В ходе обучения вы получите теоретическую и практическую подготовку, работая с опытными преподавателями. Научитесь применять практические навыки в консультировании клиентов (моделей), учитывая их индивидуальные (физиологические) особенности и модные тренды. Кроме того, у вас будет возможность набрать необходимое количество баллов для поступления на дипломные программы." 
          />

          <TextDescription mb="sm" 
            text="Курс реализуется ВШСДТ совместно с Национальным исследовательским Томским государственным университетом с возможностью получения документа об образовании Университета."
          />
        </TextContainer>

        <RedSquareTitle alignItems="center" containerMR="sm">
          <Text as="h2" textStyle="h2">ОБЗОР КУРСА</Text>
        </RedSquareTitle>

        <TextContainer mb="md">

          <TextDescription 
            text="Обучение организовано через онлайн формат, включающий 30% видеолекций и 70% практических занятий. Практика включает этапы создания концепции стиля клиента, групповую работу, обсуждение кейсов и анализ ошибок."
          />

          <TextDescription mb={0}
            text="Очные практики в Москве реализуются как дополнительная траектория по запросу*" />

          <TextDescription  mb="sm" text="(заключается отдельный договор)" />
            
          <TextDescription text="Программа направлена на достижение слушателем следующих результатов обучения:" />

          <UnorderList
          >
            {styleConsultantListCourseReview.map(item => (<ListItem key={item.id}>
              <Text textStyle="Regular16">
                {item.text}
              </Text>
            </ListItem>))}
          </UnorderList>
        </TextContainer>

        <RedSquareTitle alignItems="center" containerMR="sm">
          <Text as="h2" textStyle="h2">ПРОГРАММА КУРСА</Text>
        </RedSquareTitle>

        <TextContainer>
          <TextDescription 
            text="Предлагаемая программа реализуется в формате интенсивного погружения в 4 основных аспекта деятельности консультанта-стилиста: коммуникация, креативное мышление, владение актуальными трендами, осознанное использование имидж-технологий в зависимости от запроса клиента. В курс включены следующие ключевые дисциплины:" 
          />

          <UnorderList>
            {styleConsultantListProgram1.map(item => (<ListItem key={item.id}>
              <Text textStyle="Regular16">
                {item.text}
              </Text>
            </ListItem>))}
          </UnorderList>
          <Box height="sm" />
          <Box>
            <Text as="span" textStyle="Bold16">Итоговой работой по курсу «Консультант по стилю»</Text>
            <TextDescription as="span"
              text={`является проектная работа, которая выполняется командой, представляет разработанный в результате реализации серии практических заданий для потенциального клиента "Книгу стиля" в формате Style book, и содержит разделы:`}
            />
          </Box>
        </TextContainer>
      </Flex>
    </>
  )
})
