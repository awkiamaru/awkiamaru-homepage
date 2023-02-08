import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

export const Logo = () => (
  <Link scroll={false} href="/">
    <LogoBox>
      <Image src="/logo.svg" alt="logo" priority height={30} width={30} />
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily='Inter", sans-serif'
      >
        Luis Fernando
      </Text>
    </LogoBox>
  </Link>
)
