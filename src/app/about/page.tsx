import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

import githubIcon from '@/assets/github-icon.svg'
import linkedinIcon from '@/assets/linkedin-icon-1.svg'

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

export default function About() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-5">
      <div className="mb-8 w-full rounded-lg border p-4">
        <div className="flex h-56 w-full justify-between rounded-md bg-slate-50 p-8 dark:bg-slate-900">
          <h1 className="text-3xl font-semibold">Olá...</h1>
          <div className="flex gap-6">
            <a href="https://github.com/rafaelgcaldas" target="_blank">
              <Image
                src={githubIcon}
                className="size-6 dark:invert"
                alt="react"
              />
            </a>

            <a href="https://www.linkedin.com/in/rafaelgcaldas" target="_blank">
              <Image
                src={linkedinIcon}
                className="size-6 dark:invert"
                alt="react"
              />
            </a>
          </div>
        </div>
        <div className="-mt-16 flex items-end gap-8">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="size-32">
              <AvatarImage src="https://github.com/rafaelgcaldas.png" />
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <div className="space-y-3 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight">
                Eu sou Rafael Gomes
              </h1>
              <h3 className="text-2xl font-semibold tracking-tight">
                rafaelgcaldasdev@gmail.com
              </h3>
              <p className="max-w-sm leading-normal text-muted-foreground">
                Desenvolvedor Frontend
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-end gap-4">
            <div className="rounded-sm border p-2">
              <Image src={angularIcon} alt="Angular" className="size-10" />
            </div>
            <div className="rounded-sm border p-2">
              <Image src={reactIcon} alt="React" className="size-10" />
            </div>

            <div className="rounded-sm border p-2">
              <Image
                src={nextJsIcon}
                alt="Nextjs"
                className="size-10 dark:invert"
              />
            </div>
            <div className="rounded-sm border p-2">
              <Image src={htmlIcon} alt="HTML 5" className="size-10" />
            </div>
            <div className="rounded-sm border p-2">
              <Image src={cssIcon} alt="CSS 3" className="size-10" />
            </div>
            <div className="rounded-sm border p-2">
              <Image
                src={javaScriptIcon}
                alt="Javascript"
                className="size-10"
              />
            </div>
            <div className="rounded-sm border p-2">
              <Image src={sassIcon} alt="SASS" className="size-10" />
            </div>
            <div className="rounded-sm border p-2">
              <Image src={nodeIcon} alt="NodeJS" className="size-10" />
            </div>
            <div className="rounded-sm border p-2">
              <Image
                src={tailwindCssIcon}
                alt="TailwindCSS"
                className="size-10"
              />
            </div>
            <div className="rounded-sm border p-2">
              <Image src={bootstrapIcon} alt="Bootstrap" className="size-10" />
            </div>
            <div className="rounded-sm border p-2">
              <Image src={chakraUiIcon} alt="Chakra-ui" className="size-10" />
            </div>
            <div className="rounded-sm border p-2">
              <Image
                src={radixUiIcon}
                alt="Radix-ui"
                className="size-10 dark:invert"
              />
            </div>
            <div className="rounded-sm border p-2">
              <Image
                src={typeScriptIcon}
                alt="TypeScript"
                className="size-10"
              />
            </div>
            <div className="rounded-sm border p-2">
              <Image src={pwaIcon} alt="PWA" className="size-10" />
            </div>
            <div className="rounded-sm border p-2">
              <Image src={figmaIcon} alt="Figma" className="size-10" />
            </div>
          </div>
        </div>
      </div>

      <section className="mb-8 w-full rounded-lg border p-4">
        <h2 className="mb-8 text-2xl font-semibold">Minha história</h2>

        <div className="ml-4 space-y-4 leading-relaxed">
          <p>
            Apaixonado por tecnologia e com formação inicial em Técnico em
            mecânica, em 2014 resolvi de mudar de área e iniciei uma transição
            de carreira. Iniciei o curso de Ciência da computação pela
            Universidade de Franca (Unifran), conciliando estudo e trabalho
            ainda como Técnico em mecânica.
          </p>

          <p>
            Em meados de 2016 migrei de vez para a area de tecnologia inciando
            estágio de desenvolvimento web.
          </p>

          <p>
            Em 2017 fui efetivado e permanecendo até 2018, atuando como
            desenvolvedor frontend, construindo e mantendo interfaces em um
            sistema ERP.
          </p>

          <p>
            Em 2018 tive a oportunidade de conhecer o dinâmico e empolgante
            mundo das startups. Com foco no público AGRO, atuei por mais de 5
            anos em diversos projetos, cada um oferecendo desafios e
            oportunidades de crescimento únicos.
          </p>

          <p>
            Hoje possuo uma experiência diversificada em desenvolvimento WEB e
            cada vez mais, empolgado pelas novas ferramentas que surgem a cada
            dia e fascinado por todos os aspectos do design de interfaces e da
            experiência do usuário.
          </p>
        </div>
      </section>

      <div className="mb-8 w-full rounded-lg border p-4">
        <h2 className="text-2xl font-semibold">Experiência</h2>
      </div>

      <div className="mb-8 w-full rounded-lg border p-4">
        <h2 className="text-2xl font-semibold">Formação</h2>
      </div>

      <div className="mb-8 w-full rounded-lg border p-4">
        <h2 className="text-2xl font-semibold">Certificados</h2>
      </div>
    </main>
  )
}
