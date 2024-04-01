"use client";

import { Flex, Text, Link, useMediaQuery } from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "@/components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Footer from "@/components/footer";

const breadcrumbs = [
  {
    text: "Оферта Договора",
  },
];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  return (
    <>
      <Header pageName="Оферта Договора" />
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
          Оферта Договора
        </Text>

        <Text textStyle="Bold16" color="black" mb="1rem">
          ПУБЛИЧНАЯ ОФЕРТА ДОГОВОРА НА ОКАЗАНИЕ ОБРАЗОВАТЕЛЬНЫХ УСЛУГ НА
          КРАТКОСРОЧНЫХ КУРСАХ г. Москва
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          Настоящая публичная оферта Договора является официальным предложением
          Автономной некоммерческой организации дополнительного
          профессионального образования «Высшая школа стилистики, дизайна и
          технологий» (сокращенно АНО ДПО «Высшая школа стилистики, дизайна и
          технологий»), ИНН 9717068337 / КПП 771701001 / ОГРН 1187700009056 (в
          дальнейшем «Исполнитель») для любого лица (далее – «Заказчик»),
          которое примет настоящее предложение, на указанных ниже условиях.
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          В соответствии с пунктом 2 статьи 437 Гражданского Кодекса Российской
          Федерации (ГК РФ), в случае принятия изложенных ниже условий и оплаты
          Услуг юридическое или физическое лицо, производящее Акцепт этой
          Оферты, становится Заказчиком (в соответствии с пунктом 3 статьи 438
          ГК РФ Акцепт Оферты равносилен заключению Договора на условиях,
          изложенных в Оферте).
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          Моментом полного и безоговорочного принятия Заказчиком предложения
          Исполнителя заключить Договор (акцептом оферты) считается факт
          заполнения Заявки на Сайте и предоплаты Заказчиком услуг Исполнителя.
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          Исполнитель вправе в одностороннем порядке изменить условия настоящей
          оферты Договора. Изменения вступают в силу на следующий день после
          публикации на сайте:
          <Link
            as={NextLink}
            title="https://styleschool.ru/"
            target="_blank"
            paddingLeft="5px"
            href="https://styleschool.ru/"
          >
            https://styleschool.ru/
          </Link>
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          Текст настоящего оферты Договора (далее по тексту – «Договор»,
          «Оферта») расположен по адресу:
          https://styleschool.ru/user-info/agreement
        </Text>

        <Text textStyle="Bold16" color="black" mb="1rem">
          Термины и определения
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          1.1. Для целей настоящего Договора приведенные ниже термины и
          определения используются в следующем значении:
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          «Оферта» — настоящий документ, Публичная Оферта продажи доступа к
          обучающему программному обеспечению на онлайн-курсе.
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          «Акцепт Оферты» — полное и безоговорочное принятие Заказчиком условий
          настоящей Оферты, методами, предусмотренными в п. 3, данной Оферты.
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          «Договор Оферты» — договор между Исполнителем и Заказчиком на
          предоставление обучающих услуг, который заключается посредством
          Акцепта Оферты.
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          «Заказчик» — любое дееспособное физическое или юридическое лицо,
          достигшее 18 лет и изъявившее желание получить услуги по
          дистанционному обучению от Исполнителя и акцептовавшее Оферту на ниже
          описанных условиях.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          «Исполнитель» — зарегистрированная в соответствии с действующим
          законодательством АНО ДПО «Высшая школа стилистики, дизайна и
          технологий», действующая на основании лицензии от 26 ноября 2018 года
          № 039759, выданной бессрочно Департаментом образования города Москвы,
          осуществляющая обучение Заказчика по выбранным Заказчиком
          образовательным программам или продуктам на Интернет-портале
          Исполнителя.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          «Интернет-портал» (далее Интернет-портал или Сайт) - совокупность
          страниц, расположенных в сети Интернет по адресу (интернет домену)
          http://www.styleschool.ru/ и на поддоменах к указанному интернет
          домену.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          «Способ оказания обучающих услуг» в рамках настоящего Договора —
          дистанционное обучение на краткосрочных курсах через Интернет-портал
          на условиях настоящего Договора. Местом оказания услуг для вопросов
          налогообложения является фактическое место нахождение Исполнителя.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          «Личный кабинет» — совокупность защищенных страниц на Интернет-портале
          Исполнителя, создаваемых при регистрации Заказчика, посредством
          которого осуществляется взаимодействие Сторон. Доступ к Личному
          кабинету осуществляется Заказчиком посредством ввода логина и пароля,
          предоставленных Исполнителем Заказчику на адрес электронной почты
          после завершения регистрации.
        </Text>

        <Text textStyle="Regular14" color="black" mb="1rem">
          «Краткосрочные курсы» – предлагаемые Исполнителем программы в формате
          информационно-консультационных услуг и/или онлайн обучения, которые
          включают в себя доступ к обучающим материалам, в том числе
          онлайн-семинарам/вебинарам/видео урокам и иным образовательным
          форматам, в т.ч. с применением дистанционных образовательных
          технологий.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          «Профессиональное обучение» — образовательные услуги, реализуемые на
          основании программам профессиональной переподготовки и повышения
          квалификации по утвержденным Исполнителем рабочим программам и
          учебно-тематическим планам в форматах: очно, очно-заочно, заочно, очно
          с применением дистанционных образовательных технологий и элементами
          электронного обучения, очно-заочно с применением дистанционных
          образовательных технологий и элементами электронного обучения, заочно
          с применением дистанционных образовательных технологий и элементами
          электронного обучения.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          «Видеокурс» – аудиовизуальное произведение, информация о котором
          размещена на Интернет-портале Исполнителя. Приобретение Видеокурса —
          получение Заказчиком доступа для просмотра Видеокурса с использованием
          технологий для обмена данными в сети Интернет и приобретение
          Заказчиком прав на просмотр Видеокурса. на период 6 месяцев
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          «Документ об образовании» – сертификат, свидетельство об обучении,
          диплом о профессиональной переподготовке, удостоверение о повышении
          квалификации, в том числе в электронном формате
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          1.2. В настоящей Оферте могут быть использованы термины, не
          определенные в п. 1.1. В этом случае толкование такого термина
          производится в соответствии с текстом настоящей Оферты. В случае
          отсутствия однозначного толкования термина в тексте Оферты следует
          руководствоваться толкованием термина: в первую очередь – на сайте
          Исполнителя, во вторую очередь – общепринятым значением
        </Text>

        <Text textStyle="Bold16" color="black" mb="1rem">
          Предмет Договора
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.1. Предметом настоящего Договора является возмездное предоставление
          заказчику образовательных услуг в форматах профессиональнрго обучения,
          краткосрочных курсов или видео курсов.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.2. Темы, программы, учебные материалы, стоимость, сроки оказания
          услуг, форма и порядок регистрации размещены на интернет-порталах:
          https://styleschool.ru/, https://imagemakerpro.ru/
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.3. Услуга предоставляется заказчику в объеме, соответствующем сумме
          произведенной им предоплаты.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.4. В случаях, когда Заказчик заказывает услуги в коммерческих целях,
          связанных с осуществлением Заказчиком предпринимательской
          деятельности, а не для личных, семейных, домашних и иных нужд, не
          связанных с осуществлением предпринимательской деятельности, к
          отношениям сторон не применяется законодательство о защите прав
          потребителей.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.5. Информация и иные материалы, в том числе на электронных
          носителях, аудио и видеозаписи, предоставленные Заказчику Исполнителем
          в рамках оказания Услуг по настоящему Договору, предоставляются
          исключительно для личного использования Заказчиком. В случае, если
          Заказчик допустит распространение указанной информации, он несет
          ответственность перед Исполнителем за причиненные фактом
          распространения информации убытки в виде штрафа, размер которого
          указан в п. 9.2.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.6. Исполнитель имеет право изменять объем оказываемых услуг,
          стоимость, условия данной Публичной Оферты без предварительного
          согласования с Заказчиком, обеспечивая при этом публикацию измененных
          условий на Интернет-портале Исполнителя, а также в общедоступном для
          ознакомления с этими документами месте, не менее чем за 1 (один)
          рабочий день до их ввода в действие.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Продолжая использование Сайта после вступления в силу соответствующих
          изменений, Заказчик выражает свое согласие с новыми условиями.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.7. В части краткосрочных курсов и видеокурсов настоящий Договор
          имеет силу акта об оказании Услуг. Приемка производится без подписания
          соответствующего акта.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.8. В части профессионального обучения услуги считаются оказанными
          надлежащим образом и в полном объеме, если в течение трех рабочих дней
          с момента окончания оказания услуг Заказчиком не выставлена претензия
          или заказчиком получен документ об образовании. В случае отсутствия
          претензии или получения Заказчиком документа об образовании акт
          приемки-сдачи выполненных работ (услуг) считается подписанным, а
          услуги оказанными надлежащим образом. В случае частичной или полной
          возвраты денег по претензии Заказчика, Исполнитель в дальнейшем не
          может предоставлять свои услуги или информационные продукты заказчику.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          2.9. Договор на образовательные услуги может быть заключен в
          письменной форме как путем составления единого документа, подписанного
          сторонами, так и путем обмена документами с помощью почтовой связи или
          факса, или электронной почты (e-mail). При этом, передаваемые
          документы должны быть подписаны сторонами или их уполномоченными
          представителями и скреплены печатью, а используемый способ связи
          должен позволять достоверно установить, что документ исходит от
          стороны по Договору. При соблюдении указанных условий факсимильные
          копии Договора на образовательные услуги, равно как и передаваемые по
          электронной почте графические файлы, содержащие отсканированные
          страницы настоящего Договора, имеют юридическую силу оригинала и
          считаются действительными до момента обмена сторонами оригиналами
          Договора и являются преимущественными по отношению к акцепту настоящей
          оферты.
        </Text>

        <Text textStyle="Bold16" color="black" mb="1rem">
          Права и обязанности Сторон
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.1. Исполнитель обязуется:
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.1.1. Оказать услуги надлежащего качества в объеме и в сроки,
          указанные на Сайте.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.1.2. Предоставить Заказчику персональный доступ к обучающему курсу в
          день начала обучения, указанный на сайте или в Договоре в соотв с
          п.2.9.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.1.3. Довести до сведения Заказчика информацию о программе обучающего
          курса путем размещения ее на Сайте.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.1.4. Сохранять конфиденциальную информацию, полученную от Заказчика,
          при оказании услуг по настоящему Договору.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.1.5. Соблюдать требования законодательства, касающиеся обработки,
          передачи и защиты персональных данных Заказчика. Обрабатывать
          персональные данные Заказчика с его согласия в соответствии с
          условиями Политики конфиденциальности.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.2. Исполнитель вправе:
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.2.1. Изменять в одностороннем порядке график размещения обучающего
          материала, проведения обратной связи и иных консультаций, не меняя при
          этом установленную периодичность их проведения и объем услуг, а также
          менять и дополнять содержание уроков и заданий для Заказчика.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.2.2. В одностороннем порядке расторгнуть настоящий Договор в случае
          существенного нарушения Заказчиком условий настоящего Договора. При
          этом денежные средства, оплаченные Заказчиком по настоящему Договору,
          возврату не подлежат и являются компенсацией за действия Заказчика.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.3. Заказчик обязуется:
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.3.1. Предоставить Исполнителю данные, необходимые для регистрации на
          сайте Исполнителя в соответствии с утвержденной Исполнителем формой,
          размещенной в сети Интернет по адресу: https://styleschool.ru/
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.3.2. Своевременно и самостоятельно знакомится с графиком проведения
          дистанционных мероприятий по обучению, придерживаться установленного
          графика обучающей программы, целей и сути выполнения заданий
          Исполнителя, соблюдать сроки выполнения домашних заданий, выполнять
          рекомендации и требования Исполнителя в рамках оказания услуг по
          настоящему Договору.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.3.3. Не осуществлять запись, не распространять (публиковать,
          размещать на Интернет-сайтах, копировать, передавать или перепродавать
          третьим лицам) в коммерческих или некоммерческих целях предоставляемую
          Исполнителем Заказчику информацию и материалы в рамках настоящего
          Договора, создавать на ее основе информационные продукты с целью
          извлечения коммерческой прибыли, а также использовать эту информацию
          каким-либо иным образом, кроме как для личного пользования.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.3.4. Не передавать реквизиты доступа к Сайту, а также для получения
          услуг третьим лицам, а также запрещается совместное с третьими лицами
          получение услуг или использование Сайта без специального на то
          разрешения Исполнителя.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          3.4. Заказчик соглашается с тем, что он несет ответственность за
          добросовестное, качественное, в полном объеме выполнение домашних
          заданий, рекомендаций, инструкций и/или наставлений Исполнителя,
          привлекаемых консультантов, экспертов и наставников. Заказчик
          обязуется занимать активную позицию в процессе выполнения заданий и
          развития собственного бизнеса.
        </Text>
        <Text textStyle="Bold16" color="black" mb="1rem">
          Акцепт Оферты и заключение Договора
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          4.1. Заказчик производит Акцепт Оферты путем заполнения формы
          регистрации (заявки) и/или внесения 100% предоплаты Услуг Исполнителя,
          в отношении которых заключается Договор Оферты, если иное не
          предусмотрео иными Договорами, заключенными в соответстсвии с п. 2.9
          Договора
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          4.2. Осуществляя акцепт настоящей Оферты, Заказчик подтверждает, что
          оказание Исполнителем Услуг по настоящему Договору полностью
          соответствует возможности Заказчика пользоваться Услугами,
          оказываемыми таким способом.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          4.3. Заказчик обязуется самостоятельно обеспечить наличие программного
          обеспечения на своем персональном компьютере и технических средств,
          необходимых для обучения. Исполнитель не отвечает за непредоставление
          Услуг в связи с невозможностью Заказчика их получить по причине
          отсутствия подключения к сети Интернет и необходимого
          компьютерного/программного обеспечения.
        </Text>
        <Text textStyle="Bold16" color="black" mb="1rem">
          Стоимость услуг и порядок их оплаты
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          5.1. Стоимость услуг указана на сайте: https://styleschool.ru/
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          5.2. Стоимость может быть изменена и зависит от:
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          • даты регистрации;
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          • объема приобретаемых услуг;
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          • индивидуальной скидки Заказчика.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          5.3. Оплата услуг осуществляется Заказчиком на условиях
          предварительной оплаты в размере 100% (сто процентов) от суммы,
          указанной в пункте 3.1. настоящего Договора на основании счета
          Исполнителя, за исключением случаев предоставления рассрочки.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          5.4. Стороны могут договориться об оплате услуг в рассрочку. В случае,
          если стороны придут к соглашению о рассрочке, Заказчик обязуется
          оплачивать счета на оплату части услуг в течение 3 (трех) календарных
          дней после направления Заказчику счета. Размеры платежей, а также
          порядок выставления счетов согласовывается сторонами в отдельном
          дополнительном соглашении или Договорах, заключаемых в формате в
          соответстсвии с п. 2.9 Оферты.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          5.5. В рамках проводимых акций Исполнителем может предусматриваться
          предварительная оплата (аванс – далее Аванс) в сумме, указанной на
          сайте: https://styleschool.ru/. Условиями акций может
          предусматриваться возврат Аванса в полном размере, если Заказчик до
          предоставления ему услуг отказался от их фактического получения.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          5.6. Все расчеты по Договору производятся в рублях РФ.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          5.7. Услуга будет считаться оплаченной с момента поступления денежных
          средств на расчетный счет Исполнителя.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          5.8. В случае невыполнения Заказчиком обязательств по оплате услуг в
          соответствии с условиями настоящего Договора Исполнитель вправе
          приостановить исполнение своих обязательств до момента получения
          денежных средств от Заказчика либо отказаться от исполнения настоящего
          Договора в одностороннем порядке.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          5.9. В случае невозможности исполнения настоящего Договора, возникшей
          по причине Заказчика, денежные средства, оплаченные Исполнителю по
          настоящему Договору, возврату не подлежат.
        </Text>
        <Text textStyle="Bold16" color="black" mb="1rem">
          Возврат оплаты по Договору
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          6.1. В случае отказа Заказчика от услуг Исполнителя в счет оплаты
          Курса производится по отдельному заявлению Заказчика в письменной
          форме заказным письмом с описью вложения и уведомлением о вручении в
          адрес Исполнителя, указанный в настоящем Договоре, а также
          продублированный на электронную почту Исполнителя. В заявлении о
          возврате должны быть изложены причины, по которым Заказчик требует
          вернуть денежные средства, реквизиты для перевода денежных средств и
          приложена копия документа, удостоверяющего личность Заказчика.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          6.2. При отправке заявления о возврате по почте Заказчик дополнительно
          уведомляет Исполнителя об этом в службу поддержки с приложением копий
          заявления и квитанции об отправки письма.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          6.2. Условия возврата денежных средств:
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          6.2.1. Заказчик вправе отказаться от услуг по Договору до начала
          оказания Исполнителем услуг – в данном случае происходит 100% возврат
          денежных средств в течение 10 (десяти) календарных дней с момента
          такого отказа, не менее чем за 7 календарных дней до начала обучения.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          6.2.2. Заказчик вправе расторгнуть настоящий Договор в одностороннем
          внесудебном порядке, предупредив Исполнителя за 15 (пятнадцать)
          календарных дней до предполагаемого отказа. При этом Заказчик
          осознает, что если отказ от обязательств по Договору обусловлен его
          виной (неисполнение домашних заданий, неуспеваемостью), в соответствии
          с п.2 ст.781 ГК РФ – услуги подлежат оплате в полном объеме, возврат
          не осуществляется.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          6.2.3. В иных случаях Исполнителю подлежат оплате фактически
          понесенные расходы в соответстсвии с п.8 Оферты.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          6.3. Исполнитель отказывает в удовлетворении заявления о возврате,
          если оно подано Заказчиком по следующим причинам:
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          • программное обеспечение на персональном компьютере Заказчика и его
          технические средства не позволяют просматривать и изучать материалы
          Курса.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          • Заказчик не выполнил домашнее задание, показал неуспеваемость, то
          есть услуги не оказаны по вине Заказчика
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Заказчик получил полный доступ к образовательным материалам / услугам
          в дистанционном формате и фактически имел возможность получить услуги
          / изучить образовательные материалы в полном объеме.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          6.4. Решение о возврате или об отказе в возврате денежных средств
          принимается Исполнителем в течение 10 (десяти) дней с момента
          получения Исполнителем письменного заявления Заказчика о возврате.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          6.5. Денежные средства возвращаются на тот счет Заказчика, с которого
          производилась оплата, либо на иной счет по согласованию Сторон.
        </Text>
        <Text textStyle="Bold16" color="black" mb="1rem">
          Защита авторских прав
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          7.1. Все результаты интеллектуальной деятельности и средства
          индивидуализации, размещенные на Сайте, в том числе элементы дизайна,
          текст, графические изображения, иллюстрации, видеоматериалы,
          музыкальные произведения, фонограммы и другие объекты, любые иные
          охраноспособные результаты интеллектуальной деятельности, средства
          индивидуализации их подборки (в том числе сборники, включая сам сайт
          как сборник) и иные результаты интеллектуальной деятельности
          (контент), являются объектами интеллектуальных прав Исполнителя, если
          иное прямо не указано Исполнителем, все права на эти объекты защищены
          в соответствии с применимым законодательством и международными актами.
        </Text>
        <Text textStyle="Bold16" color="black" mb="1rem">
          Срок действия, порядок заключения и расторжения Договора
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          8.1. Настоящий Договор вступает в силу с момента совершения Заказчиком
          акцепта оферты и действует до полного выполнения обязательств
          Сторонами.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          8.2. Заказчик имеет право отказаться от получения услуг после
          заключения настоящего Договора, известив Исполнителя об этом
          письменным извещением, дата получения которого Исполнителем считается
          датой отказа. Под отказом понимается либо отказ от услуг в целом, либо
          сокращение заявленного объема услуг.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          8.3. В случае досрочного расторжения настоящего Договора, стоимость
          оказанных Исполнителем услуг рассчитывается исходя из базовой
          стоимости услуг, опубликованных на сайте: https://styleschool.ru/,
          пропорционально периоду времени, прошедшему с начала обучения
          Заказчика до момента прекращения действия настоящего Договора
          (количеству проведенных занятий). При этом подписывается Соглашение о
          расторжении Договора (далее Соглашение). В Соглашении может
          указываться иной порядок расчета по согласованию Сторон, подписавших
          Соглашение, но удерживаемая сумма не может быть меньше, чем 50%
          (пятьдесят процентов) от суммы, оплаченных услуг, если досрочное
          расторжение настоящего Договора не связано с выполнением акций,
          предусмотренных Договором.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          8.4. В случае переноса срока оказания услуг действие Договора
          продлевается на срок, равный сроку переноса. При отмене мероприятия
          договорные обязательства Сторон прекращаются. В случае отмены
          мероприятия по зависящим от Исполнителя обстоятельствам, Исполнитель
          обязуется возместить Заказчику уплаченные им денежные средства в
          полном размере.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          8.5. В случае невыполнения одной стороной обязательств по Договору в
          результате действия обстоятельств непреодолимой силы (форс-мажор), что
          подтверждается необходимыми документами с указанием срока форс-мажора,
          срок обязательств сторон по Договору продлевается на срок действия
          форс-мажора. Стороны освобождаются от ответственности за убытки,
          понесенные другой стороной в результате действия форс-мажора. Сторона,
          для которой создалась невозможность выполнения обязательств по
          настоящему Договору, обязана сообщить в письменной форме о наступлении
          форс-мажорных обстоятельств, о предполагаемом сроке действия данных
          обстоятельств, а также об окончании действия. Достаточным
          подтверждением наличия вышеуказанных обстоятельств будут служить
          справки, выданные соответствующими уполномоченными органами. Если
          невозможность полного или частичного выполнения обязательств одной из
          сторон вследствие форс-мажорных обстоятельств не прекратятся до начала
          мероприятия, любая сторона имеет право расторгнуть настоящий Договор.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          8.6. Продолжая использование услуг Исполнителя и обучения на портале
          Исполнителя после вступления в силу соответствующих изменений,
          Заказчик выражает свое согласие с условиями настоящего договора в
          новой редакции.
        </Text>
        <Text textStyle="Bold16" color="black" mb="1rem">
          Прочие условия
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.1. Настоящий Договор вступает в силу с момента акцепта Заказчика и
          действует до полного исполнения обязательств сторонами.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.2. Стороны признают, что все уведомления, сообщения, соглашения,
          документы и письма, направленные с использованием уполномоченных
          адресов электронной почты, считаются направленными и подписанными
          Сторонами, кроме случаев, когда в таких письмах прямо не указано
          обратное.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.3. Уполномоченными адресами электронной почты Сторон признаются:
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          • для Исполнителя: info@styleschool.ru
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          • для Заказчика: адрес электронной почты, указанные в заявке на
          покупку услуги на Сайте.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.4. Все споры, разногласия и претензии, которые могут возникнуть в
          связи с исполнением, расторжением или признанием недействительным
          Договора, Стороны будут пытаться разрешить путем переговоров. Сторона,
          у которой возникли претензии и/или разногласия, направляет другой
          Стороне сообщение с указанием возникших претензий и/или разногласий в
          соответствии с пунктом 9.3 Договора.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.5. В случае если ответ на сообщение о претензии не будет получен
          направившей сообщение Стороной в течение 30 (тридцати) календарных
          дней с даты направления соответствующего сообщения, либо Стороны не
          придут к соглашению по возникшим претензиям и/или разногласиям, спор
          подлежит разрешению в судебном порядке по месту нахождения
          Исполнителя.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.6. Признание судом какого-либо положения настоящего Договора
          недействительным или не подлежащим принудительному исполнению не
          влечет недействительности иных его положений.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.7. Доступ Заказчика к тем информационным продуктам, которые
          предоставляются Исполнителем Заказчику в формате видео (видео курсов /
          видео уроков), сохраняется для Заказчика в течение 6 (Шести) месяцев,
          начиная с даты предоставления к ним доступа Заказчику. Исполнитель
          оставляет за собой право досрочного изъятия информационного продукта,
          опубликованного в формате видео, из доступа в связи с утратой
          актуальности программы, также в связи с изменением программного
          обеспечения, затрудняющим либо делающим невозможным его
          воспроизведение, а также в случае утраты технической возможности
          воспроизведения видеофайла по причинам, независящим от Исполнителя,
          предоставив альтернативное решение для выполнения условий настоящего
          Договора.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.8. Любая полученная в результате исполнения настоящего Договора
          информация (включая, но не ограничиваясь информацией о коммерческой
          деятельности любой из сторон, технологиях, решениях и т.п.) – является
          конфиденциальной и не подлежит разглашению третьим лицам без
          письменного согласования другой стороны по настоящему Договору.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.9. Исполнитель не несет ответственности за достижение каких-либо
          результатов, связанных с практическим применением информации,
          содержащейся в объектах реализации. Любые рекомендации, содержащиеся в
          объектах реализации, осуществляются Потребителем на свой риск.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.10. Если иное не указано в настоящей Оферте, Исполнитель не несет
          ответственности перед Заказчиком за: косвенные убытки, упущение
          прибыли, упущение выгоды, независимо от способа их причинения.
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          9.11. Оплата по данному Договору означает согласие со всеми условиями
          (пунктами) перечисленными выше.
        </Text>
        <Text textStyle="Bold16" color="black" mb="1rem">
          Юридический адрес и реквизиты исполнителя
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Исполнитель: АНО ДПО «Высшая школа стилистики, дизайна и технологий»,
          ИНН/КПП 9717068337/ 771701001,
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          Юр. адрес: 129085, г. Москва, проспект Мира, ДОМ 101, стр.1, этаж 6
          пом. I ком. 1, 2, 2а, 3;
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          р/с 40703810300000707477 в "ТИНЬКОФФ БАНК" (АО), г. Москва,
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          к/с 30101810145250000974, БИК 044525974,
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          тел.: +7 (495) 221-89-35
        </Text>
        <Text textStyle="Regular14" color="black" mb="1rem">
          e-mail: info@styleschool.ru
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
