import React from "react";
import { Rutube } from "./icons";
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

const styles = (theme:any) => ({
  icons: {
    textAlign: "right",
    padding: 0,
    // paddingRight: "1rem",
    // paddingTop: ".5rem",
    paddingBottom: "1rem"
  }
});

export function Vk(props:any) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 20">
      <path
        fillOpacity="0"
        stroke={props.color || "rgb(200,200,200)"}
        strokeWidth={props.width || "1.5"}
        strokeLinecap="square"
        d="M20.8,7.74C20.93,7.32 20.8,7 20.18,7H18.16C17.64,7 17.41,7.27 17.28,7.57C17.28,7.57 16.25,10.08 14.79,11.72C14.31,12.19 14.1,12.34 13.84,12.34C13.71,12.34 13.5,12.19 13.5,11.76V7.74C13.5,7.23 13.38,7 12.95,7H9.76C9.44,7 9.25,7.24 9.25,7.47C9.25,7.95 10,8.07 10.05,9.44V12.42C10.05,13.08 9.93,13.2 9.68,13.2C9,13.2 7.32,10.67 6.33,7.79C6.13,7.23 5.94,7 5.42,7H3.39C2.82,7 2.7,7.27 2.7,7.57C2.7,8.11 3.39,10.77 5.9,14.29C7.57,16.7 9.93,18 12.08,18C13.37,18 13.53,17.71 13.53,17.21V15.39C13.53,14.82 13.65,14.7 14.06,14.7C14.36,14.7 14.87,14.85 16.07,16C17.45,17.38 17.67,18 18.45,18H20.47C21.05,18 21.34,17.71 21.18,17.14C21,16.57 20.34,15.74 19.47,14.76C19,14.21 18.29,13.61 18.07,13.3C17.77,12.92 17.86,12.75 18.07,12.4C18.07,12.4 20.54,8.93 20.8,7.74Z"
      />
    </svg>
  );
}

export function Facebook(props:any) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24">
      <path
        fillOpacity="0"
        stroke={props.color || "rgb(200,200,200)"}
        strokeWidth="1.5"
        strokeLinecap="square"
        d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6C10,3.79 11.79,2 14,2H17Z"
      />
    </svg>
  );
}

export function Instagram(props:any) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24">
      <path
        fill={props.color || "rgb(200,200,200)"}
        d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2C22,19.4 19.4,22 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8C2,4.6 4.6,2 7.8,2M7.6,4C5.61,4 4,5.61 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4C18.39,20 20,18.39 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5C17.94,5.5 18.5,6.06 18.5,6.75C18.5,7.44 17.94,8 17.25,8C16.56,8 16,7.44 16,6.75C16,6.06 16.56,5.5 17.25,5.5M12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9Z"
      />
    </svg>
  );
}

export function Youtube(props:any) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 20">
      <path
        fillOpacity="0"
        stroke={props.color || "rgb(200,200,200)"}
        strokeWidth="1.5"
        strokeLinecap="square"
        d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
      />
    </svg>
  );
}

export function Login(props:any) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24">
      <path
        fill={props.color || "rgb(200,200,200)"}
        d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
      />
    </svg>
  );
}

export function Path(props:any) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24">
      <path
        fillOpacity="0"
        stroke={props.color || "rgb(200,200,200)"}
        strokeWidth="1.5"
        strokeLinecap="square"
        d="M 8 0 L 12 6 L 16 0 M 0 24 L 24 24 M 0 23 L 24 23"
      />
    </svg>
  );
}

export function Login2(props:any) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24">
      <circle
        cx="12"
        cy="8"
        r="5"
        fillOpacity="0"
        stroke={props.color || "rgb(200,200,200)"}
        strokeWidth="2"
      />
      <path
        fillOpacity="0"
        stroke={props.color || "rgb(200,200,200)"}
        strokeWidth="2"
        d="M 4 24 C 0,16 24,16 20,24"
      />
    </svg>
  );
}

function SocNetIcons(props: any) {
  const { classes } = props;
  return (
    <Flex 
      direction='row' 
      align='center' 
      justify='end'
      sx={{
        '& > *:not(:last-child)': {
          mr: '0.5rem'
        }
      }}
    >
      {/*<a href="https://www.instagram.com/styleschool_msk/" target="_blank">
        <Instagram
          color={props.color || "rgb(200,200,200)"}
          size={props.size / 1.5 || "16px"}
        />
      </a>*/}
      <a href="https://imagemakerpro.ru" target="_blank">
        <Image
          src="regicon.png"
          height="18"
          width="18"
          alt="ВШСДТ"
        />
      </a>
      
      <a href="https://vk.com/stylemsk" target="_blank">
        <Vk
          color={props.color || "rgb(200,200,200)"}
          size={props.size || "24px"}
          width="1.2"
        />
      </a>
      {/*
      <a href="https://www.facebook.com/styleschool.ru/" target="_blank">
        <Facebook
          color={props.color || "rgb(200,200,200)"}
          size={props.size / 1.5 || "16px"}
        />
      </a>*/}
      
      <a
        href="https://www.youtube.com/channel/UC8ByVFm0GkcauK5h_t2BTwQ"
        target="_blank"
      >
        <Youtube
          color={props.color || "rgb(200,200,200)"}
          size={props.size / 1.2 || "20px"}
        />
      </a>
      
      <a href="https://rutube.ru/channel/23668241/" target="_blank">
        <Rutube
          color={props.color || "rgb(200,200,200)"}
          size={props.size / 1.7 || 14}
        />
      </a>
      
      <a href="https://open-ai.ru/" target="_blank">
        <Image
          src="open-ai.png"
          height="18"
          width="18"
          alt="Open AI"
        />
      </a>
      {/* 
      <Image
        src="Image/root-test2/vshsdt.png"
        alt="#ВШСДТ"
        style={{
          height: 14 // 18
        }}
      /> */}
    </Flex>
  );
}

export default SocNetIcons;
