import Image from 'next/image'

import angularIcon from '@/assets/angular.svg'
import bootstrapIcon from '@/assets/bootstrap.svg'
import chakraUiIcon from '@/assets/chakra-ui.svg'
import htmlIcon from '@/assets/html.svg'
import crmImage from '@/assets/images/banner-2.webp'
import nextJsIcon from '@/assets/next-js.svg'
import pwaIcon from '@/assets/pwa.svg'
import radixUiIcon from '@/assets/radix-ui.svg'
import reactIcon from '@/assets/react.svg'
import sassIcon from '@/assets/sas.svg'
import springIcon from '@/assets/spring.svg'
import tailwindCssIcon from '@/assets/tailwindcss.svg'
import typeScriptIcon from '@/assets/typescript.svg'

import marketplaceImage from '@/assets/images/banner-3.webp'
import surveyImage from '@/assets/images/banner-4.webp'
import portalImage from '@/assets/images/banner-5.webp'
import { HeroSection } from '@/components/heroSection'
import { JobsWrraper } from '@/components/jobs-wrraper'
import { TitleWrraper } from '@/components/title-wrraper'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-5">
      <section className="mb-24 flex max-w-[1200px] flex-col items-center justify-between lg:mb-20">
        <HeroSection />
      </section>

      <section className="pt-4" id="projects">
        <h2 className="mb-10 text-2xl font-bold tracking-tight lg:mb-12 lg:text-3xl">
          Meus trabalhos recentes
        </h2>

        <JobsWrraper>
          <div className="grid items-center lg:grid-cols-12 lg:gap-4 lg:p-6">
            <div className="col-start-7 -col-end-1 row-start-1 -row-end-1 mb-4 flex flex-col space-y-6 lg:items-end">
              <TitleWrraper>
                <h2 className="text-xl font-bold lg:text-2xl">IZagro CRM</h2>
              </TitleWrraper>
              <div className="relative z-20 w-full rounded-sm bg-slate-50 p-4 dark:bg-slate-900 lg:shadow-md">
                <p className="text-sm font-light leading-relaxed text-foreground lg:text-base">
                  Um plataforma de CRM para a gestão eficiente de clientes.
                  Oferecendo ferramentas para acompanhamento e conversão de
                  leads. Desenvolvido em <span>ANGULAR</span> assegurando uma
                  experiência de navegação rápida e fluida, utilizando SAAS para
                  a criação de estilos modulares e reutilizáveis e um design
                  responsivo e consistente com BOOTSTRAP 5.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex w-full items-center justify-between gap-4">
                  <Image
                    src={angularIcon}
                    alt="Angular"
                    className="size-8 lg:size-10"
                  />
                  <Image
                    src={htmlIcon}
                    alt="Html"
                    className="size-7 lg:size-9"
                  />
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
        </JobsWrraper>

        <Separator className="my-16 lg:my-20" />

        <JobsWrraper>
          <div className="grid items-center lg:grid-cols-12 lg:gap-4 lg:p-6">
            <div className="col-start-1 col-end-7 row-start-1 -row-end-1 mb-4 flex flex-col space-y-6">
              <TitleWrraper>
                <h2 className="text-2xl font-bold">Marketplace IZagro</h2>
              </TitleWrraper>
              <div className="relative z-20 w-full rounded-sm bg-slate-50 p-4 shadow-md dark:bg-slate-900">
                <p className="text-sm font-light leading-relaxed text-foreground lg:text-base">
                  Desenvolvido utilizando Next.js, um framework poderoso para
                  React que possibilita a criação de aplicações web altamente
                  performáticas, com renderização híbrida (SSG e SSR),
                  garantindo carregamento rápido e SEO otimizado. O design da
                  interface é feito com Chakra UI, uma biblioteca de componentes
                  estilizados e acessíveis, que oferece flexibilidade e
                  facilidade na criação de interfaces de usuário modernas e
                  responsivas.
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
        </JobsWrraper>

        <Separator className="my-16 lg:my-20" />

        <JobsWrraper>
          <div className="grid items-center lg:grid-cols-12 lg:gap-4 lg:p-6">
            <div className="col-start-7 -col-end-1 row-start-1 -row-end-1 mb-4 flex flex-col space-y-6 lg:items-end">
              <TitleWrraper>
                <h2 className="text-2xl font-bold">IZagro Survey</h2>
              </TitleWrraper>
              <div className="relative z-20 w-full rounded-sm bg-slate-50 p-4 shadow-md dark:bg-slate-900">
                <p className="text-sm font-light leading-relaxed text-foreground lg:text-base">
                  Plataforma desenvolvida para proporcionar uma experiência de
                  pesquisa dinâmica e acessível em qualquer dispositivo,
                  utilizando o poder de Progressive Web Apps (PWA). Também
                  desenvolvida com ANGULAR, API do GOOGLE MAPS e utilizando SAAS
                  para a criação de estilos modulares e reutilizáveis e um
                  design responsivo e consistente com BOOTSTRAP 5.
                </p>
              </div>
              <div className="flex items-center justify-between gap-4">
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
        </JobsWrraper>

        <Separator className="my-16 lg:my-20" />

        <JobsWrraper>
          <div className="mb-36 grid items-center lg:grid-cols-12 lg:gap-4 lg:p-6">
            <div className="col-start-1 col-end-7 row-start-1 -row-end-1 mb-4 flex flex-col space-y-6">
              <TitleWrraper>
                <h2 className="text-2xl font-bold">Portal de fidelidade</h2>
              </TitleWrraper>
              <div className="relative z-20 w-full rounded-sm bg-slate-50 p-4 shadow-md dark:bg-slate-900">
                <p className="text-sm font-light leading-relaxed text-foreground lg:text-base">
                  Desenvolvido para oferecer uma experiência personalizada e
                  envolvente, permitindo que usuários acumulem pontos, resgatem
                  recompensas e acompanhem seu progresso. Construído com NextJS
                  na versão 14, com interface estilizada com Tailwind CSS. Com o
                  Radix garantindo a acessibilidade e a usabilidade aprimorada.
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
        </JobsWrraper>
      </section>
    </main>
  )
}
