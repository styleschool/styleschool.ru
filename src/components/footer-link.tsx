
// "&:hover": {
//     borderBottom: 0,
//     color: "rgb(87,143,163)"
//   }

import { Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const StyledLink = ({text, href="#", textStyles = 'footerText', textProps, p, ...linkProps}:
  {
    text: any;
    href: string;
    textStyles?: string;
    textProps?: any;
    p?: string;
    linkProps?: any;
  }) => {

  return <Link
    as={NextLink}
    href={href}
    p={p}
    //style={{textDecoration: 'none'}}
    {...linkProps}
    >
      <Text textStyle={textStyles} {...textProps}>{text}</Text>
  </Link>;
};

export const HoveredStyledLink = ({text, href}:{text: string; href: string}) => {
  return (<StyledLink
    text={text}
    href={href}
    textProps={{
      sx: {
        textDecoration: 'underline',
        _hover: {
          textDecorationColor: 'Cblue',
          color: 'Cblue',
        }
      }
    }}/>)
}