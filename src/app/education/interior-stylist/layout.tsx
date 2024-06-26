import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Курс: Интерьерный стилист. Декоратор',
    description: 'Практика создания интерьерных концепций для реального заказчика. Получение базы знаний по новым методикам, технологиям, материалам, поставщикам товаров и услуг. Практика создания контента и визуализаций с использованием нейросетей ChatGPT и Midjourney. Это новый уровень работы с проектами в области декорирования интерьеров',
    keywords: 'интерьер, дизайн, стилист, декоратор, декорирование,  карьера, курсы, обучение, школа, учиться, профессия',
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
