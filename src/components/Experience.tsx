import { Text, GridItem, Image, Grid, Link, Flex, Box } from '@chakra-ui/react'
import { BsArrowUpRight } from 'react-icons/bs'

type ExperienceProps = {
  side?: string
  title?: string
  desc?: string
  stack?: string
  image?: string
  href?: string
}

export const Experience = ({
  side,
  title,
  desc,
  stack,
  image,
  href
}: ExperienceProps) => (
  <Grid px="0" templateColumns="repeat(4, 1fr)" mb={10}>
    <GridItem colSpan={{ base: 4, sm: 1 }}>
      <Text opacity={0.5} fontSize="small" fontWeight="normal">
        {side}
      </Text>
    </GridItem>
    <GridItem colSpan={{ base: 4, sm: 3 }}>
      <Flex direction="row" alignItems="center">
        {image && <Image width="36px" mb={4} src={image} alt={title} />}
        <Link href={href} display="flex" alignItems="center">
          {title}
          {href && (
            <Box paddingLeft="1">
              <BsArrowUpRight size="12" />
            </Box>
          )}
        </Link>
      </Flex>
      {desc && (
        <Text my={2} fontSize="medium">
          {desc}
        </Text>
      )}
      {stack && (
        <Text opacity={0.5} fontSize="small" fontWeight="normal">
          {stack}
        </Text>
      )}
    </GridItem>
  </Grid>
)
