import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ВШСДТ - Модный бренд в fashion - индустрии',
    description: 'Модный бренд в fashion - индустрии - практическая менторская программа с отработкой навыков по продвижению своего бренда и сотрудничеством со стилистами',
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
