import Link from 'next/link'

export function Header() {
  return (
    <div className="w-full border-b">
      <header className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-5">
        <p className="cursor-pointer text-xl font-semibold leading-3 text-foreground">
          <Link href="/">rafaelgomes</Link>
        </p>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li className="text-lg font-medium text-foreground hover:opacity-90">
              <Link href="/about">sobre</Link>
            </li>
            <li className="text-lg font-medium text-foreground hover:opacity-90">
              <a href="#projects">projetos</a>
            </li>
            <li className="text-lg font-medium text-foreground hover:opacity-90">
              <a href="#">currículo</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
