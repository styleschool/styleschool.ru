"use client";

import {
  Flex,
  Text,
  Link,
  useMediaQuery,
  SimpleGrid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "@/components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Footer from "@/components/footer";

const breadcrumbs = [{ text: "Образовательные стандарты" }];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <Flex direction="column">
      <Header pageName="Образовательные стандарты" />

      <Text textStyle="h1" color="black" mt="6rem" align="center">
        Сведения об образовательной организации
      </Text>
      <Text textStyle="Medium32" color="black" mt="3rem" align="center">
        АНО ДПО Высшая школа стилистики, дизайна и технологий
      </Text>

      <Text textStyle="Bold20" color="black" mt="3rem" align="center">
        Образовательные стандарты
      </Text>
      
      <Flex p="2rem 25%">
        <Text textStyle="Regular14">
          В соответствии с Федеральным законом от 29 декабря 2012 г. N 273-ФЗ «Об образовании в Российской Федерации» (далее — Федеральный закон N 273-ФЗ) содержание дополнительных профессиональных программ, разрабатываемых АНО ДПО ВШСДТ учитывает профессиональные стандарты, квалификационные требования, указанные в квалификационных справочниках по соответствующим должностям, профессиям и специальностям (часть 9 статьи 76 Федерального закона N 273-ФЗ). При этом программы профессиональной переподготовки разработаны на основании установленных квалификационных требований, профессиональных стандартов и требований соответствующих ФГОС среднего профессионального и (или) высшего образования к результатам освоения образовательных программ (часть 10 статьи 76 Федерального закона N 273-ФЗ).
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
    </Flex>
  );
}
