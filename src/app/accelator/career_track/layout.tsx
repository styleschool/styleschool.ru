import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'КАРЬЕРНЫЙ ТРЕК СТИЛИСТОВ И ДИЗАЙНЕРОВ',
    description: 'Кайрос DS - (t.me/kairos_ds)– объединение специалистов в области индустрии моды и дизайна среды с разных регионов Российской Федерации.',
    keywords: 'мода, индустрия, стилист, тренды, модные, карьера, курсы, обучение, школа, учиться, профессия',
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
