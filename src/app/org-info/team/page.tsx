"use client";

import { Flex, Text, Link, useMediaQuery, Card, Stack, CardBody, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from 'next/image';
import Header from "@/components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Footer from "@/components/footer";

const breadcrumbs = [{ text: "Руководство и педагогиический состав" }];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Руководство и педагогиический состав" />
      <Flex direction="column" padding="3rem 25%">
        <Text textStyle="h1" color="black" mt="6rem" align="center">
          Сведения об образовательной организации
        </Text>
        <Text textStyle="Medium32" color="black" mt="3rem" align="center">
          АНО ДПО Высшая школа стилистики, дизайна и технологий
        </Text>

        <Text textStyle="Regular30" align="center" mt="3rem">
          Руководство и педагогиический состав
        </Text>

        <Text textStyle="Medium20" align="center" mt="3rem" mb="1rem">
          Руководство
        </Text>

        <Text textStyle="Regular14">
          Генеральный директор: Гулиенко Иван Анатольевич
        </Text>
        <Text textStyle="Regular14">
          Контактный телефон: +7 (915) 034-20-20
        </Text>
        <Text textStyle="Regular14">
          Адрес электронной почты:
          <Link
            as={NextLink}
            title="info@styleschool.ru"
            href="mailto:info@styleschool.ru"
          >
             info@styleschool.ru
          </Link>
        </Text>
        <Text textStyle="Regular14">
          Приемные часы: понедельник-пятница с 10:00 до 18:00
        </Text>

        <Text textStyle="Medium20" align="center" mt="3rem" mb="1rem">
          Преподавательский состав
        </Text>

        {/* <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image src="/teachers/shabalina.jpg" width='200' height="200" alt="logo" />


          заменить стэк на флекс,

          <Stack>
            <CardBody>
              <Heading size="sm">Кононец (Шабалина) Светлана Александровна</Heading>
              
              <Text textStyle="Regular14">
                Должность
              </Text>
              <Text textStyle="Regular14">
                Преподаватель ВШСДТ. Практикующий коуч-стилист, дизайнер одежды, автор блога Style Inside
              </Text>

              <Text textStyle="Regular14">
                Преподаваемые дисциплины
              </Text>
              <Text textStyle="Regular14">
                Индивидуальная стилистика образа (теория стилевых направлений, профессиональная колористика, ассоциативный подход в стиле, алгоритм создания индивидуальной формулы стиля)
              </Text>

              <Text textStyle="Regular14">
                Наименование направления подготовки и (или) специальности
              </Text>
              <Text textStyle="Regular14">
                Юридический факультет Орловский Государственный Университет, юриспруденция.
              </Text>


          
              <Text textStyle="Regular14">
                Данные о повышении квалификации и (или) профессиональной переподготовке (при наличии)
              </Text>
              <Text textStyle="Regular14">
                НОУ «Образование и карьера», модельер-конструктор одежды.
                «Имиджмейкер (шопер). Базовый курс», Высшая школа стилистики.
                «Стилист-имиджмейкер. Повышение квалификации», Высшая школа стилистики.
                «Стилистика образа», Высшая школа Стиля Наталии Туркенич.
                «Техника составления луков», Высшая школа Стиля Наталии Туркенич.
                «Создание образа в фэшн-фотографии 20в.», Высшая школа Стиля Наталии Туркенич.
                «Аrt-подготовка», студия Любови Михайловны Поповой.
                «Мода как искусство», студия Любови Михайловны Поповой.
                «Искусство комплекта», «Секреты от кутюр», Школа образных решений «IDEA-class».
                «Большие исторические стили», студия Любови Михайловны Поповой.
                «Коуч-стилист», Школа образных решений «IDEA-class»
              </Text>


            </CardBody>
          </Stack>
        </Card> */}

      </Flex>


      <Breadcrumb
        separator="•"
        textAlign="center"
        fontSize="15px"
        p={isMax959 ? "0rem 2rem" : "0rem 6rem"}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">ВШСДТ</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((crumb: any, i: number) => (
          <BreadcrumbItem key={i} isCurrentPage={breadcrumbs.length === i + 1}>
            <BreadcrumbLink href={crumb.href}>{crumb.text}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Footer></Footer>
    </>
  );
}
