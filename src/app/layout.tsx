import './globals.css'
import { ReactNode } from 'react'
import { ReactQueryProvider } from '@/providers/react-query'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Frontend Dashboard',
  description: 'CRUD app with Next.js',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
