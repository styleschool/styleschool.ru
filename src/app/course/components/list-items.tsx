import { Flex, ListItem, UnorderedList, useMediaQuery, Text, Stack } from "@chakra-ui/react";
import { TextDescription } from "./text-description";
import { memo } from "react";

export const UnorderList = memo(({children, props}:{children: any; [key: string]: any}) => {
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

export const PointList = (props) => {
  const { type, content, isMax959 } = props;
  return type === 'column' ? 
    <UnorderList>
      {content?.length ? content.map((item, i) => (<ListItem key={i}>
        <Text key={i} textStyle="Regular16">
          {item}
        </Text>
      </ListItem>)) : null}
    </UnorderList>
  : <Flex direction={isMax959 ? "column" : "row"} mb="md">
     <Flex direction="column" alignItems="flex-start" justify="flex-start" w={isMax959 ? '100%' : '50%'} mr={isMax959 ? 0 : '2rem'}>
      {content?.['1column'] ? content?.['1column'].map((item, i) => 
       <Stack direction={!isMax959 ? 'row' : 'column'} key={i} spacing={isMax959 ? '0.5rem' : '1rem'} mb="xs">
         { item['1part'] ? <Text textStyle="Bold16">{item['1part']}</Text> : null }
         { item['2part'] ? <TextDescription mb={0} text={item['2part']} /> : null }
       </Stack> ) : null}
     </Flex>
     <Flex direction="column" alignItems="flex-start" justify="flex-start" w={isMax959 ? '100%' : '50%'}>
     {content?.['2column'] ? content?.['2column'].map((item, i) => 
       <Stack direction={!isMax959 ? 'row' : 'column'} key={i} spacing={isMax959 ? '0.5rem' : '1rem'} mb="xs">
         { item['1part'] ? <Text textStyle="Bold16">{item['1part']}</Text> : null }
         { item['2part'] ? <TextDescription mb={0} text={item['2part']} /> : null }
       </Stack> ) : null}
     </Flex>
   </Flex>;
}