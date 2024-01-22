import { Text } from "@chakra-ui/react";
import { memo } from "react";

export const TextDescription = memo(({
  textStyles = 'Regular16',
  mb = 'xs',
  as = 'p',
  text
}:{
  textStyles?: string;
  mb?: string | number;
  as?: any;
  text: string;
}) => {
  return (
    <Text as={as} textStyle={textStyles} mb={mb}>
      {text}
    </Text>
  )
})