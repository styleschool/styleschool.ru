import { Button, Text } from "@chakra-ui/react";
import { memo } from "react";

export const SocialButton = memo<any>(({
  title = 'Telegram', 
  href = "https://t.me/styleschoolru",
  buttonProps = {},
  leftIcon,
}:{
  title?: string; 
  href?: string;
  buttonProps?: any;
  leftIcon?: any;
}) => {
  return (<Button variant="ghost" as='a' target="_blank" href={href} h='1.3rem' size='xs' p='0' leftIcon={leftIcon}>
      <Text textStyle="footerText">
        {title}
      </Text>
     </Button>
  )
});

SocialButton.displayName = 'SocialButton';