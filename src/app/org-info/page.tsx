"use client";

import {
  Flex,
  Text,
  Box,
  Link,
  useMediaQuery,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const breadcrumbs = [{ text: "Сведения об образовательной организации" }];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <Flex direction="column">
      <Header pageName="Сведения об образовательной организации" />
      <Text textStyle="h1" color="black" mt="6rem" align="center">
        Сведения об образовательной организации
      </Text>
      <Text textStyle="Medium32" color="black" mt="3rem" align="center">
        АНО ДПО Высшая школа стилистики, дизайна и технологий
      </Text>

      <UnorderedList
        p="3rem 20%"
        spacing="1rem"
      >
        <ListItem>
          <Link
            as={NextLink}
            title="Основные сведения"
            href="https://old.styleschool.ru/osnovnye-svedeniya"
          >
            <Text textStyle="Regular16">
              Основные сведения
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Структура и органы управления образовательной организацией"
            href="https://old.styleschool.ru/struktura-i-organy-upravleniya"
          >
            <Text textStyle="Regular16">
              Структура и органы управления образовательной организацией
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Документы"
            href="https://old.styleschool.ru/dokumenty"
          >
            <Text textStyle="Regular16">
            Документы
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Образовательные программы"
            href="https://old.styleschool.ru/obrazovateljnye-programmy"
          >
            <Text textStyle="Regular16">
              Образовательные программы
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Образовательные программы"
            href="https://old.styleschool.ru/obrazovateljnye-standarty"
          >
            <Text textStyle="Regular16">
            Образовательные стандарты
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Руководство. Педагогический состав"
            href="https://old.styleschool.ru/rukovodstvo-i-pedagogicheskiy-sostav"
          >
            <Text textStyle="Regular16">
            Руководство. Педагогический состав
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Материально-техническое обеспечение и оснащенность образовательного процесса"
            href="https://old.styleschool.ru/materialjno-tehnicheskoe-osnaschenie"
          >
            <Text textStyle="Regular16">
              Материально-техническое обеспечение и оснащенность образовательного процесса
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Стипендии и иные виды материальной поддержки"
            href="https://old.styleschool.ru/stipendii"
          >
            <Text textStyle="Regular16">
              Стипендии и иные виды материальной поддержки
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Платные и образовательные услуги"
            href="https://old.styleschool.ru/platnye-obrazovateljnye-uslugi"
          >
            <Text textStyle="Regular16">
              Платные и образовательные услуги
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Финансово-хозяйственная деятельность"
            href="https://old.styleschool.ru/finansovo-hozyaystvennaya-deyateljnostj"
          >
            <Text textStyle="Regular16">
              Финансово-хозяйственная деятельность
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            as={NextLink}
            title="Вакантные места для приема (перевода)"
            href="https://old.styleschool.ru/vakantnye-mesta-dlya-priema"
          >
            <Text textStyle="Regular16">
              Вакантные места для приема (перевода)
            </Text>
          </Link>
        </ListItem>


      </UnorderedList>

      <Footer />
    </Flex>
  );
}
