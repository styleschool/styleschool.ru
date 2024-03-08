'use client';

import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'vshsdt',
}

const stepperTheme = {
  variants: {
    active: {
      indicator: {
        borderRadius: 10,
      },
    },
    complete: {
      indicator: {
        borderRadius: 10,
      },
    },
    incomplete: {
      indicator: {
        borderRadius: 10,
      },
    },
  }
}

const themeChakra = extendTheme({ 
  config,
  semanticTokens: {
    fontSizes: {
      xxs: '0.55rem',
    },
    colors: {
      error: 'red',
      text: {
        default: '#060608',
        _dark: 'darkBg',
      },
    },
    sizes: {
      smmr: '2rem',
    }
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      'body': {
        color: mode('gray.900', 'whiteAlpha.900')(props),
        bg: '#FFFFFF',
      },
    }),
  },
   fonts: {
     body: "'Alegreya Sans', sans-serif",
     heading: "'Alegreya Sans', sans-serif",
   },
  fontSizes: {
    '3xs': "calc(0.4rem + 0.5vmax)",
    '2xs': "calc(0.5rem + 0.5vmax)",
    xs: "calc(0.75rem + 1vmax)",
    sm: 'calc(0.95rem + 1vmax)', //"0.875rem",
    md: "calc(1.25rem + 0.5vmax)",
    lg: "calc(1.5rem + 0.6vmax)",
    xl: "calc(1.35rem + 0.8vmax)",
    "2xl": "calc(1.5rem + 0.5vmax)",
    "3xl": "calc(1.875rem + 0.5vmax)",
    "4xl": "calc(2.3rem + 0.5vmax)",
    "5xl": "calc(3rem + 0.5vmax)",
    "6xl": "calc(3.25rem + 0.5vmax)",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  colors: {
    darkBg: '#222222',
    primary: 'rgb(187,144,41)',  // gold
    secondary: 'rgb(125,1,1)', // red
    Cgray: 'rgb(160, 160, 160)', // gray
    Cblue: 'rgb(87,143,163)' // blue
  },
  space: { // единицы измерения для padding и margin
    4.5: '1.125rem',
    'xs': '1rem',
    'sm': '3rem',
    'md': '5rem',
  },
  sizes: {
    'xs': '2rem',
    'sm': '3rem',
  },
  textStyles: {
    h1: {
      fontSize: '4xl',
      fontWeight: 'medium',
      textTransform: 'uppercase',
      lineHeight: '1.2',
    },
    h2: {
      fontSize: '2xl',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 'regular',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'xl',
    },
    h4: {
      fontWeight: 'regular',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'md',
      color: 'text',
    },
    Medium36: {
      fontSize: 'xl',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium32: {
      fontSize: 'lg',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium28: {
      fontSize: 'md',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium22: {
      fontSize: 'sm',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium20: {
      fontSize: 'xs',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium16: {
      fontSize: '2xs',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Medium14: {
      fontSize: '3xs',
      lineHeight: '1.2',
      fontWeight: 'medium',
      color: 'text',
    },
    Regular30: {
      fontSize: 'lg',
      lineHeight: '1.2',
      fontWeight: 'regular',
      color: 'text',
    },
    Regular28: {
      fontSize: 'md',
      lineHeight: '1.2',
      fontWeight: 'regular',
      color: 'text',
    },
    Regular20: {
      fontSize: 'xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'text',
    },
    Regular16: {
      fontSize: '2xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'text',
    },
    Regular14: {
      fontSize: '3xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'text',
    },
    Bold20: {
      fontSize: 'xs',
      lineHeight: '1.5',
      fontWeight: 'bold',
      color: 'text',
    },
    Bold16: {
      fontSize: '2xs',
      lineHeight: '1.5',
      fontWeight: 'bold',
      color: 'text',
    },
    Light20: {
      fontSize: 'xs',
      lineHeight: '1.5',
      fontWeight: 'light',
      color: 'text',
      fontStyle: 'italic',
    },
    Light30: {
      fontSize: '4xl',
      lineHeight: '1.2',
      fontWeight: 'light',
      color: 'text',
      fontStyle: 'italic',
    },

    footerText: {
      fontSize: '2xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'black',
    },
    footerTitle: {
      color: 'primary',
      fontSize: '3xs',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    footerLink: {
      fontSize: '3xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'Cgray',
    },
    body: {
      fontSize: 'xs',
      lineHeight: '1.5',
      fontWeight: 'regular',
      color: 'text',
    }
  },
  components: {
    ListItem: {
        fontSize: '0.6rem'
    },
    Stepper: stepperTheme
  }
})

export default themeChakra