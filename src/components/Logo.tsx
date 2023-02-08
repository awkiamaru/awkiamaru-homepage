import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

export const Logo = () => (
  <Link scroll={false} href="/">
    <LogoBox>
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        fontFamily='Inter", sans-serif'
      >
        Luis Fernando
      </Text>
    </LogoBox>
  </Link>
)
