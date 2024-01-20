'use client'
import React from "react";

import { Grid, GridItem, useMediaQuery, Box, Text, Flex, UnorderedList, ListItem, HStack } from '@chakra-ui/react'
import Paragraph from "./paragraph";
import List from "./list";
import SocNetIcons from "./socnet-icons";
import { Telegram, Whatsapp } from "./socnet-icons";
import { StyledLink } from './footer-link';


const font = "Alegreya Sans";

const TextTitle = ({text}:{text: string}) => {
  return <Text textStyle="footerTitle">{text}</Text>
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
    <Flex align="center" justify="center" bg="#F9F9F9" p={isMax959 ? "4rem 1rem" : "4rem 6rem"}>
      <Flex direction="column" w="100%">
        <Flex direction="row" justify="space-between" mb="2rem">
          <Box>
            <TextTitle text="НАПРАВЛЕНИЯ ОБУЧЕНИЯ" />
            <Flex direction="column">
              <StyledLink href="#">Репутационные технологии</StyledLink>
              <StyledLink href="#">Искусственный интеллект и нейросети</StyledLink>
              <StyledLink href="#">Имидж и стиль</StyledLink>
              <StyledLink href="#">Дизайн среды</StyledLink>
              <StyledLink href="#">Управление продуктом</StyledLink>
            </Flex>
          </Box>
          <Box>
            <TextTitle text="АДРЕС МОСКВА" />
              <Text textStyle="footerText">
                г. Москва, Проспект Мира,
                <br />
                дом&nbsp;101, стр.&nbsp;1, офис&nbsp;210
              </Text>
              <Text textStyle="footerText">
                Для почтовых отправлений:
                <br />
                а/я&nbsp;218
              </Text>
          </Box>
          <Box>
            <TextTitle text="ВРЕМЯ РАБОТЫ" />
              
            <Text textStyle="footerText">
              {props.filial || "Москва"}
            </Text>
            <Text textStyle="footerText">
              Пон.-пят.
            </Text>
            <Text textStyle="footerText">
              с 10:00 до 19:00
            </Text>
            <Text textStyle="footerText">
              Суб. с 11:00 до 14:00
            </Text>
          </Box>
          <Box>
            <TextTitle text="КОНТАКТЫ" />
            <Flex 
              direction='row' 
              align='center' 
              justify='center'
              sx={{
                '& > *:not(:last-child)': {
                  mr: '0.5rem'
                }
              }}
            >
              <a href="https://t.me/styleschoolru" target="_blank"><Telegram /></a>
              <a href="https://t.me/styleschoolru" target="_blank"><Text textStyle="footerText">Telegram</Text></a>
            </Flex>
            <Flex 
              direction='row' 
              align='center' 
              justify='center'
              sx={{
                '& > *:not(:last-child)': {
                  mr: '0.5rem'
                }
              }}
            >
            <a href="https://chat.whatsapp.com/LQpG7XjdGSBAiaXNgcoE54" target="_blank"><Whatsapp /></a>
            <a href="https://chat.whatsapp.com/LQpG7XjdGSBAiaXNgcoE54" target="_blank"><Text textStyle="footerText">Whatsapp</Text></a>
            </Flex>
            {props.phones ? (
              <Text textStyle="footerText">
                {props.phones}
              </Text>
            ) : (
              <>
                <Text textStyle="footerText">
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
            <TextTitle text="ПРОГРАММЫ РАЗВИТИЯ" />
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
                    href="/partners-pro">Открытое образование</StyledLink>
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
                    href="/network-educational-programs">Сотрудничество</StyledLink>
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
                    href="/corporate">Сетевые программы</StyledLink>
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
                    href="/vacancy">Разработка курсов</StyledLink>
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
                    href="/vacancy">Резюме & Вакансии</StyledLink>
                </ListItem>
              </UnorderedList>
          </Box>
        </Flex>
        <Flex direction="column">
          <Box w="100%" h="0.05rem" bg="black" mb="1rem" />
          <SocNetIcons />
          <Flex direction="row" justify="space-between" alignSelf="center" mb="2rem">
            <Flex direction="column" justify="start" alignSelf="center" w="100%">
              <Text textStyle="footerText">Автономная некоммерческая организация</Text>
              <Text textStyle="footerText">Дополнительного профессионального образования</Text>
              <Text textStyle="footerText">«Высшая школа стилистики, дизайна и технологий»</Text>
              <Box sx={{ height: "1rem" }} />
              <StyledLink textStyles="footerLink"
                textProps={{
                  sx: {
                    textDecoration: 'underline',
                    _hover: {
                      textDecoration: 'none',
                      color: 'rgb(87,143,163)'
                    }
                  }
                }} href="/information-about-educational-organization">Сведения об образовательной организации</StyledLink>
                <StyledLink textStyles="footerLink"
                  textProps={{
                    sx: {
                      textDecoration: 'underline',
                      _hover: {
                        textDecoration: 'none',
                        color: 'rgb(87,143,163)'
                      }
                    }
                  }}
                  href="/information">Информация для пользователей
                </StyledLink>
                <StyledLink textStyles="footerLink"
                  textProps={{
                    sx: {
                      textDecoration: 'underline',
                      _hover: {
                        textDecoration: 'none',
                        color: 'rgb(87,143,163)'
                      }
                    }
                  }}
                  href="https://old.styleschool.ru/archive">Архив курсов
              </StyledLink>
              </Flex>
            <Flex direction="column" justify="start" alignSelf="center" w="100%">
              <Text color="rgb(187, 144, 41)">
                Партнёры:
              </Text>
              <UnorderedList color="rgb(187, 144, 41)">
                <ListItem>
                Национальный исследовательский Томский государственный университет
                </ListItem>
                <ListItem>
                Инновационно-образовательный комплекс «Техноград»
                </ListItem>
                <ListItem>
                Московский физико-технический институт
                </ListItem>
                <ListItem>
                Московский художественно-промышленный институт
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <HStack mb="1rem" spacing="1rem"  sx={{flexWrap: 'wrap'}}>
            <Text sx={{textTransform: 'uppercase', color: 'black'}}>ТЕГИ</Text>
            <HoveredStyledLink text="#аналитик" />
            <HoveredStyledLink text="#бесплатные" />
            <HoveredStyledLink text="#бизнес" />
            <HoveredStyledLink text="#бренд" />
            <HoveredStyledLink text="#город" />
            <HoveredStyledLink text="#графический" />
            <HoveredStyledLink text="#дизайн" />
            <HoveredStyledLink text="#дизайнер" />
            <HoveredStyledLink text="#дом" />
            <HoveredStyledLink text="#имидж" />
            <HoveredStyledLink text="#имиджмейкер" />
            <HoveredStyledLink text="#индустрия" />
            <HoveredStyledLink text="#интеллект" />
            <HoveredStyledLink text="#интерьер" />
            <HoveredStyledLink text="#контент" />
            <HoveredStyledLink text="#личный" />
            <HoveredStyledLink text="#менеджер" />
            <HoveredStyledLink text="#мода" />
            <HoveredStyledLink text="#модные" />
            <HoveredStyledLink text="#нейросети" />
            <HoveredStyledLink text="#одежда" />
            <HoveredStyledLink text="#продукт" />
            <HoveredStyledLink text="#профессия" />
            <HoveredStyledLink text="#репутация" />
            <HoveredStyledLink text="#среда" />
            <HoveredStyledLink text="#стилист" />
            <HoveredStyledLink text="#стиль" />
            <HoveredStyledLink text="#управление" />
          </HStack>
          <Box w="100%">
            <Text textStyle="footerText" align="center">&copy;&emsp;ВШСДТ 2011-2021 Российское академическое онлайн
              образование.</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
