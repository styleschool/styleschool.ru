"use client";

import {
  Flex,
  VStack,
  useMediaQuery,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Link,
} from "@chakra-ui/react";

import Footer from "../../components/footer";
import EducationCard from "../../components/education-card";
import Header from "../../components/header";
import courses from "./courses.json";
import NextLink from "next/link";
import { useSearchParams } from "next/navigation";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const breadcrumbs = [{ text: "Каталог курсов" }];

export default function Home() {
  const [isMax959] = useMediaQuery("(max-width: 959px)");
  const filter = useSearchParams().get("filter");

  return (
    <Flex direction="column">
      <Header pageName="Каталог курсов" />
      <HStack p={isMax959 ? "5rem 1rem 1rem 1rem" : "7rem 6rem 1rem 6rem"} spacing={4}>
        { filter ?
        <Tag borderRadius="full" variant="solid" bg="secondary" p="0rem 1rem">
          <Link as={NextLink} title="удалить фильтр" href="/education">
            <TagLabel textStyle="Regular16" color="white">{filter}</TagLabel>
          </Link> 
          <Link as={NextLink} title="удалить фильтр" href="/education">
          <TagCloseButton />
          </Link> 
        </Tag> : null
        }
        
      </HStack>
      <VStack align="center" spacing="2rem">
        {courses.map((course, i) =>
          !filter ||
          (filter && course.tags.find((tag) => tag.text == filter)) ? (
            <EducationCard key={i} {...course} />
          ) : null
        )}
      </VStack>
      <Breadcrumb
        separator="•"
        textAlign="center"
        fontSize="15px"
        p={isMax959 ? "0rem 2rem" : "0rem 6rem"}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">ВШСДТ</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((crumb: any, i: number) => (
          <BreadcrumbItem key={i} isCurrentPage={breadcrumbs.length === i + 1}>
            <BreadcrumbLink href={crumb.href}>{crumb.text}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Footer />
    </Flex>
  );
}
