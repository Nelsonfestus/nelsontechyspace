import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NelsonTechySpace | High-Converting Digital Experiences',
  description: 'Premium web design, development, and automation services by NelsonTechySpace.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
