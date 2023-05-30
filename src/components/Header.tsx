import {
  Box,
  Container,
  LinkProps,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Logo } from './Logo'
import { ThemeToggleButton } from './ThemeToogleButton'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import { ReactNode } from 'react'

type LinkItemProps = {
  href: string
  path?: string
  target?: string
  children: ReactNode
} & LinkProps

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      display="inline-flex"
      {...props}
    >
      {children}
    </Link>
  )
}

type HeaderProps = {
  path?: string
}

export const Header = ({ path }: HeaderProps) => {
  return (
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
        justifyContent="space-around"
        alignContent="center"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="sm" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            target="_blank"
            href="https://github.com/awkiamaru/awkiamaru-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box alignContent="end">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem
                  as={Link}
                  href="https://github.com/awkiamaru/awkiamaru-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
