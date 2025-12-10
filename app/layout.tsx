import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Team Hazan - ייעוץ כושר ותזונה',
  description: 'ייעוץ כושר ותזונה בהובלת מר ישראל לשנת 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}

