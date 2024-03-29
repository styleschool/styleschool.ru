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
    text: "Платные образовательные услуги",
  },
];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Платные образовательные услуги" />
      <Flex direction="column" padding="3rem 25%">
        <Text textStyle="h1" color="black" mt="6rem" align="center">
          Сведения об образовательной организации
        </Text>
        <Text textStyle="Medium32" color="black" mt="3rem" align="center">
          АНО ДПО Высшая школа стилистики, дизайна и технологий
        </Text>

        <Text textStyle="Regular30" color="black" mt="3rem" align="center">
        Платные образовательные услуги
        </Text>

        <Text textStyle="Regular14" mt="2rem">
        Образцы договоров об оказании платных услуг:
        </Text>
        <UnorderedList spacing="1rem" paddingTop="1rem">
          <ListItem>
            <Link
              as={NextLink}
              title="Образец договора об оказании платных образовательных услуг физическому лицу"
              target="_blank"
              href="/documents/obrazets-dogovora-ob-okazanii-platnyh-obrazovateljnyh-uslug-fizlitsu.pdf"
            >
              Образец договора об оказании платных образовательных услуг физическому лицу
            </Link>
          </ListItem>

          <ListItem>
            <Link
              as={NextLink}
              title="Образец договора об оказании платных образовательных услуг юридическому лицу"
              target="_blank"
              href="/documents/obrazets-dogovora-ob-okazanii-platnyh-obrazovateljnyh-uslug-urlitsu.pdf"
            >
              Образец договора об оказании платных образовательных услуг юридическому лицу
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
