"use client";

import { Flex, Text, Link, useMediaQuery, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "@/components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Footer from "@/components/footer";

const breadcrumbs = [{ text: "Структура и органы управления образовательной организацией" }];

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
          Структура и органы управления образовательной организацией
        </Text>

        <table style={{ marginTop: "2rem", textAlign: "left" }}>
          <thead>
            <tr>
              <th style={{ padding: "0.25rem", verticalAlign: "top" }}>
                Наименование органа управления / структурного подразделения
              </th>
              <th style={{ padding: "0.25rem", verticalAlign: "top" }}>
                ФИО руководителя структурного подразделения
              </th>
              <th style={{ padding: "0.25rem", verticalAlign: "top" }}>
                Должность руководителя структурного подразделения
              </th>
              <th style={{ padding: "0.25rem", verticalAlign: "top" }}>
                Адрес местонахождения структурного подразделения
              </th>
              <th style={{ padding: "0.25rem", verticalAlign: "top" }}>
                Адрес официального сайта структурного подразделения
              </th>
              <th style={{ padding: "0.25rem", verticalAlign: "top" }}>
                Адреса электронной почты структурного подразделения
              </th>
              <th style={{ padding: "0.25rem", verticalAlign: "top" }}>
                Положение об органе управления / о структурном подразделении
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={7}>
                <Text my="1rem">
                  Органы управления образовательной организации:
                </Text>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "0.25rem", verticalAlign: "top" }}>
                Генеральный директор АНО ДПО ВШСДТ
              </td>
              <td style={{ padding: "0.25rem", verticalAlign: "top" }}>
                Гулиенко Иван Анатольевич
              </td>
              <td style={{ padding: "0.25rem", verticalAlign: "top" }}>
                Генеральный директор АНО ДПО ВШСДТ
              </td>
              <td style={{ padding: "0.25rem", verticalAlign: "top" }}>
                129085, г. Москва, проспект Мира, дом 101, стр.1, офис 600
              </td>
              <td style={{ padding: "0.25rem", verticalAlign: "top" }}>
                <Link
                  as={NextLink}
                  title="styleschool.ru"
                  target="_blank"
                  href="/"
                >
                  styleschool.ru
                </Link>
              </td>
              <td style={{ padding: "0.25rem", verticalAlign: "top" }}>
                <Link
                  as={NextLink}
                  title="info@styleschool.ru"
                  target="_blank"
                  href="mailto:info@styleschool.ru"
                >
                  info@styleschool.ru
                </Link>
              </td>
              <td style={{ padding: "0.25rem", verticalAlign: "top" }}>
                <Link
                  as={NextLink}
                  title="Решение №1 о создании образовательной организации"
                  target="_blank"
                  href="/reshenie-1-o-sozdanii-obrazovateljnoy-organizatsii.pdf"
                >
                  Решение №1 о создании образовательной организации
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
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
