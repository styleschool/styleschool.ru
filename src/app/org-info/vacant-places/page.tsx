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
    text: "Вакантные места для приема (перевода)",
  },
];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Вакантные места для приема (перевода)" />
      <Flex direction="column" padding="3rem 25%">
        <Text textStyle="h1" color="black" mt="6rem" align="center">
          Сведения об образовательной организации
        </Text>
        <Text textStyle="Medium32" color="black" mt="3rem" align="center">
          АНО ДПО Высшая школа стилистики, дизайна и технологий
        </Text>

        <Text textStyle="Regular30" color="black" m="3rem" align="center">
          Вакантные места для приема (перевода)
        </Text>

        <Text textStyle="Medium16" align="center" mb="1rem">
        Данные о наборе:
        </Text>
        <Text textStyle="Regular14">
        Набор в группы и обучение ведется в течение всего календарного года. Информация о вакантных местах для приема (перевода) предоставляется по запросу для каждого конкретного случая по телефонам  
          <Link
            as={NextLink}
            title="+7 495 221-89-35"
            href="tel:+74952218935"
            paddingLeft="5px"
          >
            +7 495 221-89-35
          </Link>
          , 
          <Link
            as={NextLink}
            title="8 (800) 550-78-93"
            href="tel:88005507893"
            paddingLeft="5px"
          >
            8 (800) 550-78-93
          </Link>
           или электронной почте 
          <Link
            as={NextLink}
            title="info@styleschool.ru"
            href="mailto:info@styleschool.ru"
            paddingLeft="5px"
          >
             info@styleschool.ru
          </Link>
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
