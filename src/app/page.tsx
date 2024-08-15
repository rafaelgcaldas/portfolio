import Image from 'next/image'

import angularIcon from '@/assets/angular.svg'
import bootstrapIcon from '@/assets/bootstrap.svg'
import chakraUiIcon from '@/assets/chakra-ui.svg'
import figmaIcon from '@/assets/figma-icon.svg'
import githubIcon from '@/assets/github-icon.svg'
import htmlIcon from '@/assets/html.svg'
import crmImage from '@/assets/images/banner-2.webp'
import linkedinIcon from '@/assets/linkedin-icon-1.svg'
import nextJsIcon from '@/assets/next-js.svg'
import nodeIcon from '@/assets/nodejs-icon.svg'
import pwaIcon from '@/assets/pwa.svg'
import radixUiIcon from '@/assets/radix-ui.svg'
import reactIcon from '@/assets/react.svg'
import sassIcon from '@/assets/sas.svg'
import springIcon from '@/assets/spring.svg'
import tailwindCssIcon from '@/assets/tailwindcss.svg'
import typeScriptIcon from '@/assets/typescript.svg'
import { ArrowDown } from 'lucide-react'

import marketplaceImage from '@/assets/images/banner-3.webp'
import surveyImage from '@/assets/images/banner-4.webp'
import portalImage from '@/assets/images/banner-5.webp'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-5">
      <section className="mb-24 flex max-w-[1200px] flex-col items-center justify-between lg:mb-20">
        <div className="grid h-[calc(100vh-200px)] w-full gap-4 lg:h-height lg:grid-cols-12 lg:gap-4">
          <div className="flex flex-col items-center lg:col-span-6 lg:justify-center">
            <div className="space-y-3 lg:space-y-5">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Olá, eu sou Rafael Gomes
              </h1>
              <h3 className="text-xl font-semibold tracking-tight lg:text-2xl">
                Desenvolvedor Frontend
              </h3>
              <p className="text-sm leading-normal text-muted-foreground lg:max-w-sm">
                Desenvolvendo interfaces modernas e interativas com foco na
                experiência do usuário.
              </p>

              <div className="flex gap-6">
                <a href="https://github.com/rafaelgcaldas" target="_blank">
                  <Image
                    src={githubIcon}
                    className="size-6 dark:invert"
                    alt="react"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/rafaelgcaldas"
                  target="_blank"
                >
                  <Image
                    src={linkedinIcon}
                    className="size-6 dark:invert"
                    alt="react"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:col-span-6">
            <div className="relative">
              <div className="flex size-44 items-end justify-center overflow-hidden rounded-full border bg-slate-900">
                <Image
                  src="/avatar.png"
                  width={163}
                  height={168}
                  alt="Avatar"
                />
              </div>
              <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
                <div className="relative h-72 w-72 rounded-full">
                  <div className="absolute flex h-16 w-16 origin-[144px_144px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-0">
                    <div className="animate-orbit-x animate-delay-0">
                      <Image
                        src={angularIcon}
                        className="size-10 animate-fade-in opacity-0 animate-delay-0"
                        alt="react"
                      />
                    </div>
                  </div>
                  <div className="absolute flex h-16 w-16 origin-[144px_144px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[2.5s]">
                    <div className="animate-orbit-x animate-delay-[2.5s]">
                      <Image
                        src={reactIcon}
                        className="size-10 animate-fade-in opacity-0 animate-delay-[2.5s]"
                        alt="react"
                      />
                    </div>
                  </div>
                  <div className="absolute flex h-16 w-16 origin-[144px_144px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[5s]">
                    <div className="animate-orbit-x animate-delay-[5s]">
                      <Image
                        src={nextJsIcon}
                        className="size-10 animate-fade-in opacity-0 animate-delay-[5s] dark:invert"
                        alt="react"
                      />
                    </div>
                  </div>
                  <div className="absolute flex h-16 w-16 origin-[144px_144px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[7.5s]">
                    <div className="animate-orbit-x animate-delay-[7.5s]">
                      <Image
                        src={tailwindCssIcon}
                        className="size-10 animate-fade-in opacity-0 animate-delay-[7.5s]"
                        alt="react"
                      />
                    </div>
                  </div>
                  <div className="absolute flex h-16 w-16 origin-[144px_144px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[10s]">
                    <div className="animate-orbit-x animate-delay-[10s]">
                      <Image
                        src={figmaIcon}
                        className="size-10 animate-fade-in opacity-0 animate-delay-[10s]"
                        alt="react"
                      />
                    </div>
                  </div>
                  <div className="absolute flex h-16 w-16 origin-[144px_144px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[12.5s]">
                    <div className="animate-orbit-x animate-delay-[12.5s]">
                      <Image
                        src={nodeIcon}
                        className="size-10 animate-fade-in opacity-0 animate-delay-[12.5s]"
                        alt="react"
                      />
                    </div>
                  </div>
                  <div className="absolute flex h-16 w-16 origin-[144px_144px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[15s]">
                    <div className="animate-orbit-x animate-delay-[15s]">
                      <Image
                        src={bootstrapIcon}
                        className="size-10 animate-fade-in opacity-0 animate-delay-[15s]"
                        alt="react"
                      />
                    </div>
                  </div>
                  <div className="absolute flex h-16 w-16 origin-[144px_144px] animate-orbit items-center justify-center rounded-full bg-transparent font-bold text-white animate-delay-[17.5s]">
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
      </section>

      <section className="mt-4" id="projects">
        <h2 className="mb-10 text-2xl font-bold tracking-tight lg:mb-12 lg:text-3xl">
          Meus trabalhos recentes
        </h2>
        <div className="grid items-center lg:grid-cols-12 lg:gap-4 lg:p-6">
          <div className="col-start-7 -col-end-1 row-start-1 -row-end-1 mb-4 flex flex-col space-y-6 lg:items-end">
            <h2 className="text-xl font-bold lg:text-2xl">IZagro CRM</h2>
            <div className="relative z-20 w-full rounded-sm bg-slate-50 p-4 dark:bg-slate-900 lg:text-right lg:shadow-md">
              <p className="text-sm font-light text-foreground lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                viverra urna eget sapien blandit, non sollicitudin augue congue.
                Donec condimentum augue viverra, feugiat arcu quis, elementum
                turpis. Vivamus varius, magna quis facilisis convallis, velit
                est venenatis augue, ac hendrerit libero justo ornare dui.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex w-full items-center justify-between gap-4">
                <Image
                  src={angularIcon}
                  alt="Angular"
                  className="size-8 lg:size-10"
                />
                <Image src={htmlIcon} alt="Html" className="size-7 lg:size-9" />
                <Image
                  src={sassIcon}
                  alt="Sass"
                  className="size-8 lg:size-10"
                />
                <Image
                  src={typeScriptIcon}
                  alt="TypeScript"
                  className="size-8 lg:size-10"
                />
                <Image
                  src={bootstrapIcon}
                  alt="Bootstrap"
                  className="size-12"
                />
                <Image
                  src={springIcon}
                  alt="Spring boot"
                  className="size-8 lg:size-10"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 col-start-1 col-end-8 lg:row-start-1 lg:-row-end-1">
            <div className="w-full rounded-md bg-gradient-to-r from-sky-500/10 to-indigo-500/40">
              <Image src={crmImage} alt="CRM image" />
            </div>
          </div>
        </div>

        <Separator className="my-16 lg:my-20" />

        <div className="grid items-center lg:grid-cols-12 lg:gap-4 lg:p-6">
          <div className="col-start-1 col-end-7 row-start-1 -row-end-1 mb-4 flex flex-col space-y-6">
            <h2 className="text-2xl font-bold">Marketplace IZagro</h2>
            <div className="relative z-20 w-full rounded-sm bg-slate-50 p-4 shadow-md dark:bg-slate-900">
              <p className="font-light text-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                viverra urna eget sapien blandit, non sollicitudin augue congue.
                Donec condimentum augue viverra, feugiat arcu quis, elementum
                turpis. Vivamus varius, magna quis facilisis convallis, velit
                est venenatis augue, ac hendrerit libero justo ornare dui.
              </p>
            </div>
            <div className="flex justify-between gap-6 lg:justify-start">
              <Image
                className="size-8 lg:size-10"
                src={reactIcon}
                alt="React"
              />
              <Image
                className="size-8 dark:invert lg:size-10"
                src={nextJsIcon}
                alt="NextJS"
              />
              <Image
                className="size-8 lg:size-10"
                src={chakraUiIcon}
                alt="Chakra UI"
              />
              <Image
                className="size-8 lg:size-10"
                src={typeScriptIcon}
                alt="TypeScript"
              />
              <Image
                className="size-8 lg:size-10"
                src={springIcon}
                alt="Spring boot"
              />
            </div>
          </div>
          <div className="relative z-10 col-start-1 col-end-8 lg:col-start-6 lg:-col-end-1 lg:row-start-1 lg:-row-end-1">
            <div className="w-full rounded-md bg-gradient-to-r from-indigo-500/10 to-sky-500/40">
              <Image src={marketplaceImage} alt="CRM image" />
            </div>
          </div>
        </div>

        <Separator className="my-16 lg:my-20" />

        <div className="grid items-center lg:grid-cols-12 lg:gap-4 lg:p-6">
          <div className="col-start-7 -col-end-1 row-start-1 -row-end-1 mb-4 flex flex-col space-y-6 lg:items-end">
            <h2 className="text-2xl font-bold">IZagro Survey</h2>
            <div className="relative z-20 w-full rounded-sm bg-slate-50 p-4 shadow-md dark:bg-slate-900">
              <p className="font-light text-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                viverra urna eget sapien blandit, non sollicitudin augue congue.
                Donec condimentum augue viverra, feugiat arcu quis, elementum
                turpis. Vivamus varius, magna quis facilisis convallis, velit
                est venenatis augue, ac hendrerit libero justo ornare dui.
              </p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <Image
                src={angularIcon}
                alt="Angular"
                className="size-8 lg:size-10"
              />
              <Image src={htmlIcon} alt="Html" className="size-7 lg:size-9" />
              <Image src={sassIcon} alt="Sass" className="size-8 lg:size-10" />
              <Image
                src={typeScriptIcon}
                alt="TypeScript"
                className="size-8 lg:size-10"
              />
              <Image
                src={bootstrapIcon}
                alt="Bootstrap"
                className="size-10 lg:size-12"
              />
              <Image src={pwaIcon} alt="PWA" className="size-14 lg:size-16" />
              <Image
                src={springIcon}
                alt="Spring boot"
                className="size-8 lg:size-10"
              />
            </div>
          </div>
          <div className="relative z-10 col-start-1 col-end-8 lg:row-start-1 lg:-row-end-1">
            <div className="w-full rounded-md bg-gradient-to-r from-sky-500/10 to-indigo-500/40 p-4">
              <Image src={surveyImage} alt="CRM image" />
            </div>
          </div>
        </div>

        <Separator className="my-16 lg:my-20" />

        <div className="mb-36 grid items-center lg:grid-cols-12 lg:gap-4 lg:p-6">
          <div className="col-start-1 col-end-7 row-start-1 -row-end-1 mb-4 flex flex-col space-y-6">
            <h2 className="text-2xl font-bold">Portal de fidelidade</h2>
            <div className="relative z-20 w-full rounded-sm bg-slate-50 p-4 shadow-md dark:bg-slate-900">
              <p className="font-light text-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                viverra urna eget sapien blandit, non sollicitudin augue congue.
                Donec condimentum augue viverra, feugiat arcu quis, elementum
                turpis. Vivamus varius, magna quis facilisis convallis, velit
                est venenatis augue, ac hendrerit libero justo ornare dui.
              </p>
            </div>
            <div className="flex justify-between gap-6 lg:justify-start">
              <Image
                className="size-8 lg:size-10"
                src={reactIcon}
                alt="React"
              />
              <Image
                className="size-8 dark:invert lg:size-10"
                src={nextJsIcon}
                alt="NextJS"
              />
              <Image
                className="size-8 lg:size-10"
                src={tailwindCssIcon}
                alt="TailwindCss"
              />
              <Image
                className="size-8 dark:invert lg:size-10"
                src={radixUiIcon}
                alt="Radix UI"
              />
              <Image
                className="size-8 lg:size-10"
                src={typeScriptIcon}
                alt="TypeScript"
              />
              <Image className="size-10" src={springIcon} alt="Spring boot" />
            </div>
          </div>
          <div className="relative z-10 col-start-1 col-end-8 lg:col-start-6 lg:-col-end-1 lg:row-start-1 lg:-row-end-1">
            <div className="w-full rounded-md bg-gradient-to-r from-indigo-500/10 to-sky-500/40">
              <Image src={portalImage} alt="CRM image" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
