import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import { RequestContext } from 'next/dist/server/base-server'
import { ReactNode } from 'react'
import { theme } from './theme'

type AwkiamaruThemeProps = {
  children: ReactNode
  cookies: string
}

export function AwkiamaruTheme({ cookies, children }: AwkiamaruThemeProps) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }: RequestContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
