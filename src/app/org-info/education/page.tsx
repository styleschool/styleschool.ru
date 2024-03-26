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

const breadcrumbs = [{ text: "Образование" }];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <Flex direction="column">
      <Header pageName="Образование" />

      <Text textStyle="h1" color="black" mt="6rem" align="center">
        Сведения об образовательной организации
      </Text>
      <Text textStyle="Medium32" color="black" mt="3rem" align="center">
        АНО ДПО Высшая школа стилистики, дизайна и технологий
      </Text>

      <Text textStyle="Bold20" color="black" mt="3rem" align="center">
        Образование
      </Text>
      <Flex direction="column" p="2rem 25%">
        <Text textStyle="Medium16" color="black" mt="1rem" align="center">
          Информация об образовательных программах с указанием учебных предметов, курсов, дисциплин (модулей), практики, предусмотренных соответствующей образовательной программой
        </Text>
        <Text textStyle="Bold16" color="black" mt="3rem" align="center">
          Программы профессиональной переподготовки:
        </Text>

        <UnorderedList spacing="1rem">
        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/programma-prof-podgotovki-image-consulting&fashion-styling.pdf"
          >
            <Text textStyle="Regular14">
              Имидж-консалтинг и fashion-styling
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/programma-prof-podgotovki-design-i-dekorirovanie-interjera.pdf"
          >
            <Text textStyle="Regular14">
              Дизайн и декорирование интерьеров
            </Text>
          </Link>
        </ListItem>

        </UnorderedList>

        <Text textStyle="Bold16" color="black" mt="2rem" mb="1rem" align="center">
          Информация о численности обучающихся по реализуемым образовательным программам
        </Text>

        <UnorderedList spacing="1rem">
          <ListItem>
            <Text textStyle="Regular14">
              за счет бюджетных ассигнований федерального бюджета – 0%
            </Text>
          </ListItem>

          <ListItem>
            <Text textStyle="Regular14">
              за счет бюджетов субъектов Российской Федерации – 0%
            </Text>
          </ListItem>

          <ListItem>
            <Text textStyle="Regular14">
              за счет местных бюджетов – 0%
            </Text>
          </ListItem>

          <ListItem>
            <Text textStyle="Regular14">
              за счет бюджетных ассигнований федерального бюджета – 0%
            </Text>
          </ListItem>

        </UnorderedList>

        <Text textStyle="Bold16" color="black" mt="3rem" align="center"  mb="1rem"> 
          Информация о языках образования
        </Text>

        <Text textStyle="Regular14">
          В процесс образовательной деятельности используется русский язык
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
