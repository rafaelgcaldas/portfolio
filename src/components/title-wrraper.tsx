'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface TitleWrraperProps {
  children: ReactNode
}
export function TitleWrraper({ children }: TitleWrraperProps) {
  return (
    <motion.div
      initial={{ visibility: 'hidden', opacity: 0 }}
      whileInView={{ visibility: 'visible', opacity: 1 }}
      exit={{ visibility: 'hidden', opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
