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
    text: "Стипендии и иные виды материальной поддержки",
  },
];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Стипендии и иные виды материальной поддержки" />
      <Flex direction="column" padding="3rem 25%">
        <Text textStyle="h1" color="black" mt="6rem" align="center">
          Сведения об образовательной организации
        </Text>
        <Text textStyle="Medium32" color="black" mt="3rem" align="center">
          АНО ДПО Высшая школа стилистики, дизайна и технологий
        </Text>

        <Text textStyle="Regular30" color="black" mt="3rem" align="center">
        Стипендии и иные виды материальной поддержки
        </Text>

        <Text textStyle="Bold16" color="black" mt="3rem" align="center"  mb="1rem"> 
        Информация о наличии и об условиях предоставления обучающимся стипендий, мер социальной поддержки
        </Text>
        
        <Text textStyle="Regular14">
        Образовательная организация ВШСДТ не предоставляет обучающимся стипендии и иные меры социальной поддержки.
        </Text>

        <Text textStyle="Bold16" color="black" mt="3rem" align="center"  mb="1rem"> 
        Информация о наличии общежития, интерната, количестве жилых помещений в общежитии, интернате для иногородних обучающихся, формировании платы за проживание в общежитии
        </Text>
        <Text textStyle="Regular14">
        В АНО ДПО ВШСДТ общежития и интернаты отсутствуют.
        </Text>

        <Text textStyle="Bold16" color="black" mt="3rem" align="center"  mb="1rem"> 
        Информация о трудоустройстве выпускников
        </Text>

        <Text textStyle="Regular14">
        Система образования в АНО ДПО ВШСДТ не предусматривает обязательного трудоустройства выпускников.
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
