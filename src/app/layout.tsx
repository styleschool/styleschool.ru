import type { Metadata } from 'next';
import { Alegreya_Sans } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script'
import theme from '../components/theme';

const alegriya = Alegreya_Sans({ 
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin','cyrillic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ВШСДТ',
  description: 'Высшаая Школа Стилистики Дизайна и Технологий',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={alegriya.className}>
      <Script src="yandex.js" strategy='beforeInteractive' />
      <body style={{ margin: 0 }}>
        <ChakraProvider theme={theme} cssVarsRoot="body">
          {children}
        </ChakraProvider>
        <noscript><div><img src="https://mc.yandex.ru/watch/53888251" style={{ position: 'absolute', left:'-9999px' }} alt="" /></div></noscript>
      </body>
    </html>
  )
}
