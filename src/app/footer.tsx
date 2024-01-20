'use client'

import { Box, Flex, HStack, ListItem, Stack, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react';
import { PiTelegramLogoThin, PiWhatsappLogoThin, PiYoutubeLogoThin } from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
import { SocialButton } from "./buttons/social-button";
import { StyledLink } from './footer-link';
import { IconProvider } from "./icon-provider";
import { SocialIcon } from './buttons/social-icon';


const font = "Alegreya Sans";

const TextTitle = ({text, textStyles = 'footerTitle', textProps }:{text: string; textStyles?: string; textProps?: any}) => {
  return <Text textStyle={textStyles} {...textProps}>{text}</Text>
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
    href="/network-educational-programs" text={text} />)
}

export default function Footer(props: any) {
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  const [isMax628] = useMediaQuery('(max-width: 628px)')
  return (
    <Flex align="center" justify="center" bg="#F9F9F9" p={isMax959 ? "4rem 1rem" : "4rem 6rem"}>
      <Flex direction="column" w="100%">
        <Flex 
          direction={isMax628 ?'column' : "row"} 
          justify="space-between"
          mb="0.5rem" 
          sx={{
            '& > *:not(:last-child)': {
              mb: isMax628 ? '1rem' : 0
            }
          }}
        >
          <Box>
            <TextTitle text="НАПРАВЛЕНИЯ ОБУЧЕНИЯ" textProps={{ as: 'h2', mb: '0.3rem'}} />
            <Flex direction="column">
              <StyledLink href="#" text="Репутационные технологии" />
              <StyledLink href="#" text="Искусственный интеллект и нейросети" />
              <StyledLink href="#" text="Имидж и стиль" />
              <StyledLink href="#" text="Дизайн среды" />
              <StyledLink href="#" text="Управление продуктом" />
            </Flex>
          </Box>
          <Box>
            <TextTitle text="АДРЕС МОСКВА" textProps={{ as: 'h2', mb: '0.3rem'}} />
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
            <TextTitle text="ВРЕМЯ РАБОТЫ" textProps={{ as: 'h2', mb: '0.3rem'}} />
              
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
          <Flex direction="column" align="flex-start" justify="flex-start">
            <TextTitle text="КОНТАКТЫ" textProps={{ as: 'h2', mb: '0.3rem'}} />
            
            <SocialButton 
              // @ts-ignore
              leftIcon={
                <IconProvider 
                  icon={<PiTelegramLogoThin />} 
                />
              }
            />
          
            <SocialButton 
            //@ts-ignore
              href='https://chat.whatsapp.com/LQpG7XjdGSBAiaXNgcoE54' 
              title='WhatsApp'
              leftIcon={
                <IconProvider 
                  icon={<PiWhatsappLogoThin />} 

                />
              }
            />
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
              <StyledLink href="/contacts" text="Все контакты" />
            </Box>
          </Flex>
          <Box>
            <TextTitle text="ПРОГРАММЫ РАЗВИТИЯ" textProps={{ as: 'h2', mb: '0.3rem'}} />
              <UnorderedList
                sx={{
                  '& > li': {
                    lineHeight: '100%',
                    height: 'auto',
                  }
                }}
              >
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
                    href="/partners-pro" text='Открытое образование' />
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
                    href="/network-educational-programs" text="Сотрудничество" />
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
                    href="/corporate" text="Сетевые программы" />
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
                    href="/vacancy" text="Разработка курсов" />
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
                    href="/vacancy" text='Резюме & Вакансии' />
                </ListItem>
              </UnorderedList>
          </Box>
        </Flex>
        <Flex direction="column">
          <Box w="100%" h="0.05rem" bg="black" mb="0.1rem" />
          <Stack direction="row" justify="flex-end" align="center" w="100%">
            <SocialIcon icon={<IconProvider size='1.2rem' icon={<PiTelegramLogoThin />} />} ariaLabel='Telegram' />
            <SocialIcon icon={<IconProvider size='1.2rem' icon={<SlSocialVkontakte />} />} ariaLabel='Vkontakte' />
            <SocialIcon icon={<IconProvider size='1.2rem' icon={<PiYoutubeLogoThin />} />} ariaLabel='Youtube' />
          </Stack>
          <Flex direction={isMax628 ? "column" : "row"} justify="space-between" alignSelf='flex-start' mb="2rem">
            <Flex direction="column" justify="start" alignSelf="center" w="100%" mb='1rem'>
              <Text textStyle="footerText">Автономная некоммерческая организация</Text>
              <Text textStyle="footerText">Дополнительного профессионального образования</Text>
              <Text textStyle="footerText" mb='1rem'>«Высшая школа стилистики, дизайна и технологий»</Text>
              
              <Flex direction="column" justify="start" alignSelf="center" w="100%">
                <StyledLink textStyles="footerLink"
                  textProps={{
                    sx: {
                      textDecoration: 'underline',
                      _hover: {
                        textDecoration: 'none',
                        color: 'rgb(87,143,163)'
                      }
                    }
                  }} href="/information-about-educational-organization" text="Сведения об образовательной организации" 
                />
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
                    href="/information" text="Информация для пользователей" 
                  />
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
                    href="https://old.styleschool.ru/archive" text="Архив курсов" 
                  />
              </Flex>
            </Flex>
            <Flex direction="column" justify="start" alignSelf="center" w="100%">
              <Text color="rgb(187, 144, 41)" textStyle="footerTitle">
                Партнёры:
              </Text>
              <UnorderedList color="rgb(187, 144, 41)"
                sx={{
                  '& > li': {
                    lineHeight: isMax628 ? '100%' : '150%',
                    height: 'auto',
                  }
                }}
              >
                <ListItem>
                  <TextTitle text='Национальный исследовательский Томский государственный университет' textProps={{sx: {textTransform: 'none', fontWeight: 'regular'}}} />
                </ListItem>
                <ListItem>
                  <TextTitle text='Инновационно-образовательный комплекс «Техноград»' textProps={{sx: {textTransform: 'none', fontWeight: 'regular'}}} />
                </ListItem>
                <ListItem>
                  <TextTitle text='Московский физико-технический институт' textProps={{sx: {textTransform: 'none', fontWeight: 'regular'}}} />
                </ListItem>
                <ListItem>
                  <TextTitle text='Московский художественно-промышленный институт' textProps={{sx: {textTransform: 'none', fontWeight: 'regular'}}} />
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <HStack mb="1rem" spacing="0.4rem"  sx={{flexWrap: 'wrap'}}>
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
