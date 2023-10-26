import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
          <ul>
            <li>
              <Link href="./about">About</Link>
            </li>
            <li>
              <Link href="./our-products">Our Products</Link>
            </li>
            <li>
              <Link href="./contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}