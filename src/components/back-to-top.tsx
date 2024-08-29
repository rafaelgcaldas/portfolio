'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'

export function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!showButton && window.scrollY > 500) setShowButton(true)
    if (showButton && window.scrollY <= 500) setShowButton(false)
  }, [showButton])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  if (!showButton) return null

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          className="fixed bottom-4 right-4 z-20"
          initial={{ opacity: 0, visibility: 'hidden', y: 30 }}
          animate={{ opacity: 1, visibility: 'visible', y: 0 }}
          exit={{ opacity: 0, visibility: 'hidden', y: 30 }}
        >
          <Button
            variant="ghost"
            className="p-2 text-3xl"
            onClick={scrollToTop}
          >
            ☝️
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
