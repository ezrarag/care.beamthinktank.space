import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BEAM Care - Professional Care Services',
  description: 'Find trusted care providers for children, elders, and pets in your city. Book services, make donations, and track care milestones.',
  keywords: 'care services, child care, elder care, pet care, care providers, bookings, donations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
