import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

import githubIcon from '@/assets/github-icon.svg'
import linkedinIcon from '@/assets/linkedin-icon-1.svg'

import microsoftIcon from '@/assets/microsoft.svg'
import rocketseatIcon from '@/assets/rocketseat.svg'
import { Separator } from '@/components/ui/separator'

import { SocialMedia } from '../../components/social-media'
import { Technologies } from './technologies'

export default function About() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-5">
      <div className="mb-8 w-full rounded-lg border p-4">
        <div className="flex h-48 w-full justify-between rounded-md bg-slate-50 p-8 dark:bg-slate-900 lg:h-56">
          <h1 className="text-3xl font-semibold">Olá...</h1>
          <div className="flex gap-6">
            <SocialMedia
              icon={githubIcon}
              delay={0.1}
              href="https://github.com/rafaelgcaldas"
            />
            <SocialMedia
              icon={linkedinIcon}
              delay={0.3}
              href="https://www.linkedin.com/in/rafaelgcaldas"
            />
          </div>
        </div>
        <div className="-mt-16 flex flex-col items-center gap-8 lg:flex-row lg:items-end">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="size-32">
              <AvatarImage src="https://github.com/rafaelgcaldas.png" />
              <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <div className="space-y-2 text-center lg:space-y-3">
              <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
                Eu sou Rafael Gomes
              </h1>
              <h3 className="text-xl font-semibold tracking-tight lg:text-2xl">
                rafaelgcaldasdev@gmail.com
              </h3>
              <p className="max-w-sm leading-normal text-muted-foreground">
                Desenvolvedor Frontend
              </p>
            </div>
          </div>

          <Technologies />
        </div>
      </div>

      <section className="mb-8 w-full rounded-lg border p-4">
        <h2 className="mb-8 text-2xl font-semibold">Minha história</h2>

        <div className="space-y-4 text-sm leading-relaxed lg:ml-4 lg:text-base">
          <p className="">
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

      <section className="mb-8 w-full rounded-lg border p-4">
        <h2 className="mb-8 text-2xl font-semibold">Experiência</h2>
        <div className="relative mb-10 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
          <header className="z-10 mb-2 mt-1 text-base font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            01/2019 - 08/2024
          </header>
          <div className="sm:col-span-6">
            <h3 className="mb-4 font-semibold leading-snug text-foreground">
              Desenvolvedor Frontend (Pleno) - IZagro (Franca - SP)
            </h3>
            <p className="mb-4 items-center leading-normal text-muted-foreground">
              Construindo e mantendo sites, painéis administrativos, dashboards,
              protótipos e components. Em colaboração com equipes
              multifuncionais, como desenvolvedores, engenheiros agrônomos,
              técnicos, designers e marketing desenvovendo ferramentas para
              gerenciamento de produtos e promovendo acessibildade ao público
              agro como, produtores e revendas.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                Angular
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                React
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                TailwindCss
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                Bootstrap
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                TypeScript
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                NextJS
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                Saas
              </span>
            </div>
          </div>
        </div>

        <div className="relative mb-10 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
          <header className="z-10 mb-2 mt-1 text-base font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            05/2017 - 05/2018
          </header>
          <div className="sm:col-span-6">
            <h3 className="mb-4 font-semibold leading-snug text-foreground">
              Desenvolvedor Frontend (Júnior) - SMN (Franca - SP)
            </h3>
            <p className="mb-4 leading-normal text-muted-foreground">
              Construindo, mantendo e estilizando interfaces para um sistema ERP
              em colaboração com a equipe de backend e analistas de negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                HTML
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                CSS
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                Javascript
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                JQuery
              </span>
            </div>
          </div>
        </div>

        <div className="relative mb-10 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
          <header className="z-10 mb-2 mt-1 text-base font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            06/2016 - 05/2017
          </header>
          <div className="sm:col-span-6">
            <h3 className="mb-4 font-semibold leading-snug text-foreground">
              Desenvolvedor Frontend (Estagiário) - SMN (Franca - SP)
            </h3>
            <p className="mb-4 leading-normal text-muted-foreground">
              Criando e estilizando páginas web utilizando HTML e CSS e
              adicionando interatividade às páginas web com JavaScript.
              Introdução à frameworks e bibliotecas modernas como React e
              Angular para desenvolver componentes de interface de usuário
              dinâmicos. Realizando atividades e desafios propostos pelo
              supervisor do estágio.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                HTML
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                CSS
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                Angular
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                React
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                Bootstrap
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                TypeScript
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                Javascript
              </span>
              <Separator
                orientation="vertical"
                className="hidden h-5 lg:block"
              />
              <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-700 dark:text-teal-300">
                NodeJS
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-8 w-full rounded-lg border p-4">
        <h2 className="mb-8 text-2xl font-semibold">Formação</h2>

        <div className="space-y-4">
          <p className="font-semibold leading-snug text-foreground">
            <span className="text-muted-foreground">Instituição: </span> Unifran
            - Universidade de Franca
          </p>
          <p className="font-semibold leading-snug text-foreground">
            <span className="text-muted-foreground">Formação: </span> Bacharel
            em Ciência da Computação
          </p>
          <p className="text-muted-foreground">Período: 2014 - 2017</p>
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <p className="font-semibold leading-snug text-foreground">
            <span className="text-muted-foreground">Instituição: </span> Centro
            Paula Souza
          </p>
          <p className="font-semibold leading-snug text-foreground">
            <span className="text-muted-foreground">Formação: </span> Técnico em
            Mecânica
          </p>
          <p className="text-muted-foreground">Período: 2007 - 2008</p>
        </div>
      </div>

      <div className="mb-8 w-full rounded-lg border p-4">
        <h2 className="mb-8 text-2xl font-semibold">Certificados</h2>

        <div className="flex flex-col gap-6">
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="col-span-1 flex size-20 flex-1 items-center justify-center rounded-lg border bg-muted p-4">
              <Image
                src={rocketseatIcon}
                alt="Rocketseat"
                className="size-12 dark:invert"
              />
            </div>

            <div className="col-span-11 space-y-2">
              <h3 className="text-xl font-bold leading-snug text-foreground">
                Clean Code
              </h3>
              <p className="text-lg leading-normal text-foreground">
                Rocketseat
              </p>
              <p className="text-sm leading-normal text-foreground">
                Princípios e técnicas de código limpo aplicadas ao JavaScript
                com ReactJS e Node.js
              </p>
              <p className="leading-normal text-muted-foreground">
                Emitido em abril de 2024
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="grid gap-4 lg:grid-cols-12">
            <div className="col-span-1 flex size-20 items-center justify-center rounded-lg border bg-muted p-4">
              <Image
                src={rocketseatIcon}
                alt="Rocketseat"
                className="size-12 dark:invert"
              />
            </div>
            <div className="col-span-11 space-y-2">
              <h3 className="text-xl font-bold leading-snug text-foreground">
                React JS
              </h3>
              <p className="text-lg leading-normal text-foreground">
                Rocketseat
              </p>
              <p className="text-sm leading-normal text-foreground">
                Desenvolvimento de uma aplicação front-end em ReactJS, aplicação
                dos conceitos de Propriedades, Estados e Componentes, tipagem
                com Typescript, tooling com Vite, interface responsiva com
                TailwindCSS, consumo de API Node.js, uso de URL states.
              </p>
              <p className="text-md leading-normal text-muted-foreground">
                Emitido em março de 2022
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="mb-8 grid gap-4 lg:grid-cols-12">
            <div className="col-span-1 flex size-20 items-center justify-center rounded-sm border bg-muted p-4">
              <Image src={microsoftIcon} alt="Rocketseat" className="size-12" />
            </div>
            <div className="col-span-11 space-y-2">
              <h3 className="text-xl font-bold leading-snug text-foreground">
                Programming in Html5 with JavaScript and CSS3
              </h3>
              <p className="text-ld leading-normal text-foreground">
                Microsoft
              </p>
              <p className="text-sm leading-normal text-foreground">
                Programação em Html5 com JavaScript e CSS3
              </p>
              <p className="leading-normal text-muted-foreground">
                Emitido em abril de 2017
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
