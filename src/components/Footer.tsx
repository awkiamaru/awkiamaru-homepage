import { Box } from '@chakra-ui/react'

export const Footer = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    opacity={0.4}
    fontSize="sm"
  >
    &copy; {new Date().getFullYear()} Luis Fernando Poma. All Rights Reserved.
  </Box>
)
