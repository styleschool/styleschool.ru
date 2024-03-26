import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Курс: Нейросети для дизайнеров и стилистов',
    description: 'ChatGPT, DALL-E, Midjourney, Generative fill. Практика применения нейросетей в создании визуальных концепций и доработке проектов в дизайне интерьера, графическом дизайне, индустриях моды и красоты.',
    keywords: 'дизайнер, стилист, контент, создание, картинки, иллюстрации, ChatGPT, DALL-E, Midjourney, Generative fil, карьера, курсы, обучение, школа, учиться, профессия',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <> {children} </>
  )
}
