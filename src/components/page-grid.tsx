import { Box, Flex, HStack, Text, VStack, useMediaQuery, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { memo } from "react"
import { HoveredStyledLink } from "./footer-link";
import { TextContainer } from "./text-container";
import { TextDescription } from "./text-description";
import { PointList } from "./list-items";
import Banner from './banner/banner';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

export const PageGrid = memo(function PageGrid(props: any) {
  const [isMax667] = useMediaQuery('(max-width: 667px)');
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  const { 
    title, title2, description, details,
    tags, list, points, breadcrumbs } = props;
  return (<>
    { title || title2 || description || details || tags || list 
      ? <Flex direction="column" w="100%" p={isMax959 ? '6rem 2rem' : '7rem 6rem'}>
        <Flex direction={isMax959 ? 'column' : 'row'} justify={isMax959 ? 'flex-start' : 'space-between'} mb="sm">
          <TextContainer direction="row" alignItems="flex-end" justify="flex-start" width={isMax959 ? '100%' : '50%'} mb={0} alignSelf='unset'>

            <VStack align="flex-start" w="calc(100% - 2rem)" >
              { title ? <Text as="h1" textStyle="h1">{title}</Text> : null }
              { title2 ? <Text as="h2" textStyle="h2" mb="xs">{title2}</Text> : null }
              <TextDescription
                mb={0} 
                text={description}
                align="justify"
              />
              <HStack spacing={isMax959 ? "0.5rem" : "1.5rem"} mb={isMax959 ? '2rem' : undefined}>
                {tags ? tags.map((tag: {id: string; text: string}, i: number) => (
                  <HoveredStyledLink key={i} text={tag.text} href={`#${tag.id}`} />
                )) : null}
              </HStack>
              {
                details && details.length ? details.map((text: string, i: number) => 
                <TextDescription 
                  key={i}
                  mb={0} 
                  text={text}
                />) : null
              }
            </VStack>
          </TextContainer>
          {
            list && list.length ? 
            <VStack justify="center" align="flex-start" maxW={450}>
              { list.map((item:string, i:number) => <Text 
                  key={i}
                  as="h4" 
                  textStyle="Regular28"
                  sx={{
                    '&:first-letter': {
                      color: 'secondary',
                      fontWeight: 'bold',
                    }
                  }}
                >{item}</Text>)
              }
            </VStack> : null
          }
        </Flex>
      </Flex> : null}

      { points && points.length ? points.map((point: any, i:number) => <Box key={i}>

        { point.banner && point.banner.type ? <Banner { ...point.banner }/> : point.banner ? <Box w="100%" h="10rem" bg="secondary" mb={point.banner.mb ? point.banner.mb : 'sm'} /> : null }

        { point.title || point.title2 || point.content || point.lists || point.button || point.details ?
          <Flex direction="column" w="100%"  p={title || title2 || description || details || tags || list ? isMax959 ? '2rem 2rem' : "2rem 6rem" : isMax959 ? '5rem 2rem 0rem' : '6rem 6rem 0rem'}>
            <Flex direction="row" align="flex-start" mb={isMax959 ? '1rem' : "3rem"}>
              { point.title || point.title2 ? <>
                { !isMax667 ? <Box w="xs" h="100%" mr="2rem">
                  <Box w="xs" h="xs" bg='secondary' />
                </Box> : null 
                }
                <Flex direction="column" align="flex-start" id={point.id}>
                  { point.title ? <Text as="h2" textStyle="Light20">{point.title}</Text> : null }
                  { point.title2 ? <Text as="h2" textStyle="Bold20" mb="1rem">{point.title2}</Text> : null }
                </Flex>
              </> : null }
            </Flex>
            { point.content || point.lists || point.button || point.details ? <Flex direction='row' justify={'flex-end'} mb={point.mb ? point.mb : isMax959 ? 0 : 'sm'} >
              <TextContainer alignItems="flex-end" justify="flex-start" width={isMax959 ? '100%' : '75%'} mb={0} alignSelf='unset'>
              <VStack align="flex-start" w="calc(100% - 2rem)" >
              {
                point.content && point.content.length ? point.content.map((item: {mb?: boolean|string; text: string; textStyles?: string;}, i: number) => 
                <TextDescription 
                  key={i}
                  mb={item.mb === true ? isMax959 ? '3rem' : 'md' : item.mb ? item.mb : undefined}
                  text={item.text}
                  textStyles={item.textStyles}
                />) : null
              }
              { point.lists ? point.lists.map((list:any,i:number)=>{
                return <Box key={i}>
                { list.texts ? list.texts.map((item: { text: string; mb?: boolean|string; textStyles?: string; }, i: number) => 
                <TextDescription 
                  key={i}
                  text={item.text}
                  mb={item.mb === true ? isMax959 ? '3rem' : 'md' : item.mb ? item.mb : undefined}
                  textStyles={item.textStyles}
                />) : null }
                <PointList mb={list.mb === true ? isMax959 ? '3rem' : 'md' : list.mb ? list.mb : undefined} type={list.type} content={list.content} minWidth={list?.minWidth} isMax959={isMax959}/>
                { list.details ? list.details.map((detail: {text: string; mb?: boolean|string; textStyles?: string}, i: number) => 
                <TextDescription
                  key={i}
                  text={detail.text}
                  mb={detail.mb === true ? isMax959 ? '3rem' : 'md' : detail.mb ? detail.mb : undefined}
                  textStyles={detail.textStyles}
                />) : null}
                </Box>
                }) : null }
              
              { point.button ? <Flex direction="row" w="100%" justifyContent="flex-end">
              <Link as={NextLink} title={point.button.title} href={point.button.href}><Box position="relative" textAlign="right" mb={point.button.mb === true ? isMax959 ? 0 : 'md' : point.button.mb ? point.button.mb : undefined }>
                <Box 
                  w="6.5rem" h="6.5rem" 
                  border="thin solid rgb(125,1,1)"
                  borderRadius="80%" 
                  position="absolute" top="-2.5rem" right="9.5rem" zIndex="1" 
                  _hover={{ transform: 'scale(1.5)' }} 
                  sx={{
                    transition: 'transform 0.5s ease-in-out',
                  }}
                />
                <Text textStyle="Bold16">{point.button.text}</Text>
              </Box></Link></Flex> : null 
              }
              {
                point.details && point.details.length ? point.details.map((detail: {text: string; mb?: boolean|string; textStyles?: string}, i: number) => 
                <TextDescription
                  key={i}
                  text={detail.text}
                  mb={detail.mb === true ? isMax959 ? '3rem' : 'md' : detail.mb ? detail.mb : undefined}
                  textStyles={detail.textStyles}
                />) : null
              }
              </VStack>
            </TextContainer>
          </Flex> : null }
          </Flex> : null
        }
        </Box>) : null }

        <Breadcrumb separator='•' textAlign="center" fontSize='15px' p={isMax959 ? '0rem 2rem' : "0rem 6rem"}>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>ВШСДТ</BreadcrumbLink>
          </BreadcrumbItem>
          {props?.breadcrumbs ? props?.breadcrumbs.map((crumb:{text: string; href: string}, i:number) => <BreadcrumbItem key={i} isCurrentPage={props?.breadcrumbs.length === i+1}><BreadcrumbLink href={crumb.href}>{crumb.text}</BreadcrumbLink></BreadcrumbItem>) : ''}
        </Breadcrumb>
    </>
  )
})
