import { Flex, ListItem, UnorderedList, useMediaQuery, Text, Stack, Link } from "@chakra-ui/react";
import { TextDescription } from "./text-description";
import { memo } from "react";
import NextLink from 'next/link'

export const UnorderList = memo(({children, ...props}:{children: any; [key: string]: any}) => {
  const [isMax628] = useMediaQuery('(max-width: 628px)');
  return (<UnorderedList
      sx={{
        '&>*:not(:last-child)': {
          mb: 'xs',
        }
      }}
      {...props}
    >
      {children}
    </UnorderedList>
  )
})

export const PointList = (props: {
  type: string;
  content: any;
  isMax959:boolean;
  mb?: string;
}) => {
  const { type, content, isMax959, mb } = props;
  return type === 'column' ? 
    <UnorderList mb={mb}>
      {content.map ? content.map((item:{text: string; endLink?: {href: string; title: string; text: string}}, i:number) => (<ListItem key={i}>
        <Text key={i} textStyle="Regular16">
          {item.text ? `${item.text}` : null} {item.endLink ? <Link as={NextLink} title={item.endLink.title} href={item.endLink.href}>{item.endLink.text}</Link> : null}
        </Text>
      </ListItem>)) : null}
    </UnorderList>
  : <Flex direction={isMax959 ? "column" : "row"} mb="md">
     <Flex direction="column" alignItems="flex-start" justify="flex-start" w={isMax959 ? '100%' : '50%'} mr={isMax959 ? 0 : '2rem'}>
      {content?.['1column'] ? content?.['1column'].map((item:any, i:number) => 
       <Stack direction={!isMax959 ? 'row' : 'column'} key={i} spacing={isMax959 ? '0.5rem' : '1rem'} mb="xs">
         { item['1part'] ? <Text textStyle="Bold16">{item['1part']}</Text> : null }
         { item['2part'] ? <TextDescription mb={0} text={item['2part']} /> : null }
       </Stack> ) : null}
     </Flex>
     <Flex mb={mb} direction="column" alignItems="flex-start" justify="flex-start" w={isMax959 ? '100%' : '50%'}>
     {content?.['2column'] ? content?.['2column'].map((item:any, i:number) => 
       <Stack direction={!isMax959 ? 'row' : 'column'} key={i} spacing={isMax959 ? '0.5rem' : '1rem'} mb="xs">
         { item['1part'] ? <Text textStyle="Bold16">{item['1part']}</Text> : null }
         { item['2part'] ? <TextDescription mb={0} text={item['2part']} /> : null }
       </Stack> ) : null}
     </Flex>
   </Flex>;
}