"use client";

import { Flex, Text, Link, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const breadcrumbs = [{ text: "Основные сведения" }];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Сведения об образовательной организации" />
      <Flex direction="column" padding="3rem 25%">
        <Text textStyle="h1" color="black" mt="6rem" align="center">
          Сведения об образовательной организации
        </Text>
        <Text textStyle="Medium32" color="black" mt="3rem" align="center">
          АНО ДПО Высшая школа стилистики, дизайна и технологий
        </Text>

        <Text textStyle="Regular30" align="center" mt="3rem">
          Основные сведения
        </Text>
        <Text textStyle="Bold16" align="center" mt="2rem">
          Дата создания организации
        </Text>
        <Text textStyle="Regular14" mt="2rem">
          Автономная некоммерческая организация дополнительного
          профессионального образования «Высшая школа стилистики, дизайна и
          технологий» зарегистрирована Управлением Федеральной налоговой службы
          по городу Москве 21 мая 2018 года.
        </Text>

        <Text textStyle="Bold16" align="center" mt="2.5rem">
          Учредители образовательной организации и орган управления
        </Text>
        <Text textStyle="Regular14" mt="2rem">
          Автономная некоммерческая организация дополнительного
          профессионального образования «Высшая школа стилистики, дизайна и
          технологий»
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          ИНН: 9717068337
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          КПП: 771701001
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          ОГРН: 1187700009056
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Юридический адрес: 129085, г. Москва, проспект Мира, ДОМ 101, стр.1,
          этаж 6 пом. I ком. 1, 2, 2а, 3
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Информация об учредителях:
          <Link
            as={NextLink}
            title="Выписка из ЕГРЮЛ"
            target="_blank"
            href="/vypiska-iz-egrul.pdf"
          >
             Выписка из ЕГРЮЛ
          </Link>
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Генеральный директор: Гулиенко Иван Анатольевич
        </Text>

        <Text textStyle="Bold16" align="center" mt="2.5rem">
          Информация об образовательной организации
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Адрес образовательной организации: 129085, г. Москва, проспект Мира,
          дом 101, стр.1, офис 600
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Контактные телефоны: 8 (800) 550-78-93, +7 (495) 221-89-35
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Адрес электронной почты:
          <Link
            as={NextLink}
            title="info@styleschool.ru"
            href="mailto:info@styleschool.ru"
          >
             info@styleschool.ru
          </Link>
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Официальный сайт:
          <Link
            as={NextLink}
            title="www.styleschool.ru"
            target="_blank"
            href="/"
          >
             www.styleschool.ru
          </Link>
        </Text>

        <Text textStyle="Bold16" align="center" mt="2.5rem">
          Режим и график работы
        </Text>
        <Text textStyle="Bold16" align="center" mt="2.5rem">
          Режим и график работы административно-управленческого персонала
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Понедельник-Пятница: время начала работы 10 ч. 00 мин., время
          окончания работы 19 ч. 00 мин.
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Выходные дни: суббота, воскресенье.
        </Text>

        <Text textStyle="Bold16" align="center" mt="2.5rem">
          Режим и график работы профессорско-преподавательского состава (далее –
          ППС)
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Смещение времени начала и окончания работы может быть обусловлено
          расписанием учебных занятий.
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Понедельник-суббота: время начала работы 9 ч. 30 мин., время окончания
          работы 22 ч. 00 мин.
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Выходной день: воскресенье
        </Text>
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
      <Footer />
    </>
  );
}
