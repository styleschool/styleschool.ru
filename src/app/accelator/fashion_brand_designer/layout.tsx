import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ВШСДТ - Дизайнер модного бренда',
    description: 'Акселератор национальной индустрии моды - образовательная программа по созданию, запуску и развитию российского дизайнерского бренда.',
    keywords: 'акселератор, российский, дизайнер, одежда, индустрия, мода, продвижение',
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
