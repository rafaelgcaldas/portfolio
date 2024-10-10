import { BackToTop } from '@/components/back-to-top'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rafael Gomes',
  description:
    'Rafael Gomes é um desenvolvedor frontend que cria  interfaces modernas e interativas com foco na experiência do usuário.',
  authors: {
    name: 'Rafael Gomes',
    url: 'https://rafaelgcaldasdev.com.br',
  },
  keywords: [
    'Rafael Gomes',
    'Desenvolvedor frontend',
    'Frontend',
    'Angular',
    'React',
    'Javascript',
    'interfaces de usuário',
  ],
  openGraph: {
    type: 'website',
    url: 'https://rafaelgcaldasdev.com.br',
    title: 'Rafael Gomes',
    description:
      'Rafael Gomes é um desenvolvedor frontend que cria  interfaces modernas e interativas com foco na experiência do usuário.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <BackToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
