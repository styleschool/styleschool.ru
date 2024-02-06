'use client';

import { Flex, VStack, useMediaQuery } from '@chakra-ui/react';

import Footer from '../footer';
import EducationCard from './education-card';
import Header from '../header';

const courses = [
  {
    tags: [
      { text: 'нейросети', href: '#' },
      { text: 'дизайн', href: '#'},
      { text: 'стиль', href: '#'},
      { text: 'мода', href: '#'},
      { text: 'дизайнер', href: '#'},
      { text: 'стилист', href: '#'}
    ],
    title: 'Нейросети для дизайнеров и стилистов (3 месяца)',
    level: 'ИИ и нейросети, 1 ступень',
    profession: 'контент менеджер, промпт инженер',
    document: 'удостоверение о повышении квалификации',
    link: 'education/style-consultant'
  },
  {
    tags: [
      { text: 'имидж', href: '#' },
      { text: 'стиль', href: '#'},
      { text: 'модные', href: '#'},
      { text: 'одежда', href: '#'},
      { text: 'бесплатно', href: '#'}
    ],
    title: 'Консультант по стилю (2 месяца)',
    level: 'Имидж и стиль, 1 ступень',
    profession: 'консультант по имиджу и стилю, шопер',
    document: 'удостоверение о повышении квалификации гос.ВУЗа',
    link: 'education/style-consultant'
  },
  {
    tags: [
      { text: 'дизайн', href: '#' },
      { text: 'интерьер', href: '#'},
      { text: 'среда', href: '#'},
      { text: 'дом', href: '#'},
      { text: 'бесплатно', href: '#'}
    ],
    title: 'Дизайн интерьера (2 месяца)',
    level: 'Дизайн среды, 1 ступень',
    profession: 'консультант по дизайну интерьера',
    document: 'удостоверение о повышении квалификации гос.ВУЗа',
    link: 'education/style-consultant'
  },
  {
    tags: [
      { text: 'стилист', href: '#' },
      { text: 'мода', href: '#'},
      { text: 'нейросети', href: '#'},
      { text: 'профессия', href: '#'},
    ],
    title: 'Стилист в индустрии моды. Fashion стилист (4 месяца)',
    level: 'Имидж и стиль, 2 ступень',
    profession: 'стилист, стилист фотосессий, fashion стилист',
    document: 'диплом о профпереподготовке гос.ВУЗа',
    link: 'education/style-consultant'
  },
  {
    tags: [
      { text: 'дизайнер', href: '#' },
      { text: 'интерьер', href: '#'},
      { text: 'среда', href: '#'},
      { text: 'нейросети', href: '#'},
      { text: 'профессия', href: '#'},
    ],
    title: 'Интерьерный стилист (4 месяца)',
    level: 'Дизайн среды, 2 ступень',
    profession: 'интерьерный стилист, дизайнер интерьера',
    document: 'диплом о профпереподготовке гос.ВУЗа',
    link: 'education/style-consultant'
  },
  {
    tags: [
      { text: 'нейросети', href: '#' },
      { text: 'интеллект', href: '#'},
      { text: 'продукт', href: '#'},
      { text: 'управление', href: '#'},
      { text: 'профессия', href: '#'},
    ],
    title: 'AI продукт менеджер: создание продуктов с использованием нейросетей (2 месяца)',
    level: 'Управление продуктом, 1 ступень',
    profession: 'Менеджер по продукту',
    link: 'education/style-consultant'
  }
];

export default function Home() {
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
  <Flex direction="column">
    <Header breadcrumbs={[{text: 'Коммерческое образование'}]}/>
    <VStack align="center" p={isMax959 ? 0 : "3rem 6rem"} spacing="2rem">
      { courses.map((course, i)=> <EducationCard key={i} {...course} /> ) }
    </VStack>
    <Footer/>
  </Flex>
  )
}
