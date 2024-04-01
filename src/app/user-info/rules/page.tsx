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
    text: "Правила обучения",
  },
];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Правила обучения" />
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
          Правила обучения
        </Text>

        <Text textStyle="Regular14" color="black">
          Настоящие Правила обучения (далее Правила) устанавливают порядок
          оказания АНО ДПО «Высшая школа стилистики, дизайна и технологий»
          (далее Исполнитель) образовательных услуг слушателям, заключившим
          Договора на поулчение таких услуг.
        </Text>

        <Text textStyle="Regular14" color="black" mt="1rem">
          Главные правила:
        </Text>

        <Text textStyle="Regular14" color="black">
          в процессе занятий, особенно в процессе on-line занятий, обеспечивать
          тишину (отключать мобильные и др.) уважать труд окружающих и соблюдать
          чистоту в помещениях, где проводятся занятия учится активно и
          позитивно, ведь Вам открываются новые знания и возможности
        </Text>

        <Text textStyle="Regular14" color="black" mt="1rem">
          А так же:
        </Text>

        <Text textStyle="Regular14" color="black" mt="1rem">
          Образовательные услуги оказываются после того, как Слушатель
          ознакомился с настоящими Правилами. Образовательные услуги оказываются
          в соответствии с методиками и стандартами Исполнителя. Образовательные
          услуги оказываются как по месту нахождения Исполнителя, так и в
          местах, арендуемых Исполнителем и/или связанных с тематикой проводимых
          занятий, в рабочие дни, с 10 до 19 часов, либо в иное время и в ином
          месте, в соответствии с расписанием.
        </Text>

        <Text textStyle="Regular14" color="black" mt="1rem">
          Исполнитель вправе воздержаться от оказания Слушателю образовательных
          услуг: при просрочке оплаты обучения; если Слушатель находится в
          состоянии алкогольного, токсического или наркотического опьянения,
          нарушает общественный порядок в помещениях, занимаемых Школой;
          намеревается производить фотосъемку, видео и/или аудио записи без
          согласия Исполнителя. В указанных случаях Исполнитель обязан
          проинформировать Слушателя о причине отказа в незамедлительном
          оказании образовательных услуг, или согласовать иной срок их оказания.
        </Text>

        <Text textStyle="Regular14" color="black">
          Слушатель вправе консультироваться с работниками Исполнителя при
          выборе образовательных услуг и выбрать те, которые, по его мнению, ему
          необходимы в первоочередном порядке, в том числе менять программу
          обучения с соответствующей доплатой.
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
