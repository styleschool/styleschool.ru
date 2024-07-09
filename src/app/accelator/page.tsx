'use client';

import { Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, Link, useMediaQuery } from '@chakra-ui/react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import NextLink from "next/link";


const breadcrumbs = [
  {
    text: "Акселератор",
  },
];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (

    <>
    <Header pageName="Акселератор" />
    <Flex direction="column" padding="3rem 25%">
      <Text textStyle="h1" color="black" mt="6rem" align="center">
      Информация для пользователей
      </Text>
      <Text textStyle="Medium32" color="black" mt="3rem" align="center">
        АНО ДПО Высшая школа стилистики, дизайна и технологий
      </Text>

      <Text
        textStyle="Regular30"
        color="black"
        mt="3rem"
        mb="2rem"
        align="center"
      >
        Акселератор
      </Text>


      <Text textStyle="Regular14" color="black" mb="1rem">
          <Link
            as={NextLink}
            paddingLeft="5px"
            href="accelator/fashion_brand_designer"
          >
            Акселератор бренда
          </Link>
      </Text>
      <Text textStyle="Regular14" color="black" mb="1rem">
          <Link
            as={NextLink}
            paddingLeft="5px"
            href="accelator/brand_in_fashion_industry"
          >
            Инкубатор моды
          </Link>
      </Text>
      
      <Text textStyle="Regular14" color="black" mb="1rem">
          <Link
            as={NextLink}
            paddingLeft="5px"
            href="accelator/career_track"
          >
            Сообщество «Кайрос»
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
  )
}
