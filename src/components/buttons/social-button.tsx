import { Button, Text } from "@chakra-ui/react";
import { memo } from "react";

export const SocialButton = ({
  title, 
  link,
  pt = 0,
  h = 1.3,
  buttonProps = {},
  leftIcon,
}:{
  title?: string; 
  link?: string;
  pt?: number;
  h?: number;
  buttonProps?: any;
  leftIcon?: any;
}) => {
  return (<Button variant="ghost" as='a' target="_blank" href={link} h={`${h}rem`} size='xs' pt={`${pt}rem`} leftIcon={leftIcon}>
      <Text textStyle="footerText">
        {title}
      </Text>
     </Button>
  )
};

SocialButton.displayName = 'SocialButton';