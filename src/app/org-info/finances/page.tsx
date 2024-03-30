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
    text: "Финансово-хозяйственная деятельность",
  },
];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Финансово-хозяйственная деятельность" />
      <Flex direction="column" padding="3rem 25%">
        <Text textStyle="h1" color="black" mt="6rem" align="center">
          Сведения об образовательной организации
        </Text>
        <Text textStyle="Medium32" color="black" mt="3rem" align="center">
          АНО ДПО Высшая школа стилистики, дизайна и технологий
        </Text>

        <Text textStyle="Regular30" color="black" mt="3rem" align="center">
          Финансово-хозяйственная деятельность
        </Text>

        <Text
          textStyle="Bold16"
          color="black"
          mt="3rem"
          align="center"
          mb="1rem"
        >
          Информация о поступлении финансовых и материальных средств и об их
          расходовании по итогам финансового года
        </Text>

        <Link
          as={NextLink}
          title="Отчет о поступлении и расходовании финансовых средств за период с 01.01.2018 по 31.12.2018"
          target="_blank"
          href="/documents/buhgaltersky-otchet-po-itogam-2018-goda.pdf"
          textStyle="Regular14"
        >
          Отчет о поступлении и расходовании финансовых средств за период с
          01.01.2018 по 31.12.2018
        </Link>

        <Link
          as={NextLink}
          title="Отчет о поступлении и расходовании финансовых средств за период с 01.01.2019 по 31.12.2019"
          target="_blank"
          href="/documents/buhgaltersky-otchet-po-itogam-2019-goda.pdf"
          textStyle="Regular14"
        >
          Отчет о поступлении и расходовании финансовых средств за период с
          01.01.2019 по 31.12.2019
        </Link>

        <Link
          as={NextLink}
          title="Отчет о поступлении и расходовании финансовых средств за период с 01.01.2020 по 31.12.2020"
          target="_blank"
          href="/documents/buhgaltersky-otchet-po-itogam-2020-goda.pdf"
          textStyle="Regular14"
        >
          Отчет о поступлении и расходовании финансовых средств за период с
          01.01.2020 по 31.12.2020
        </Link>

        <Text textStyle="Regular14" mt="1rem">
          Информация об объеме образовательной деятельности, финансовое
          обеспечение которой осуществляется за счет бюджетных ассигнований
          федерального бюджета, бюджетов субъектов Российской Федерации, местных
          бюджетов, по договорам об образовании за счет средств физических и
          (или) юридических лиц представлена в файле
          <Link
            as={NextLink}
            title="Информация об объеме финансирования образовательной деятельности"
            target="_blank"
            paddingLeft="5px"
            href="/documents/info-ob-objeme-finansirovaniya-obrazovateljnoy-deyateljnosti.xls"
          >
            Информация об объеме финансирования образовательной деятельности
          </Link>
          .
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
      <Footer></Footer>
    </>
  );
}
