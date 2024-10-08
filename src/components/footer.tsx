import Image from 'next/image'

import githubIcon from '@/assets/github-icon.svg'
import linkedinIcon from '@/assets/linkedin-icon-1.svg'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="w-full border-t">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 px-4 py-10 lg:flex-row lg:items-end">
        <div className="space-y-4">
          <a
            href="mailto:rafaelgcaldasdev@gmail.com"
            className="text-xl font-semibold"
          >
            rafaelgcaldasdev@gmail.com
          </a>
          <p className="tracking-tight text-muted-foreground">
            Rafael Gomes - 2024
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/rafaelgcaldas"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={githubIcon}
                className="size-6 dark:invert"
                alt="react"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/rafaelgcaldas"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={linkedinIcon}
                className="size-6 dark:invert"
                alt="react"
              />
            </a>
          </div>
        </div>

        <nav>
          <ul className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-8">
            <li className="text-lg font-medium text-foreground hover:opacity-90">
              <Link href="/about">sobre</Link>
            </li>
            <li className="text-lg font-medium text-foreground hover:opacity-90">
              <a href="#projects">projetos</a>
            </li>
            <li className="text-lg font-medium text-foreground hover:opacity-90">
              <a
                href="https://drive.google.com/file/d/1oqoi5GoOG15s4OucCnIHHET-uHhYhwLY/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
              >
                currículo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
