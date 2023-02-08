import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

export const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ x: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ x: 5, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<BsMoonFill />, <BsSunFill />)}
          onClick={toggleColorMode}
          isRound
        />
      </motion.div>
    </AnimatePresence>
  )
}
