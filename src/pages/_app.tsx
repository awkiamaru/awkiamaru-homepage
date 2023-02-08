import { AwkiamaruTheme, Fonts, Footer, Header } from '@awkiamaru/components'
import { Box, Container } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function Website({ Component, pageProps, router }: AppProps) {
  return (
    <AwkiamaruTheme cookies={pageProps.cookies}>
      <Fonts />
      <Box as="main" pb={8}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Luis Fernando - Product-focused FullStack Developer"
          />
          <meta name="author" content="Luis Fernando" />
          <meta name="author" content="awkiamaru" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta
            name="twitter:title"
            content="Luis Fernando - Product-focused FullStack Developer"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@awkiamaru" />
          <meta name="twitter:creator" content="@awkiamaru" />
          <meta name="twitter:image" content="/card.png" />
          <meta
            property="og:site_name"
            content="Luis Fernando - Product-focused FullStack Developer"
          />
          <meta
            name="og:title"
            content="Luis Fernando - Product-focused FullStack Developer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/card.png" />
        </Head>

        <Header />

        <Container maxW="container.md" pt={14}>
          <Component {...pageProps} key={router.route} />
          <Footer />
        </Container>
      </Box>
    </AwkiamaruTheme>
  )
}
