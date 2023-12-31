import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import { formula, neue } from '@/lib/fonts'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Embre',
  description: 'E-commerce Landing Page | Mert Enercan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${formula.variable} ${neue.className}`}>
        <Header />
        {children}
      <Image src={'/test.png'} fill alt="" className="object-cover !fixed pointer-events-none z-20 " />
      <Footer />
      </body>
    </html>
  )
}
