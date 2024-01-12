'use client'
import React from "react";

import { Grid, GridItem } from '@chakra-ui/react'
import Paragraph from "./paragraph";
import List from "./list";
import SocNetIcons from "./socnet-icons";
import './fonts.css';

const stylesLite = {
  footerTitle: {
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "rgb(187,144,41)",
    align: "left"
  },
  footerLink: {
    fontSize: "0.95rem",
    color: "rgb(160,160,160)",
    borderBottom: "1px solid rgb(160,160,160)",
    transition: "0.5s color",
    "&:hover": {
      borderBottom: 0,
      color: "rgb(87,143,163)"
    }
  },
  footerText: {
    fontSize: ".95rem",
    fontWeight: 400,
    color: "rgb(220,220,220)",
    align: "left",
    lineHeight: "1rem",
    padding: 0,
    margin: 0
  },
  footerGold: {
    fontSize: ".95rem",
    fontWeight: 400,
    lineHeight: "1.2rem",
    color: "rgb(187, 144, 41)",
    align: "left",
    padding: 0,
    margin: 0
  },
  footer: {
    background: "rgb(0,0,0)",
    padding: "4rem 0"
  },
  geo: {
    display: "inline-block",
    width: 180,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top",
  },
  geoItemsBox: {
    width: 180,
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  },
  geoItem: {
    width: 180,
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  },
  geoItem2: {
    width: 140,
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  },
  adress: {
    display: "inline-block",
    width: 200,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top",
  },
  time: {
    display: "inline-block",
    width: 200,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top",
  },
  contacts: {
    display: "inline-block",
    width: 180,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top",
  },
  services: {
    display: "inline-block",
    width: 240,
    padding: 0,
    paddingRight: "1rem",
    margin: 0,
    verticalAlign: "top",
  },
  "@media (max-width: 959px)": {
    footer: {
      padding: "4rem 1rem"
    }
  },
  
};

const font = "Alegreya Sans";
const fontTitle = "PT Sans Narrow";

const StyledLink = (props) => {
  const {children, style, ...parentProps} = props;
  return <a {...parentProps} style={{...style, textDecoration: 'none'}}>{children}</a>;
};

export default function Footer(props) {

  return (
    <div style={{...stylesLite.footer,
      fontSize: '.95rem',
      textAlign: 'left',
      fontWeight: 400,
      lineHeight: '1.2rem',
      }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto"
        }}
      >
        <div style={{...stylesLite.geo}}>
          <p style={{...stylesLite.footerTitle, fontFamily: fontTitle }}>
            ГЕОГРАФИЯ
          </p>
          <Paragraph
            style={stylesLite.footerText}
            content={[
              <StyledLink href="https://styleschool.ru/">
                <span
                  style={{...stylesLite.footerText, fontFamily: font }}
                >
                  Москва
                </span>
              </StyledLink>,
              <StyledLink href="http://novosib.styleschool.ru/">
                <span
                  style={{...stylesLite.footerText, fontFamily: font }}
                >
                  Новосибирск
                </span>
              </StyledLink>,
              <StyledLink href="/cannes">
                <span
                  style={{...stylesLite.footerText, fontFamily: font }}
                >
                  Франция
                </span>
              </StyledLink>,
              <span style={{...stylesLite.footerText, fontFamily: font }}>
                Online
              </span>
            ]}
          />
        </div>
        <div style={{...stylesLite.adress}}>
          <p style={{...stylesLite.footerTitle, fontFamily: fontTitle }}>
            АДРЕС &bull;{" "}
            {props.adress ? (
              <span style={{ textTransform: "uppercase" }}>{props.filial}</span>
            ) : (
              "МОСКВА"
            )}
          </p>
          {props.adress ? (
            <p style={{...stylesLite.footerText, fontFamily: font }}>
              {props.adress}
            </p>
          ) : (
            <>
              <p style={{...stylesLite.footerText, fontFamily: font }}>
                г. Москва, Проспект Мира,
                <br />
                дом&nbsp;101, стр.&nbsp;1, офис&nbsp;210
              </p>
              <p style={{...stylesLite.footerText, fontFamily: font }}>
                Для почтовых отправлений:
                <br />
                а/я&nbsp;218
              </p>
            </>
          )}
        </div>
        <div style={{...stylesLite.time}}>
          <p style={{...stylesLite.footerTitle, fontFamily: fontTitle }}>
            ВРЕМЯ РАБОТЫ
          </p>
          <p style={{...stylesLite.footerText,fontFamily: font }}>
            {props.filial || "Москва"}
          </p>
          <p style={{...stylesLite.footerText,fontFamily: font }}>
            Пон.-пят.
          </p>
          <p style={{...stylesLite.footerText,fontFamily: font }}>
            с 10:00 до 19:00
          </p>
          <p style={{...stylesLite.footerText,fontFamily: font }}>
            Суб. с 11:00 до 14:00
          </p>
        </div>
        <div style={{...stylesLite.contacts}}>
          <p style={{...stylesLite.footerTitle,fontFamily: fontTitle }}>
            КОНТАКТЫ
          </p>
          {props.phones ? (
            <p style={{...stylesLite.footerText,fontFamily: font }}>
              {props.phones}
            </p>
          ) : (
            <>
              <p style={{...stylesLite.footerText,fontFamily: font }}>
                +7 (495) 221-89-35
              </p>
            </>
          )}
          <div style={{...stylesLite.footerText}}>
            <StyledLink href="/contacts">
              <span style={{...stylesLite.footerLink,fontFamily: font }}>
                Все контакты
              </span>
            </StyledLink>
          </div>
        </div>
        <div style={{...stylesLite.services}}>
          <p style={{...stylesLite.footerTitle,fontFamily: fontTitle }}>
            СОТРУДНИЧЕСТВО
          </p>
          <List
            style={{ ...stylesLite.footerText, fontFamily: font }}
            olStyle={{ paddingLeft: 10 }}
            arr={[
              <StyledLink href="/partners-pro">
                <span
                  style={{...stylesLite.footerLink, fontFamily: font }}
                >
                  Партнерская программа
                </span>
              </StyledLink>,
              <StyledLink href="/network-educational-programs">
                <span
                  style={{...stylesLite.footerLink, fontFamily: font }}
                >
                  Сетевые программы
                </span>
              </StyledLink>,
              <StyledLink href="/corporate">
                <span
                  style={{...stylesLite.footerLink, fontFamily: font }}
                >
                  Корпоративные программы
                </span>
              </StyledLink>,
              /*
              <StyledLink href="/stylist-association">
                <span
                  style={{...stylesLite.footerLink}
                  style={{ fontFamily: font }}
                >
                  ВШСДТ.Ассоциация
                </span>
              </StyledLink>
              */

              <StyledLink href="/vacancy">
                <span
                  style={{...stylesLite.footerLink, fontFamily: font }}
                >
                  Вакансии
                </span>
              </StyledLink>
            ]}
          />
        </div>
      </div>
      <Grid
        templateAreas={`"social social"
                        "col1 col2"
                        "tags tags"
                        "copyrights copyrights"`}
        gap={40}
        style={{
          maxWidth: 1100,
          margin: "0 auto"
        }}
      >
        <GridItem area={'social'}>
          <SocNetIcons />
        </GridItem>
        <GridItem area={'col1'}>
          <p
            style={{...stylesLite.footerText, fontFamily: font, lineHeight: "1.3rem" }}
          >
            Автономная некоммерческая организация
            <br />
            Дополнительного профессионального образования
            <br />
            «Высшая школа стилистики, дизайна и технологий»
          </p>
          <div style={{ height: "1rem" }} />
          <StyledLink href="/information-about-educational-organization">
            <span style={{...stylesLite.footerLink,fontFamily: font }}>
              Сведения об образовательной организации
            </span>
          </StyledLink>
          <br />
          <StyledLink href="/information">
            <span style={{...stylesLite.footerLink,fontFamily: font }}>
              Информация для пользователей
            </span>
          </StyledLink>
        </GridItem>
        <GridItem area={'col2'}>
          <p style={{...stylesLite.footerGold,fontFamily: font }}>
            Партнёры:
            <br />
            &bull;&emsp;Московский физико-технический институт
            <br />
            &bull;&emsp;Московский художественно-промышленный институт
            <br />
            &bull;&emsp;Московский психолого-социальный университет
            <br />
            &bull;&emsp;Иновационно-образовательный комплекс «Техноград»
            <br />
            &bull;&emsp;European Model Academy
          </p>
        </GridItem>
        <GridItem area={'tags'}>
          <p
            style={{
              margin: 0,
              padding: 0,
              fontFamily: font,
              color: "rgb(160,160,160)"
            }}
          >
            ТЕГИ:&emsp;
            <StyledLink href="/">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #ВШСДТ
              </span>
            </StyledLink>
            &emsp;
            <StyledLink href="/second-degree-imagemaker">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #имиджмейкерстилист
              </span>
            </StyledLink>
            &emsp;
            <StyledLink href="/imagemaker-stylist">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #курсыстилистовимиджмейкеров
              </span>
            </StyledLink>
            &emsp;
            <StyledLink href="/interior-design-courses">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #курсыдизайнинтерьера
              </span>
            </StyledLink>
            &emsp;
            <StyledLink href="/living-interior-design-and-decoration">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #дизайнидекорированиеинтереьера
              </span>
            </StyledLink>
            &emsp;
            <StyledLink href="/visual-merchandising-and-showcases-design">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #визуальныймерчендайзинг
              </span>
            </StyledLink>
            &emsp; &emsp;
            <StyledLink href="/business-analitic">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #бизнесаналитик
              </span>
            </StyledLink>
            &emsp; &emsp;
            <StyledLink href="/bfashionsprint">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #fashionnovation
              </span>
            </StyledLink>
            &emsp; &emsp;
            <StyledLink href="/chatbot">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #conversationai
              </span>
            </StyledLink>
            &emsp;
            <StyledLink href="/price-list">
              <span style={{...stylesLite.footerLink, fontFamily: font }}>
                #прайслист
              </span>
            </StyledLink>
          </p>
        </GridItem>
        <GridItem area={'copyrights'}>
          <p
            style={{
              fontFamily: font,
              fontSize: "0.9rem",
              color: "rgb(160,160,160)",
              padding: "1rem 0",
              margin: 0,
              textAlign: "center"
            }}
          >
            &copy;&emsp;ВШСДТ 2011-2021 Российское академическое онлайн
            образование.
          </p>
        </GridItem>
      </Grid>
    </div>
  );
}
