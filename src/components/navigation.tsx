import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Menu className="size-5" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <ul className="space-y-4 p-4">
                <li className="w-full text-center">
                  <Link href="/" className="w-full">
                    home
                  </Link>
                </li>
                <li className="w-full text-center">
                  <Link href="/about" className="w-full">
                    sobre
                  </Link>
                </li>
                <li className="w-full text-center">
                  <Link href="/#projects" className="w-full">
                    projetos
                  </Link>
                </li>
                <li className="w-full text-center">
                  <a
                    href="https://drive.google.com/file/d/1oqoi5GoOG15s4OucCnIHHET-uHhYhwLY/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full"
                  >
                    currículo
                  </a>
                </li>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
