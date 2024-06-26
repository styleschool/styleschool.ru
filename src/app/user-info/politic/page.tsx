"use client";

import { Flex, Text, Link, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "@/components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Footer from "@/components/footer";

const breadcrumbs = [
  {
    text: "Политика конфиденциальности",
  },
];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Политика конфиденциальности" />
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
          Политика конфиденциальности
        </Text>

        <Text textStyle="Bold16" color="black" mb="1rem">
          Политика конфиденциальности и безопасности: согласие на обработку
          персональных данных (далее «Согласие на обработку персональных
          данных»)
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Дата вступления в действие: 21/05/2018
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Нажимая на кнопку «Оставить заявку» или «Задать вопрос», заполняя поля
          с контактной информацией в соответствующих формах, Вы подтверждаете
          свое согласие на обработку Ваших персональных данных в соответствии с
          Федеральным законом Российской Федерации от 27 июля 2006 г. N 152-ФЗ
          «О персональных данных» и в соответствии с «Согласием на обработку
          персональных данных», при этом даете Ваше согласие на их обработку
          своей волей и в своем интересе.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Любая Ваша персональная информация, полученная на нашем сайте,
          остается Вашей собственностью. Тем не менее, отправляя свои
          персональные данные, вы доверяете нам право использовать вашу
          персональную информацию для любого законного использования, включая,
          без ограничений: совершение заказа продукта или услуги, который вы
          делаете на нашем сайте, показ рекламных предложений средствами
          телемаркетинга, почтового маркетинга и др. рекламы, для проверки,
          подписки, отписки, улучшения контента и целей получения обратной
          связи.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Регистрируясь на нашем сайте http://styleschool.ru, Вы принимаете
          Согласие на обработку персональных данных (далее – Согласие).
          Принятием (акцептом) оферты настоящего Согласия является регистрация
          на Сайте в момент заполнения Вами одного из или всех полей на
          страницах сайта, а именно: «Имя», «телефон», «e-mail», с последующим
          нажатием кнопки «Отправить».
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Вы даете свое согласие АНО ДПО «Высшая школа стилистики, дизайна и
          технологий», зарегистрированного по юр. адресу 129085, г. Москва,
          проспект Мира, ДОМ 101, стр.1, этаж 6 пом. I ком. 1, 2, 2а, 3, на
          обработку своих персональных данных со следующими условиями:
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Согласие дается на обработку персональных данных, как без
          использования средств автоматизации, так и с их использованием.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Согласие дается на обработку следующих персональных данных:
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.1 Персональные данные
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.1.1 Фамилия, имя, отчество;
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.1.2 Номера контактных телефонов;
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.1.3 Адреса электронной почты.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Персональные данные не относятся к общедоступным.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Целью обработки персональных данных является – предоставление доступа
          к контенту и функционалу сайта http://styleschool.ru.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Основанием для обработки персональных данных является Ст. 24
          Конституции Российской Федерации; ст.6 Федерального закона №152-ФЗ «О
          персональных данных»; Устав АНО ДПО «Высшая школа стилистики, дизайна
          и технологий», иные федеральные законы и нормативно правовые акты.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          В ходе обработки с персональными данными будут совершены следующие
          действия: сбор, запись, систематизация, накопление, хранение,
          уточнение (обновление, изменение), извлечение, использование, передача
          (распространение, предоставление, доступ), обезличивание,
          блокирование, удаление, уничтожение.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Передача персональных данных третьим лицам осуществляется на основании
          установленного законодательства Российской Федерации, договора с
          участием Пользователя или с согласия Пользователя. Передача
          персональных данных осуществляется третьим лицам на основании
          договоров о предоставлении услуг Пользователям, передавшим свои
          персональные данные для обработки.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Персональные данные обрабатываются до ликвидации Сайта или до отзыва
          Пользователем персональных данных. Хранение персональных данных
          осуществляется согласно Федеральному закону №125-ФЗ «Об архивном деле
          в Российской Федерации» и иным нормативно правовым актам в области
          архивного дела и архивного хранения.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Согласие может быть отозвано Пользователем, путем направления
          письменного заявления на электронный адрес 
          <Link
            as={NextLink}
            title="info@styleschool.ru"
            paddingLeft="5px"
            href="mailto:info@styleschool.ru"
          >
            info@styleschool.ru
          </Link>
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          В случае отзыва Пользователем согласия на обработку персональных
          данных АНО ДПО «Высшая школа стилистики, дизайна и технологий» вправе
          продолжить обработку персональных данных без согласия Пользователя при
          наличии оснований, указанных в пунктах 2 – 11 части 1 статьи 6, части
          2 статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ «О
          персональных данных» от 27.07.2006 г.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Настоящее согласие действует все время до момента прекращения
          обработки персональных данных, указанных в п.8 и п.9 данного Согласия.
        </Text>
        <Text textStyle="Bold16" color="black" mb="1rem">
          Безопасность.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Пожалуйста, помните, никакая передача данных через интернет, мобильное
          устройство или через беспроводное устройство не могут гарантировать
          100%-ную безопасность. Вы контролируете те данные, которые Вы
          сообщаете при использовании интернет сервисов, и, в конечном счете, Вы
          несете ответственность за сохранение в тайне Вашей личности, паролей
          и/или любой другой личной информации, находящейся в Вашем распоряжении
          в процессе пользования интернет сервисами. Всегда будьте осторожны и
          ответственны в отношении Вашей личной информации. Мы не несем
          ответственности за, и не можем контролировать использование другими
          лицами любой информации, которую Вы предоставляете им, и Вы должны
          соблюдать осторожность в выборе личной информации, которую Вы
          передаете третьим лицам.
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
