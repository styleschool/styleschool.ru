import { Text } from "@chakra-ui/react";
import { memo } from "react";

export const TextDescription = memo(({
  textStyles = 'Regular16',
  mb = 'xs',
  as = 'p',
  text,
  align = 'justify'
}:{
  textStyles?: string;
  mb?: string | number;
  as?: any;
  text: string;
  align?: any;
}) => {
  return (
    <Text as={as} textStyle={textStyles} mb={mb} align={align}>
      {text}
    </Text>
  )
})

TextDescription.displayName = 'TextDescription';