import { AwkiamaruTheme, Fonts, Header } from '@awkiamaru/components'
import type { AppProps } from 'next/app'

export default function Website({ Component, pageProps, router }: AppProps) {
  return (
    <AwkiamaruTheme cookies={pageProps.cookies}>
      <Fonts />
      <Header />
      <Component {...pageProps} key={router.route} />
    </AwkiamaruTheme>
  )
}
