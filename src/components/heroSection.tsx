'use client'

import Image from 'next/image'

import WordPullUp from './word-pull-up'

import { motion } from 'framer-motion'
import { SocialMedia } from './social-media'

import angularIcon from '@/assets/angular.svg'
import bootstrapIcon from '@/assets/bootstrap.svg'
import figmaIcon from '@/assets/figma-icon.svg'
import githubIcon from '@/assets/github-icon.svg'
import linkedinIcon from '@/assets/linkedin-icon-1.svg'
import nextJsIcon from '@/assets/next-js.svg'
import nodeIcon from '@/assets/nodejs-icon.svg'
import reactIcon from '@/assets/react.svg'
import tailwindCssIcon from '@/assets/tailwindcss.svg'
import typeScriptIcon from '@/assets/typescript.svg'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <div className="grid h-[calc(100vh-200px)] w-full gap-4 lg:h-height lg:grid-cols-12 lg:gap-4">
      <div className="flex flex-col items-center justify-center lg:col-span-6">
        <div className="space-y-3 lg:space-y-5">
          <WordPullUp
            className="text-4xl font-extrabold tracking-tight lg:text-5xl"
            words="Olá, eu sou Rafael Gomes"
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-3 lg:space-y-5"
          >
            <h3 className="text-xl font-semibold tracking-tight lg:text-2xl">
              Desenvolvedor Frontend
            </h3>
            <p className="text-sm leading-normal text-muted-foreground lg:max-w-sm">
              Desenvolvendo interfaces modernas e interativas com foco na
              experiência do usuário.
            </p>

            <div className="flex gap-6">
              <SocialMedia
                icon={githubIcon}
                delay={1.6}
                href="https://github.com/rafaelgcaldas"
              />
              <SocialMedia
                icon={linkedinIcon}
                delay={1.9}
                href="https://www.linkedin.com/in/rafaelgcaldas"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex items-center justify-center lg:col-span-6">
        <div className="relative">
          <motion.div className="flex size-40 items-end justify-center overflow-hidden rounded-full border bg-slate-900 lg:size-44">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Image src="/avatar.png" width={163} height={168} alt="Avatar" />
            </motion.div>
          </motion.div>
          <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
            <div className="relative size-64 rounded-full lg:size-72">
              <div className="absolute flex h-16 w-16 origin-[128px_128px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-0 lg:origin-[144px_144px]">
                <div className="animate-orbit-x animate-delay-0">
                  <Image
                    src={angularIcon}
                    className="size-10 animate-fade-in opacity-0 animate-delay-0"
                    alt="react"
                  />
                </div>
              </div>
              <div className="absolute flex h-16 w-16 origin-[128px_128px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[2.5s] lg:origin-[144px_144px]">
                <div className="animate-orbit-x animate-delay-[2.5s]">
                  <Image
                    src={reactIcon}
                    className="size-10 animate-fade-in opacity-0 animate-delay-[2.5s]"
                    alt="react"
                  />
                </div>
              </div>
              <div className="absolute flex h-16 w-16 origin-[128px_128px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[5s] lg:origin-[144px_144px]">
                <div className="animate-orbit-x animate-delay-[5s]">
                  <Image
                    src={nextJsIcon}
                    className="size-10 animate-fade-in opacity-0 animate-delay-[5s] dark:invert"
                    alt="react"
                  />
                </div>
              </div>
              <div className="absolute flex h-16 w-16 origin-[128px_128px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[7.5s] lg:origin-[144px_144px]">
                <div className="animate-orbit-x animate-delay-[7.5s]">
                  <Image
                    src={tailwindCssIcon}
                    className="size-10 animate-fade-in opacity-0 animate-delay-[7.5s]"
                    alt="react"
                  />
                </div>
              </div>
              <div className="absolute flex h-16 w-16 origin-[128px_128px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[10s] lg:origin-[144px_144px]">
                <div className="animate-orbit-x animate-delay-[10s]">
                  <Image
                    src={figmaIcon}
                    className="size-10 animate-fade-in opacity-0 animate-delay-[10s]"
                    alt="react"
                  />
                </div>
              </div>
              <div className="absolute flex h-16 w-16 origin-[128px_128px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[12.5s] lg:origin-[144px_144px]">
                <div className="animate-orbit-x animate-delay-[12.5s]">
                  <Image
                    src={nodeIcon}
                    className="size-10 animate-fade-in opacity-0 animate-delay-[12.5s]"
                    alt="react"
                  />
                </div>
              </div>
              <div className="absolute flex h-16 w-16 origin-[128px_128px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[15s] lg:origin-[144px_144px]">
                <div className="animate-orbit-x animate-delay-[15s]">
                  <Image
                    src={bootstrapIcon}
                    className="size-10 animate-fade-in opacity-0 animate-delay-[15s]"
                    alt="react"
                  />
                </div>
              </div>
              <div className="absolute flex h-16 w-16 origin-[128px_128px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[17.5s] lg:origin-[144px_144px]">
                <div className="animate-orbit-x animate-delay-[17.5s]">
                  <Image
                    src={typeScriptIcon}
                    className="size-10 animate-fade-in opacity-0 animate-delay-[17.5s]"
                    alt="react"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block"
        href="#projects"
      >
        <ArrowDown />
      </a>
    </div>
  )
}
