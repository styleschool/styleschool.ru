import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Обучение и развитие персонала в рамках федерального проекта',
    description: 'Обучение и развитие персонала в рамках федерального проекта. Бесплатное обучение в рамках утвержденного перечня программ в определенных регионах РФ или комплексные программы обучения персонала под заказ без ограничений.',
    keywords: 'обучение, развитие, персонал, кадры, сотрудники, бесплатно, федеральный',
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
