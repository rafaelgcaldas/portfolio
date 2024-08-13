import Image from 'next/image'

import angularIcon from '@/assets/angular.svg'
import bootstrapIcon from '@/assets/bootstrap.svg'
import figmaIcon from '@/assets/figma-icon.svg'
import githubIcon from '@/assets/github-icon.svg'
import htmlIcon from '@/assets/html.svg'
import crmImage from '@/assets/images/banner-2.webp'
import linkedinIcon from '@/assets/linkedin-icon-1.svg'
import nextJsIcon from '@/assets/next-js.svg'
import nodeIcon from '@/assets/nodejs-icon.svg'
import reactIcon from '@/assets/react.svg'
import tailwindCssIcon from '@/assets/tailwindcss.svg'
import { ArrowDown } from 'lucide-react'

import marketplaceImage from '@/assets/images/banner-3.webp'
import surveyImage from '@/assets/images/banner-4.webp'
import portalImage from '@/assets/images/banner-5.webp'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-5">
      <section className="mb-16 flex max-w-[1200px] flex-col items-center justify-between">
        <div className="grid h-height w-full grid-cols-12 gap-4">
          <div className="col-span-6 flex flex-col items-center justify-center">
            <div className="space-y-5">
              <h1 className="text-5xl font-extrabold tracking-tight">
                Olá, eu sou Rafael Gomes
              </h1>
              <h3 className="text-2xl font-semibold tracking-tight">
                Desenvolvedor Frontend
              </h3>
              <p className="max-w-sm leading-normal text-muted-foreground">
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

          <div className="col-span-6 flex items-center justify-center">
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
                        src={htmlIcon}
                        className="size-10 animate-fade-in opacity-0 animate-delay-[17.5s]"
                        alt="react"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ArrowDown className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce" />
        </div>
      </section>

      <section>
        <h2 className="mb-16 text-3xl font-bold tracking-tight">
          Meus trabalhos recentes
        </h2>
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-start-7 -col-end-1 row-start-1 -row-end-1 flex flex-col items-end space-y-6">
            <h2 className="text-2xl font-bold">IZagro CRM</h2>
            <div className="relative z-20 w-full rounded-sm bg-slate-50 p-4 text-right shadow-md dark:bg-slate-900">
              <p className="font-light text-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                viverra urna eget sapien blandit, non sollicitudin augue congue.
                Donec condimentum augue viverra, feugiat arcu quis, elementum
                turpis. Vivamus varius, magna quis facilisis convallis, velit
                est venenatis augue, ac hendrerit libero justo ornare dui.
              </p>
            </div>
            <div className="flex">
              <div className="size-12 bg-slate-300"></div>
            </div>
          </div>
          <div className="relative z-10 col-start-1 col-end-8 row-start-1 -row-end-1">
            <div className="w-full rounded-md bg-gradient-to-r from-sky-500/10 to-indigo-500/40">
              <Image src={crmImage} alt="CRM image" />
            </div>
          </div>
        </div>

        <Separator className="my-20" />

        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-start-1 col-end-7 row-start-1 -row-end-1 flex flex-col space-y-6">
            <h2 className="text-2xl font-bold">Marketplace IZagro</h2>
            <div className="relative z-20 h-40 w-full rounded-sm bg-slate-50 p-4 shadow-md dark:bg-slate-900">
              <p className="text-foreground">teste</p>
            </div>
            <div className="flex">
              <div className="size-12 bg-slate-300"></div>
            </div>
          </div>
          <div className="relative z-10 col-start-6 -col-end-1 row-start-1 -row-end-1">
            <div className="w-full rounded-md bg-gradient-to-r from-indigo-500/10 to-sky-500/40">
              <Image src={marketplaceImage} alt="CRM image" />
            </div>
          </div>
        </div>

        <Separator className="my-20" />

        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-start-7 -col-end-1 row-start-1 -row-end-1 flex flex-col items-end space-y-6">
            <h2 className="text-2xl font-bold">IZagro Survey</h2>
            <div className="relative z-20 h-40 w-full rounded-sm bg-slate-50 p-4 shadow-md dark:bg-slate-900">
              <p className="text-foreground">teste</p>
            </div>
            <div className="flex">
              <div className="size-12 bg-slate-300"></div>
            </div>
          </div>
          <div className="relative z-10 col-start-1 col-end-8 row-start-1 -row-end-1">
            <div className="w-full rounded-md bg-gradient-to-r from-sky-500/10 to-indigo-500/40 p-4">
              <Image src={surveyImage} alt="CRM image" />
            </div>
          </div>
        </div>

        <Separator className="my-20" />

        <div className="mb-36 grid grid-cols-12 items-center gap-4">
          <div className="col-start-1 col-end-7 row-start-1 -row-end-1 flex flex-col space-y-6">
            <h2 className="text-2xl font-bold">Portal de fidelidade</h2>
            <div className="relative z-20 h-40 w-full rounded-sm bg-slate-50 p-4 shadow-md dark:bg-slate-900">
              <p className="text-foreground">teste</p>
            </div>
            <div className="flex">
              <div className="size-12 bg-slate-300"></div>
            </div>
          </div>
          <div className="relative z-10 col-start-6 -col-end-1 row-start-1 -row-end-1">
            <div className="w-full rounded-md bg-gradient-to-r from-indigo-500/10 to-sky-500/40">
              <Image src={portalImage} alt="CRM image" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
