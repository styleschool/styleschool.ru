'use client'
import React from "react";

import { Grid, GridItem, useMediaQuery, Box, Text, Flex, UnorderedList, ListItem, HStack } from '@chakra-ui/react'
import Paragraph from "./paragraph";
import List from "./list";
import SocNetIcons from "./socnet-icons";
import { StyledLink } from './footer-link';


const font = "Alegreya Sans";

const TextTitle = ({text}:{text: string}) => {
  return <Text textStyle='footerTitle'>{text}</Text>
}

const HoveredStyledLink = ({text}:{text: string}) => {
  return (<StyledLink 
    textProps={{
      sx: {
        textDecoration: 'underline',
        _hover: {
          textDecoration: 'none',
          color: 'rgb(87,143,163)'
        }
      }
    }}
    href="/network-educational-programs">{text}</StyledLink>)
}

export default function Footer(props: any) {
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
    <Flex align='center' justify='center' bg="rgb(0,0,0)" p={isMax959 ? "4rem 1rem" : "4rem 6rem"}>
      <Flex direction='column' w='100%'>
        <Flex direction='row' justify='space-between' mb='2rem'>
          <Box>
            <TextTitle text='ГЕОГРАФИЯ' />
            <Flex direction="column">
              <StyledLink href="https://styleschool.ru/">Москва</StyledLink>
              <StyledLink href="http://novosib.styleschool.ru/">Новосибирск</StyledLink>
              <StyledLink href="/cannes">Франция</StyledLink>
              <Text color="white" textStyle="Regular14">Online</Text>
            </Flex>
          </Box>
          <Box>
            <TextTitle text='АДРЕС МОСКВА' />
              <Text textStyle='footerText'>
                г. Москва, Проспект Мира,
                <br />
                дом&nbsp;101, стр.&nbsp;1, офис&nbsp;210
              </Text>
              <Text textStyle='footerText'>
                Для почтовых отправлений:
                <br />
                а/я&nbsp;218
              </Text>
          </Box>
          <Box>
            <TextTitle text='ВРЕМЯ РАБОТЫ' />
              
            <Text textStyle='footerText'>
              {props.filial || "Москва"}
            </Text>
            <Text textStyle='footerText'>
              Пон.-пят.
            </Text>
            <Text textStyle='footerText'>
              с 10:00 до 19:00
            </Text>
            <Text textStyle='footerText'>
              Суб. с 11:00 до 14:00
            </Text>
          </Box>
          <Box>
            <TextTitle text='КОНТАКТЫ' />
            {props.phones ? (
              <Text textStyle='footerText'>
                {props.phones}
              </Text>
            ) : (
              <>
                <Text textStyle='footerText'>
                  +7 (495) 221-89-35
                </Text>
              </>
            )}
            <Box>
              <StyledLink href="/contacts">
                все контакты
              </StyledLink>
            </Box>
          </Box>
          <Box>
            <TextTitle text='СОТРУДНИЧЕСТВО' />
              <UnorderedList>
                <ListItem>
                  <StyledLink 
                    textProps={{
                      sx: {
                        textDecoration: 'underline',
                        _hover: {
                          textDecoration: 'none',
                          color: 'rgb(87,143,163)'
                        }
                      }
                    }}
                    href="/partners-pro">Партнерская программа</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink 
                    textProps={{
                      sx: {
                        textDecoration: 'underline',
                        _hover: {
                          textDecoration: 'none',
                          color: 'rgb(87,143,163)'
                        }
                      }
                    }}
                    href="/network-educational-programs">Сетевые программы</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink 
                    textProps={{
                      sx: {
                        textDecoration: 'underline',
                        _hover: {
                          textDecoration: 'none',
                          color: 'rgb(87,143,163)'
                        }
                      }
                    }}
                    href="/corporate">Корпоративные программы</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink 
                    textProps={{
                      sx: {
                        textDecoration: 'underline',
                        _hover: {
                          textDecoration: 'none',
                          color: 'rgb(87,143,163)'
                        }
                      }
                    }}
                    href="/vacancy">Вакансии</StyledLink>
                </ListItem>
              </UnorderedList>
          </Box>
        </Flex>
        <Flex direction='column'>
          <Box w='100%' h='0.05rem' bg='white' mb='1rem' />
          <SocNetIcons />
          <Flex direction='row' justify='space-between' alignSelf='center' mb='2rem'>
            <Flex direction='column' justify='start' alignSelf='center' w='100%'>
              <Text textStyle='footerText'>Автономная некоммерческая организация</Text>
              <Text textStyle='footerText'>Дополнительного профессионального образования</Text>
              <Text textStyle='footerText'>«Высшая школа стилистики, дизайна и технологий»</Text>
              <Box sx={{ height: "1rem" }} />
              <StyledLink textStyles='footerLink' 
                textProps={{
                  sx: {
                    textDecoration: 'underline',
                    _hover: {
                      textDecoration: 'none',
                      color: 'rgb(87,143,163)'
                    }
                  }
                }} href="/information-about-educational-organization">Сведения об образовательной организации</StyledLink>
              <StyledLink textStyles='footerLink' 
                textProps={{
                  sx: {
                    textDecoration: 'underline',
                    _hover: {
                      textDecoration: 'none',
                      color: 'rgb(87,143,163)'
                    }
                  }
                }}
                href="/information">Информация для пользователей</StyledLink>
            </Flex>
            <Flex direction='column' justify='start' alignSelf='center' w='100%'>
              <Text color="rgb(187, 144, 41)">
                Партнёры:
              </Text>
              <UnorderedList color="rgb(187, 144, 41)">
                <ListItem>
                  Московский физико-технический институт
                </ListItem>
                <ListItem>
                  Московский художественно-промышленный институт
                </ListItem>
                <ListItem>
                  Московский психолого-социальный университет
                </ListItem>
                <ListItem>
                  Иновационно-образовательный комплекс «Техноград»
                </ListItem>
                <ListItem>
                  European Model Academy
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <HStack mb='1rem' spacing='1rem'  sx={{flexWrap: 'wrap'}}>>
            <Text sx={{textTransform: 'uppercase', color: 'white'}}>ТЕГИ</Text>
            <HoveredStyledLink text='#ВШСДТ' />
            <HoveredStyledLink text='#имиджмейкерстилист' />
            <HoveredStyledLink text='#курсыстилистовимиджмейкеров' />
            <HoveredStyledLink text='#курсыдизайнинтерьера' />
            <HoveredStyledLink text='#дизайнидекорированиеинтереьера' />
            <HoveredStyledLink text='#визуальныймерчендайзинг' />
            <HoveredStyledLink text='#бизнесаналитик' />
            <HoveredStyledLink text='#fashionnovation' />
            <HoveredStyledLink text='#conversationai' />
            <HoveredStyledLink text='#прайслист' />
          </HStack>
          <Box w='100%'>
            <Text textStyle='footerText' align='center'>&copy;&emsp;ВШСДТ 2011-2021 Российское академическое онлайн
              образование.</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
