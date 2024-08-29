'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface JobsWrraperProps {
  children: ReactNode
}

export function JobsWrraper({ children }: JobsWrraperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, visibility: 'hidden' }}
      whileInView={{ opacity: 1, y: 0, visibility: 'visible' }}
      exit={{ opacity: 0, y: 50, visibility: 'hidden' }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  )
}
