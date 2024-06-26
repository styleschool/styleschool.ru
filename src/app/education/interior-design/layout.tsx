import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Курс: Дизайн интерьера',
    description: 'Актуально и емко о самом важном для реализации идей в интерьере квартиры или загородного дома. Получения навыка составления Design Project folder и реализации своих идей в дизайне интерьера.',
    keywords: 'дизайн, интерьер, карьера, курсы, школа,  обучение, учиться, профессия',
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
