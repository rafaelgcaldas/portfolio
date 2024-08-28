import Link from 'next/link'
import AnimatedShinyText from './animated -shiny-text'
import { Navigation } from './navigation'
import { ThemeSwitcher } from './theme-switcher'

export function Header() {
  return (
    <div className="w-full border-b">
      <header className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-5">
        <AnimatedShinyText className="cursor-pointer text-xl font-semibold">
          <Link href="/">rafaelgomes</Link>
        </AnimatedShinyText>
        <div className="flex items-center justify-center gap-2 lg:gap-6">
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li className="text-lg font-medium text-foreground hover:opacity-90">
                <Link href="/about">sobre</Link>
              </li>
              <li className="text-lg font-medium text-foreground hover:opacity-90">
                <Link href="/#projects">projetos</Link>
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
          <ThemeSwitcher />
          <div className="block lg:hidden">
            <Navigation />
          </div>
        </div>
      </header>
    </div>
  )
}
