
// "&:hover": {
//     borderBottom: 0,
//     color: "rgb(87,143,163)"
//   }

import { Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const StyledLink = ({children, href="#", textStyles = 'footerText', textProps, ...linkProps}:
  {
    children: any;
    href: string;
    textStyles?: string;
    textProps?: any;
    linkProps?: any;
  }) => {
  
  return <Link
    as={NextLink}
    href={href}
    //style={{textDecoration: 'none'}}
    {...linkProps}>
      <Text textStyle={textStyles} {...textProps}>{children}</Text>
  </Link>;
};