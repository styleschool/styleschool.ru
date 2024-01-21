
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


export const HoveredStyledLink = ({text, url}:{text: string; url: string}) => {
  return (<StyledLink 
    textProps={{
      sx: {
        textDecoration: 'underline',
        _hover: {
          textDecoration: 'none',
          color: 'rgb(87,143,163)'
        }
      }
    }}
    href={url}>{text}</StyledLink>)
}