"use client";

import {
  Flex,
  Text,
  useMediaQuery,
  SimpleGrid,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { IconProvider } from "../../components/icon-provider";
import { SocialIcon } from '../../components/buttons/social-icon';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ScrollIcon } from "@/components/socnet-icons";
import { PiScroll } from "react-icons/pi";
import { PiSealWarningFill } from "react-icons/pi";
import { MdHandshake } from "react-icons/md";
import { PiShieldCheckFill } from "react-icons/pi";
import { StyledLink } from '@/components/footer-link';

const breadcrumbs = [{ text: "Информация для пользователей" }];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <Flex direction="column" alignItems="center">
      <Header pageName="Информация для пользователей" />
      <Text textStyle="h1" color="black" pt="6rem" align="center">
        Информация для пользователей
      </Text>

      <SimpleGrid spacing="2rem" columns={isMax959 ? 1 : 3} width="70%" pt="4rem">
        <Card>
          <Flex direction="column" alignItems="center" padding="1rem">
            <IconProvider size='6rem' icon={<PiScroll />} title='Scroll'/>
            <CardHeader>
              <Heading size='sm'> Правила обучения</Heading>
            </CardHeader>
            <CardBody>
              <Text align="justify">Настоящие Правила обучения (далее Правила) устанавливают порядок оказания Автономной некоммерческой организацией дополнительного профессионального образования «Высшая школа стилистики, дизайна и технологий» (далее Исполнитель) образовательных услуг.</Text>
            </CardBody>
            <CardFooter>
              <Link as={NextLink} title="Образование" href="https://old.styleschool.ru/information/rules">
                <Button leftIcon={<IconProvider size='2rem' icon={<PiSealWarningFill/>} color="primary" title='Warning'/>} color="primary" variant='solid'>
                  <Text textStyle="Regular16" color="primary">Подробнее</Text>
                </Button>
              </Link>
            </CardFooter>
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" alignItems="center" padding="1rem">
            <IconProvider size='6rem' icon={<MdHandshake />} title='Scroll'/>
            <CardHeader>
              <Heading size='sm' textAlign="center"> Пользовательское соглашение</Heading>
            </CardHeader>
            <CardBody>
              <Text align="justify">Пользовательское соглашение является офертой Договора. Предложение Товаров и Услуг на портале АНО ДПО ВШСДТ на условиях, указанных в предложении, и условиях настоящего Соглашения, является публичной офертой.</Text>
            </CardBody>
            <CardFooter>
              <Link as={NextLink} title="Образование" href="https://old.styleschool.ru/information/agree">
                <Button leftIcon={<IconProvider size='2rem' icon={<PiSealWarningFill/>} color="primary" title='Warning'/>} color="primary" variant='solid'>
                  <Text textStyle="Regular16" color="primary">
                    Подробнее
                  </Text>
                </Button>
              </Link>
            </CardFooter>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" alignItems="center" padding="1rem">
            <IconProvider size='6rem' icon={<PiShieldCheckFill />} title='Scroll'/>
            <CardHeader>
              <Heading size='sm' textAlign="center"> Политика конфиденциальности</Heading>
            </CardHeader>
            <CardBody>
              <Text align="justify">Политика конфиденциальности и безопасности: согласие на обработку персональных данных (далее «Согласие на обработку персональных данных») Дата вступления в действие: 21/05/2018</Text>
            </CardBody>
            <CardFooter>
              <Link as={NextLink} title="Образование" href="https://old.styleschool.ru/information/politic">
                <Button leftIcon={<IconProvider size='2rem' icon={<PiSealWarningFill/>} color="primary" title='Warning'/>} color="primary" variant='solid'>
                  <Text textStyle="Regular16" color="primary">
                    Подробнее
                  </Text>
                </Button>
              </Link>
            </CardFooter>
          </Flex>
        </Card>
      </SimpleGrid>

      <Flex direction="column" width={isMax959 ?  "100%" : "750px"} padding="2rem">
        <Text textStyle="Medium22" pb="1rem">Реквизиты</Text>
        <Text pb="1rem">Автономная некоммерческая организация дополнительного профессионального образования «ВЫСШАЯ ШКОЛА СТИЛИСТИКИ, ДИЗАЙНА И ТЕХНОЛОГИЙ»</Text>
        <Text>ИНН 9717068337</Text>
        <Text>КПП 771701001</Text>
        <Text>ОГРН 1187700009056</Text>
        <Text pt="1rem" pb="1rem"><b>Адрес для корреспонденции:</b> 129085, г. Москва, проспект Мира, д. 101, стр.1, а/я 2-18</Text>
        <Text><b>Банковские реквизиты</b></Text>
        <Flex direction="row">
          <Text width="240px">Расчетный счет:</Text>
          <Text>40703810300000707477</Text>
        </Flex>
        <Flex direction="row">
          <Text width="240px">Наименование банка:</Text>
          <Text>АО «ТИНЬКОФФ БАНК»</Text>
        </Flex>
        <Flex direction="row">
          <Text width="240px">Реквизиты банка:</Text>
          <Flex direction="column">
            <Text>К/с 30101810145250000974</Text>
            <Text>БИК 044525974</Text>
            <Text>ИНН/КПП 7710140679</Text>
            <Text>ОКПО 29290881</Text>
          </Flex>
        </Flex>
        <Flex direction="row">
          <Text width="240px">Адрес банка:</Text>
          <Flex direction="column">
            <Text>123060, Москва, 1-й Волоколамский</Text>
            <Text>проезд, д. 10, стр. 1</Text>
          </Flex>
        </Flex>
      </Flex>
      <StyledLink textStyles="footerLink"
                  textProps={{
                    sx: {
                      textDecoration: 'none',
                      _hover: {
                        textDecoration: 'underline',
                        color: 'rgb(87,143,163)'
                      }
                    }
                  }} href="https://old.styleschool.ru/archive" text="Посмотреть архив курсов" 
                  p="2rem"
                />
      <Footer />
    </Flex>
  );
}
