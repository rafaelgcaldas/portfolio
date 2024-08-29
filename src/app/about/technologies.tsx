'use client'

import { motion } from 'framer-motion'

import angularIcon from '@/assets/angular.svg'
import bootstrapIcon from '@/assets/bootstrap.svg'
import chakraUiIcon from '@/assets/chakra-ui.svg'
import cssIcon from '@/assets/css.svg'
import figmaIcon from '@/assets/figma-icon.svg'
import htmlIcon from '@/assets/html.svg'
import javaScriptIcon from '@/assets/javascript.svg'
import nextJsIcon from '@/assets/next-js.svg'
import nodeIcon from '@/assets/nodejs-icon.svg'
import pwaIcon from '@/assets/pwa.svg'
import radixUiIcon from '@/assets/radix-ui.svg'
import reactIcon from '@/assets/react.svg'
import sassIcon from '@/assets/sas.svg'
import tailwindCssIcon from '@/assets/tailwindcss.svg'
import typeScriptIcon from '@/assets/typescript.svg'
import Image from 'next/image'

const icons = [
  { src: angularIcon, alt: 'angularIcon', class: '' },
  { src: reactIcon, alt: 'reactIcon', class: '' },
  { src: nextJsIcon, alt: 'nextJsIcon', class: 'dark:invert' },
  { src: htmlIcon, alt: 'htmlIcon', class: '' },
  { src: cssIcon, alt: 'cssIcon', class: '' },
  { src: javaScriptIcon, alt: 'javaScriptIcon', class: '' },
  { src: nodeIcon, alt: 'nodeIcon', class: '' },
  { src: sassIcon, alt: 'sassIcon', class: '' },
  { src: tailwindCssIcon, alt: 'tailwindCssIcon', class: '' },
  { src: bootstrapIcon, alt: 'bootstrapIcon', class: '' },
  { src: chakraUiIcon, alt: 'chakraUiIcon', class: '' },
  { src: radixUiIcon, alt: 'radixUiIcon', class: 'dark:invert' }, //
  { src: typeScriptIcon, alt: 'typeScriptIcon', class: '' },
  { src: figmaIcon, alt: 'figmaIcon', class: '' },
  { src: pwaIcon, alt: 'pwaIcon', class: '' },
]

export function Technologies() {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:items-end">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="rounded-sm border p-2"
          initial={{ opacity: 0, visibility: 'hidden', y: 50 }}
          animate={{ opacity: 1, visibility: 'visible', y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            className={`size-10 ${icon.class}`}
          />
        </motion.div>
      ))}
    </div>
  )
}
