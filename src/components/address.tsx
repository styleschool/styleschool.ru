import { Box, Flex, Text, VStack, useMediaQuery } from '@chakra-ui/react'
import { memo } from "react"

export const Address = memo(function Address(props: any) {
  const [isMax667] = useMediaQuery('(max-width: 667px)');
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
      <Flex direction="column" w="100%" p={isMax959 ? '1rem 2rem' : "3rem 6rem"} >
        <Flex justify={isMax959 ? 'flex-start' : 'space-between'} mb="sm">
          { !isMax667 ? <Box w="xs" h="100%" mr="2rem">
                <Box w="xs" h="xs" bg='secondary' />
              </Box> : null
          }
          <VStack align="flex-start" w="calc(100% - 2rem)" >
            <Text as="h2" textStyle="Light20">Адрес</Text>
          </VStack>
        </Flex>
        <Flex direction="row" justify={isMax959 ? 'flex-start' : 'flex-end'}>
          <Flex direction={isMax959 ? 'column' : 'row'} width={isMax959 ? '100%' : '75%'} justify={isMax959 ? 'flex-end' : 'flex-start'} mb="sm">
            <Box w={isMax959 ? '100%' : '50%'}>
              <Text>129085, г. Москва, проспект Мира, д. 101, стр.1, пом.210</Text>
              <Text>Для почтовой корреспонденции: а/я 2-18</Text>
              <Text>Телефон: +7 495 221-89-35</Text>
              <Text>E-mail: info@styleschool.ru</Text>
              <br/>
              <Text>Время работы учебного отдела:</Text>
              <Text>Пн-Пт с 09:30 до 18:30 (мск)</Text>
              <Text>Время проведения занятий, в т.ч. онлайн:</Text>
              <Text>Пн-Пт с 10:00 до 22:00 (мск)</Text>
              <Text>Сб с 10:00 до 18:00</Text>
            </Box>
            <Box w={isMax959 ? '100%' : '40%'} h="10px" bg="blue"/>
          </Flex>
        </Flex>
      </Flex>
  )
})
