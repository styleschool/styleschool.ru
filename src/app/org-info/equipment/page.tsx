"use client";

import {
  Flex,
  Text,
  Link,
  useMediaQuery,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "@/components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Footer from "@/components/footer";

const breadcrumbs = [
  {
    text: "Материально-техническое обеспечение и оснащенность образовательного процесса",
  },
];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Материально-техническое обеспечение и оснащенность образовательного процесса" />
      <Flex direction="column" padding="3rem 25%">
        <Text textStyle="h1" color="black" mt="6rem" align="center">
          Сведения об образовательной организации
        </Text>
        <Text textStyle="Medium32" color="black" mt="3rem" align="center">
          АНО ДПО Высшая школа стилистики, дизайна и технологий
        </Text>

        <Text textStyle="Regular30" color="black" mt="3rem" align="center">
          Материально-техническое обеспечение и оснащенность образовательного
          процесса
        </Text>
        <Text textStyle="Regular28" color="black" mt="3rem" align="center">
          Информация о наличии оборудованных учебных кабинетов
        </Text>

        <Text textStyle="Regular14" mt="1rem">
          С точки зрения материально-технического обеспечения образовательная
          организация «ВШСДТ» обладает современными, эстетично оформленными
          аудиториями, учебными кабинетами и иными помещениями. Все кабинеты
          оснащены необходимым оборудованием, мебелью, техническими средствами и
          информационными ресурсами, функционирование которых обеспечивает
          сотрудникам и учащимся комфортные условия для работы и образовательной
          деятельности. Более подробное описание оборудованных кабинетов
          представлено в
          <Link
            as={NextLink}
            title="Справке о материально-техническом обеспечении образовательной деятельности по образовательным программам"
            target="_blank"
            paddingLeft="5px"
            href="/documents/spravka-o-materialjno-tehnicheskom-obespechenii.pdf"
          >
            Справке о материально-техническом обеспечении образовательной
            деятельности по образовательным программам
          </Link>
          .
        </Text>

        <Text textStyle="Regular28" color="black" mt="3rem" align="center">
          Информация о наличии объектов для проведения практических занятий
        </Text>

        <Text textStyle="Regular14" mt="1rem">
          Для проведения практических занятий образовательная организация
          использует учебные кабинеты оборудованные компьютерами,
          мультимедийными средствами, рабочими местами слушателей и
          преподавателя.
        </Text>

        <Text textStyle="Regular28" color="black" mt="3rem" align="center">
          Информация о средствах обучения
        </Text>

        <Text textStyle="Regular14" mt="1rem">
          В образовательной организации используются следующие средства
          обучения:
        </Text>
        <UnorderedList spacing="1rem" mt="1rem">
          <ListItem>
            <Text textStyle="Regular14">
              Аудиовизуальные (проекционные системы)
            </Text>
          </ListItem>

          <ListItem>
            <Text textStyle="Regular14">Видеоматериалы</Text>
          </ListItem>

          <ListItem>
            <Text textStyle="Regular14">
              Печатные (учебно-методические пособия, раздаточный материал)
            </Text>
          </ListItem>

          <ListItem>
            <Text textStyle="Regular14">Демонстрационные материалы</Text>
          </ListItem>

          <ListItem>
            <Text textStyle="Regular14">Учебная техника</Text>
          </ListItem>

          <ListItem>
            <Text textStyle="Regular14">Электронные ресурсы</Text>
          </ListItem>

          <ListItem>
            <Text textStyle="Regular14">Учебные кабинеты</Text>
          </ListItem>
        </UnorderedList>

        <Text textStyle="Regular28" color="black" mt="3rem" align="center">
          Информация о библиотеках
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          Для учащихся и вольных слушателей образовательная организация
          предоставляет доступ к электронным образовательным ресурсам, в том
          числе к учебным лекционным материалам.
        </Text>
        <Text textStyle="Regular28" color="black" mt="3rem" align="center">
          Информация об объектах спорта
        </Text>
        <Text textStyle="Regular14" mt="1rem">
          В образовательной организации «ВШСДТ» объекты спорта отсутствуют.
        </Text>

        <Text textStyle="Regular28" color="black" mt="3rem" align="center">
          Информация о средствах воспитания
        </Text>

        <Text textStyle="Regular14" mt="1rem">
          В ходе образовательной деятельности средства воспитания не
          предусмотрены.
        </Text>

        <Text textStyle="Regular28" color="black" mt="3rem" align="center">
          Информация об условиях питания и охраны здоровья обучающихся
        </Text>

        <Text textStyle="Regular14" mt="1rem">
          В шаговой доступности от здания образовательной организации находятся
          учреждения общественного питания, супермаркет, в самом здании, на
          первом этаже расположено кафе, на территории образовательной
          организации размещен кулер с водой. Все помещения образовательной
          организации ВШСДТ соответствуют требованиям санитарной и пожарной
          безопасности (Санитарно-Эпидемиологическое заключение,
          <Link
            as={NextLink}
            title="Заключение о пожарной безопасности"
            paddingLeft="5px"
            target="_blank"
            href="/documents/zakluchenie-o-pozharnoy-bezopasnosti.pdf"
          >
            Заключение о пожарной безопасности
          </Link>
          ).
        </Text>

        <Text textStyle="Regular28" color="black" mt="3rem" align="center">
          Информация о доступе к информационным системам и
          информационно-телекоммуникационным сетям
        </Text>

        <Text textStyle="Regular14" mt="1rem">
          Образовательная организация оснащена компьютерами объединенными между
          собой в локальную сеть, которые также имеют доступ в глобальную
          информационно-телекоммуникационную сеть «Интернет» по оптоволоконному
          кабелю.
        </Text>

        <Text textStyle="Regular28" color="black" mt="3rem" align="center">
          Информация об электронных образовательных ресурсах, к которым
          обеспечивается доступ обучающихся
        </Text>

        <Text textStyle="Regular14" mt="1rem">
          Электронные образовательные ресурсы, к которым обеспечен доступ
          обучающихся:
        </Text>
        <UnorderedList spacing="1rem" paddingTop="1rem">
          <ListItem>
              <Link
              as={NextLink}
              title="edu.styleschool.ru/login/index.php"
              target="_blank"
              href="https://edu.styleschool.ru/login/index.php"
            >
              edu.styleschool.ru/login/index.php
            </Link>
          </ListItem>

          <ListItem>
              <Link
              as={NextLink}
              title="billing.styleschool.ru/login"
              target="_blank"
              href="https://billing.styleschool.ru/login"
            >
              billing.styleschool.ru/login
            </Link>
          </ListItem>
        </UnorderedList>
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
