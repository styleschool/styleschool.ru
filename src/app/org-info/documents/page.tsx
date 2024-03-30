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

const breadcrumbs = [{ text: "Документы" }];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <Flex direction="column">
      <Header pageName="Документы" />

      <Text textStyle="h1" color="black" mt="6rem" align="center">
        Сведения об образовательной организации
      </Text>
      <Text textStyle="Medium32" color="black" mt="3rem" align="center">
        АНО ДПО Высшая школа стилистики, дизайна и технологий
      </Text>

      <Text textStyle="Bold16" color="black" mt="3rem" align="center">
        Документы
      </Text>

      <UnorderedList p="3rem 25%" spacing="1rem">
        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/ustav-obrazovateljnoy-organizatsii-ANO-VShS.pdf"
          >
            <Text textStyle="Regular14">Устав образовательной организации</Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/licenziya.pdf"
          >
            <Text textStyle="Regular14">
              Лицензия на осуществление образовательной деятельности (с
              приложением)
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/svideteljstvo-o-gosudarstvennoy-registratsii-ano-vshs.pdf"
          >
            <Text textStyle="Regular14">
              Свидетельство о государственной регистрации некоммерческой
              организации
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/publichnaya-oferta.docx"
          >
            <Text textStyle="Regular14">
              Публичная оферта на оказание информационно-консультационных услуг
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>

      <Text textStyle="Bold16" color="black" mt="3rem" align="center">
        Локальные акты
      </Text>

      <UnorderedList p="3rem 25%" spacing="1rem">
        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-o-vedenii-lichnyh-del-obuchauschihsya.pdf"
          >
            <Text textStyle="Regular14">
              Положение о ведении личных дел обучающихся в АНО ДПО «Высшая школа
              стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-o-vedenii-lichnyh-del-rabotnikov.pdf"
          >
            <Text textStyle="Regular14">
              Положение о ведении личных дел работников АНО ДПО «Высшая школа
              стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-o-vnutrenney-sisteme-otsenki-kachestva-programm-dpo.pdf"
          >
            <Text textStyle="Regular14">
              Положение о внутренней системе оценки качества программ
              дополнительного профессионального образования и результатов их
              реализации в АНО ДПО «Высшая школа стилистики, дизайна и
              технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-o-komissii-po-uregulirovaniyu-sporov.pdf"
          >
            <Text textStyle="Regular14">
              Положение о комиссии по урегулированию споров между участниками
              образовательного процесса в АНО ДПО «Высшая школа стилистики,
              дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-o-poryadke-obucheniya-po-individualjnomu-uchebnomu-planu.pdf"
          >
            <Text textStyle="Regular14">
              Положение о порядке обучения по индивидуальному учебному плану в
              АНО ДПО «Высшая школа стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/pravila-vnutrennego-rasporyadka-obuchayuschihsya.pdf"
          >
            <Text textStyle="Regular14">
              Правила внутреннего распорядка обучающихся в АНО ДПО «Высшая школа
              стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-po-obrabotke-personaljnyh-dannyh-obuchayuschihsya.pdf"
          >
            <Text textStyle="Regular14">
              Положение по обработке персональных данных обучающихся и иных лиц
              в АНО ДПО «Высшая школа стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-po-obrabotke-personaljnyh-dannyh-rabotnikov.pdf"
          >
            <Text textStyle="Regular14">
              Положение по обработке персональных данных работников АНО ДПО
              «Высшая школа стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-ob-oplate-truda-i-premirovanii-rabotnikov.pdf"
          >
            <Text textStyle="Regular14">
              Положение об оплате труда и премировании работников АНО ДПО
              «Высшая школа стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-ob-organizatsii-platnyh-obrazovateljnyh-uslug.pdf"
          >
            <Text textStyle="Regular14">
              Положение об организации платных образовательных услуг в АНО ДПО
              «Высшая школа стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/poryadok-opredeleniya-i-ucheta-uchebnoy-nagruzki-pedagogicheskih-rabotnikov.pdf"
          >
            <Text textStyle="Regular14">
              Порядок определения и учета учебной нагрузки педагогических
              работников АНО ДПО «Высшая школа стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-o-poryadke-tekuschego-kontrolya-uspevaemosti-i-attestatsii.pdf"
          >
            <Text textStyle="Regular14">
              Положение о порядке текущего контроля успеваемости, промежуточной
              и итоговой аттестации обучающихся в АНО ДПО «Высшая школа
              стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/pravila-priema-perevoda-otchisleniya-i-vosstanovleniya-obuchayuschihsya.pdf"
          >
            <Text textStyle="Regular14">
              Правила приема, перевода, отчисления и восстановления обучающихся
              в АНО ДПО «Высшая школа стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-o-privlechenii-storonnih-spetsialistov.pdf"
          >
            <Text textStyle="Regular14">
              Положение о привлечении сторонних специалистов для ведения
              педагогической и научно-педагогической деятельности в АНО ДПО
              «Высшая школа стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/polozhenie-o-professionaljnoy-etike-pedagogicheskih-rabotnikov.pdf"
          >
            <Text textStyle="Regular14">
              Положение о профессиональной этике педагогических работников АНО
              ДПО «Высшая школа стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/pricecurrent_prof.pdf"
          >
            <Text textStyle="Regular14">
              Прейскурант на обучение по программам профессиональной
              переподготовки и повышения квалификации в АНО ДПО «Высшая школа
              стилистики, дизайна и технологий»
            </Text>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/pricecurrent_courses.pdf"
          >
            <Text textStyle="Regular14">
              Прейскурант на обучение по программам краткосрочных курсов и
              мастер-классов в АНО ДПО «Высшая школа стилистики, дизайна и
              технологий»
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>

      <Text textStyle="Bold16" color="black" mt="3rem" align="center">
        Иная информация
      </Text>
  
      <UnorderedList p="3rem 25%" spacing="1rem">
      <Text textStyle="Regular14" color="black">
        Образцы документов об обучении, повышении квалификации, переподготовке:
      </Text>
        <ListItem>
          <Link
            as={NextLink}
            target="_blank"
            title="Основные сведения"
            href="/documents/diploms.pdf"
          >
            <Text textStyle="Regular14">
              Дипломы. Сертефикаты. Удостоверение
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>

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
