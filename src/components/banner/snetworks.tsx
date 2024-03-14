import { Flex, Box, Stack, useMediaQuery, Link } from '@chakra-ui/react'
import { memo } from "react"
import "react-image-gallery/styles/css/image-gallery.css";
import { SocialIcon } from '../buttons/social-icon';
import { IconProvider } from '../icon-provider';
import { PiTelegramLogoThin, PiWhatsappLogoThin, PiYoutubeLogoThin } from 'react-icons/pi';
import { SlSocialVkontakte } from 'react-icons/sl';
import NextLink from 'next/link'

export default memo(function Snetworks(props: any) {
  const { type, telegram, whatsapp, vkontakte, youtube, size, justify, padding } = props;
  const [isMax959] = useMediaQuery('(max-width: 959px)')
  return (
    <Flex direction="column" w="100%" p={isMax959 ? '1rem 2rem' : "0rem 8rem"} >
      <Stack direction="row" justify={justify} w="100%">
        { telegram ?
            <Link as={NextLink} title="Telegram" href={telegram}>
              <SocialIcon icon={
                <IconProvider size={size} icon={<PiTelegramLogoThin />} />
              } ariaLabel='Telegram' />
            </Link> : null
        }
        { vkontakte ?
            <Link as={NextLink} title="Vkontakte" href={vkontakte}>
              <SocialIcon icon={
                <IconProvider size={size} icon={<SlSocialVkontakte />} />
              } ariaLabel='Vkontakte' />
            </Link> : null
        }
        { youtube ?
            <Link as={NextLink} title="Youtube" href={youtube}>
              <SocialIcon icon={
                <IconProvider size={size} icon={<PiYoutubeLogoThin />} />
              } ariaLabel='Youtube' />
            </Link> : null
        }
        { whatsapp ?
            <Link as={NextLink} title="Whatsapp" href={whatsapp}>
              <SocialIcon icon={
                <IconProvider size={size} icon={<PiWhatsappLogoThin />} />
              } ariaLabel='Whatsapp' />
            </Link> : null
        }
      </Stack>
    </Flex>
  )
})
