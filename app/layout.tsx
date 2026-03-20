import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jose Manuel — Desarrollador Creativo',
  description: 'Desarrollo experiencias web que combinan diseño cuidadoso con código limpio.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}