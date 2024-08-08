export function Header() {
  return (
    <div className="w-full border-b">
      <header className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-5">
        <p className="cursor-pointer text-xl font-semibold leading-3 text-foreground">
          rafaelgomes
        </p>
        <nav>
          <ul className="flex items-center gap-8">
            <li className="text-lg font-medium text-foreground hover:opacity-90">
              <a href="#">sobre</a>
            </li>
            <li className="text-lg font-medium text-foreground hover:opacity-90">
              <a href="#">projetos</a>
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
