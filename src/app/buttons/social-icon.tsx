import { IconButton } from "@chakra-ui/react"
import { memo } from "react"

export const SocialIcon = memo(({icon, ariaLabel}:{icon: any; ariaLabel: string}) => {
  return (<IconButton
      variant='ghost'
      aria-label={ariaLabel}
      icon={icon}
    />
  )
})