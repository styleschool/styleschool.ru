"use client";

import {
  Box,
  Flex,
  HStack,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  PiTelegramLogoThin,
  PiWhatsappLogoThin,
  PiYoutubeLogoThin,
} from "react-icons/pi";
import { SlSocialVkontakte } from "react-icons/sl";
import { SocialButton } from "./buttons/social-button";
import { StyledLink, HoveredStyledLink } from "./footer-link";
import { IconProvider } from "./icon-provider";
import { SocialIcon } from "./buttons/social-icon";
import NextLink from "next/link";

const TextTitle = ({
  text,
  textStyles = "footerTitle",
  textProps,
}: {
  text: string;
  textStyles?: string;
  textProps?: any;
}) => {
  return (
    <Text textStyle={textStyles} {...textProps}>
      {text}
    </Text>
  );
};

export default function Footer(props: any) {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  const [isMax628] = useMediaQuery("(max-width: 628px)");
  return (
    <Flex
      align="center"
      justify="center"
      bg="#F9F9F9"
      p={isMax959 ? "4rem 1rem" : "4rem 6rem"}
    >
      <Flex direction="column" w="100%">
        <Flex
          direction={isMax628 ? "column" : "row"}
          justify="space-between"
          alignContent="center"
          flexWrap="wrap"
          mb="0.5rem"
          sx={{
            "& > *:not(:last-child)": {
              mb: isMax628 ? "1rem" : 0,
            },
          }}
        >
          <Box pb="1rem">
            <TextTitle
              text="НАПРАВЛЕНИЯ ОБУЧЕНИЯ"
              textProps={{ as: "h2", mb: "0.3rem" }}
            />
            <Flex direction="column">
              {/* <StyledLink href="#" text="Репутационные технологии" />
              <StyledLink href="#" text="Искусственный интеллект и нейросети" />
              <StyledLink href="#" text="Имидж и стиль" />
              <StyledLink href="#" text="Дизайн среды" />
              <StyledLink href="#" text="Управление продуктом" /> */}

              <Text> Репутационные технологии </Text>
              <Text> Искусственный интеллект и нейросети </Text>
              <Text> Имидж и стиль </Text>
              <Text> Дизайн среды </Text>
              <Text> Управление продуктом </Text>
            </Flex>
          </Box>
          <Box>
            <TextTitle
              text="АДРЕС МОСКВА"
              textProps={{ as: "h2", mb: "0.3rem" }}
            />
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
            <TextTitle
              text="ВРЕМЯ РАБОТЫ"
              textProps={{ as: "h2", mb: "0.3rem" }}
            />

            <Text textStyle="footerText">{props.filial || "Москва"}</Text>
            <Text textStyle="footerText">Пон.-пят.</Text>
            <Text textStyle="footerText">с 10:00 до 19:00</Text>
            <Text textStyle="footerText">Суб. с 11:00 до 14:00</Text>
          </Box>
          <Flex direction="column" align="flex-start" justify="flex-start">
            <TextTitle text="КОНТАКТЫ" textProps={{ as: "h2", mb: "0.3rem" }} />

            <SocialButton
              link="https://t.me/styleschoolru"
              title="Telegram"
              h={2}
              leftIcon={<IconProvider icon={<PiTelegramLogoThin />} />}
            />

            <SocialButton
              link="https://chat.whatsapp.com/LQpG7XjdGSBAiaXNgcoE54"
              title="WhatsApp"
              h={2}
              leftIcon={<IconProvider icon={<PiWhatsappLogoThin />} />}
            />
            {props.phones ? (
              <Text textStyle="footerText">{props.phones}</Text>
            ) : (
              <>
                <Text textStyle="footerText">
                  <Link
                    as={NextLink}
                    title="+7 (495) 221-89-35"
                    href="tel:+74952218935"
                    paddingLeft="5px"
                  >
                    +7 (495) 221-89-35
                  </Link>
                </Text>
              </>
            )}
            <Box>
              <StyledLink href="/contacts" text="Все контакты" />
            </Box>
          </Flex>
          {/* <Box>
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
                    href="https://old.styleschool.ru/network-educational-programs" text="Сетевые программы" />
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
                    href="https://old.styleschool.ru/corporate" text="Разработка курсов" />
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
                    href="https://old.styleschool.ru/vacancy" text='Резюме & Вакансии' />
                </ListItem>
              </UnorderedList>
          </Box> */}
        </Flex>
        <Flex direction="column">
          <Box w="100%" h="0.05rem" bg="black" mb="0.1rem" />
          <Stack direction="row" justify="flex-end" align="center" w="100%">
            <Link
              as={NextLink}
              title="Telegram"
              href={"https://t.me/styleschoolru"}
            >
              <SocialIcon
                icon={
                  <IconProvider size="1.2rem" icon={<PiTelegramLogoThin />} />
                }
                ariaLabel="Telegram"
              />
            </Link>
            <Link
              as={NextLink}
              title="Vkontakte"
              href={"https://vk.com/stileschoolru"}
            >
              <SocialIcon
                icon={
                  <IconProvider size="1.2rem" icon={<SlSocialVkontakte />} />
                }
                ariaLabel="Vkontakte"
              />
            </Link>
            <Link
              as={NextLink}
              title="Youtube"
              href={"https://www.youtube.com/@styleschool_ru"}
            >
              <SocialIcon
                icon={
                  <IconProvider size="1.2rem" icon={<PiYoutubeLogoThin />} />
                }
                ariaLabel="Youtube"
              />
            </Link>
          </Stack>
          <Flex
            direction={isMax628 ? "column" : "row"}
            justify="space-between"
            alignSelf="flex-start"
            mb="2rem"
          >
            <Flex
              direction="column"
              justify="start"
              alignSelf="center"
              w="100%"
              mb="1rem"
            >
              <Text textStyle="footerText">
                Автономная некоммерческая организация
              </Text>
              <Text textStyle="footerText">
                Дополнительного профессионального образования
              </Text>
              <Text textStyle="footerText" mb="1rem">
                «Высшая школа стилистики, дизайна и технологий»
              </Text>

              <Flex
                direction="column"
                justify="start"
                alignSelf="center"
                w="100%"
              >
                <StyledLink
                  textStyles="footerLink"
                  textProps={{
                    sx: {
                      textDecoration: "underline",
                      _hover: {
                        textDecoration: "none",
                        color: "rgb(87,143,163)",
                      },
                    },
                  }}
                  href="/org-info"
                  text="Сведения об образовательной организации"
                />
                <StyledLink
                  textStyles="footerLink"
                  textProps={{
                    sx: {
                      textDecoration: "underline",
                      _hover: {
                        textDecoration: "none",
                        color: "rgb(87,143,163)",
                      },
                    },
                  }}
                  href="/user-info"
                  text="Информация для пользователей"
                />
                <StyledLink
                  textStyles="footerLink"
                  textProps={{
                    sx: {
                      textDecoration: "underline",
                      _hover: {
                        textDecoration: "none",
                        color: "rgb(87,143,163)",
                      },
                    },
                  }}
                  href="https://old.styleschool.ru/archive"
                  text="Архив курсов"
                />
              </Flex>
            </Flex>
            <Flex
              direction="column"
              justify="start"
              alignSelf="center"
              w="100%"
            >
              <Text color="rgb(187, 144, 41)" textStyle="footerTitle">
                Партнёры:
              </Text>
              <UnorderedList
                color="rgb(187, 144, 41)"
                sx={{
                  "& > li": {
                    lineHeight: isMax628 ? "100%" : "150%",
                    height: "auto",
                  },
                }}
              >
                <ListItem>
                  <TextTitle
                    text="Национальный исследовательский Томский государственный университет"
                    textProps={{
                      sx: { textTransform: "none", fontWeight: "regular" },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <TextTitle
                    text="Инновационно-образовательный комплекс «Техноград»"
                    textProps={{
                      sx: { textTransform: "none", fontWeight: "regular" },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <TextTitle
                    text="Московский физико-технический институт"
                    textProps={{
                      sx: { textTransform: "none", fontWeight: "regular" },
                    }}
                  />
                </ListItem>
                <ListItem>
                  <TextTitle
                    text="Московский художественно-промышленный институт"
                    textProps={{
                      sx: { textTransform: "none", fontWeight: "regular" },
                    }}
                  />
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <HStack mb="1rem" spacing="0.4rem" sx={{ flexWrap: "wrap" }}>
            <Text sx={{ textTransform: "uppercase", color: "black" }}>
              ТЕГИ
            </Text>
            <HoveredStyledLink
              href="/education?filter=аналитик"
              text="#аналитик"
            />
            <HoveredStyledLink
              href="/education?filter=бесплатные"
              text="#бесплатные"
            />
            <HoveredStyledLink href="/education?filter=бизнес" text="#бизнес" />
            <HoveredStyledLink href="/education?filter=бренд" text="#бренд" />
            <HoveredStyledLink href="/education?filter=город" text="#город" />
            <HoveredStyledLink
              href="/education?filter=графический"
              text="#графический"
            />
            <HoveredStyledLink href="/education?filter=дизайн" text="#дизайн" />
            <HoveredStyledLink
              href="/education?filter=дизайнер"
              text="#дизайнер"
            />
            <HoveredStyledLink href="/education?filter=дом" text="#дом" />
            <HoveredStyledLink href="/education?filter=имидж" text="#имидж" />
            <HoveredStyledLink
              href="/education?filter=имиджмейкер"
              text="#имиджмейкер"
            />
            <HoveredStyledLink
              href="/education?filter=индустрия"
              text="#индустрия"
            />
            <HoveredStyledLink
              href="/education?filter=интеллект"
              text="#интеллект"
            />
            <HoveredStyledLink
              href="/education?filter=интерьер"
              text="#интерьер"
            />
            <HoveredStyledLink
              href="/education?filter=контент"
              text="#контент"
            />
            <HoveredStyledLink href="/education?filter=личный" text="#личный" />
            <HoveredStyledLink
              href="/education?filter=менеджер"
              text="#менеджер"
            />
            <HoveredStyledLink href="/education?filter=мода" text="#мода" />
            <HoveredStyledLink href="/education?filter=модные" text="#модные" />
            <HoveredStyledLink
              href="/education?filter=нейросети"
              text="#нейросети"
            />
            <HoveredStyledLink href="/education?filter=одежда" text="#одежда" />
            <HoveredStyledLink
              href="/education?filter=продукт"
              text="#продукт"
            />
            <HoveredStyledLink
              href="/education?filter=профессия"
              text="#профессия"
            />
            <HoveredStyledLink
              href="/education?filter=репутация"
              text="#репутация"
            />
            <HoveredStyledLink href="/education?filter=среда" text="#среда" />
            <HoveredStyledLink
              href="/education?filter=стилист"
              text="#стилист"
            />
            <HoveredStyledLink href="/education?filter=стиль" text="#стиль" />
            <HoveredStyledLink
              href="/education?filter=управление"
              text="#управление"
            />
          </HStack>
          <Box w="100%">
            <Text textStyle="footerText" align="center">
              &copy;&emsp;ВШСДТ 2011-2024 Российское академическое онлайн
              образование.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
