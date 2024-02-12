import { Flex, useMediaQuery } from "@chakra-ui/react";
import { memo } from "react";

export const TextContainer = memo(({
  children, 
  mb = 'md', 
  alignSelf = 'flex-end',
  width,
  direction = 'column',
  props
}:{
  children: any; 
  mb?: string | number; 
  alignSelf?: string;
  width?: string;
  direction?: string;
  [key: string]: any
}) => {
  const [isMax628] = useMediaQuery('(max-width: 628px)');
  const [isMax959] = useMediaQuery('(max-width: 959px)');

  return (<Flex direction={direction} w={width ? width :(isMax959 ? '100%' : '70vw')} mb={mb} alignSelf={alignSelf} {...props}>
      {children}
    </Flex>
  )
})