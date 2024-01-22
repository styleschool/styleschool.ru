import { Flex, ListItem, UnorderedList, useMediaQuery } from "@chakra-ui/react";
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