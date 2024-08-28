'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { AnchorHTMLAttributes } from 'react'

interface SocialMediaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  delay?: number
}

export function SocialMedia({ delay = 0.3, icon, href }: SocialMediaProps) {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image src={icon} className="size-6 dark:invert" alt="Github icon" />
    </motion.a>
  )
}
