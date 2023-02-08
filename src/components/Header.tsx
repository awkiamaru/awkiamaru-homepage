import {
  Box,
  Container,
  Flex,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { ThemeToggleButton } from './ThemeToogleButton'

export const Header = () => (
  <Box
    position="fixed"
    as="nav"
    w="100%"
    bg={useColorModeValue('#ffffff38', '#12121224')}
    css={{ backdropFilter: 'blur(10px)' }}
    zIndex={2}
    paddingY="4"
  >
    <Container
      display="flex"
      maxWidth="container.lg"
      justifyContent="space-between"
      alignContent="center"
    >
      <Flex alignItems="center" justifyContent="center">
        <Heading as="h1" size="md" letterSpacing={'tight'}>
          <Logo />
        </Heading>
      </Flex>
      <ThemeToggleButton />
    </Container>
  </Box>
)
