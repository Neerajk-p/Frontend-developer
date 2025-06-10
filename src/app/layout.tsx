import './globals.css'
import { ReactNode } from 'react'
import { ReactQueryProvider } from '@/providers/react-query'


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
