import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hank Linder | Economics • Data Analytics • AI & Product',
  description: 'I specialize in quantitative analysis, Python-based economic modeling, and dashboard development—turning messy data into clear, decision-ready insights.',
  openGraph: {
    title: 'Hank Linder | Economics • Data Analytics • AI & Product',
    description: 'I specialize in quantitative analysis, Python-based economic modeling, and dashboard development—turning messy data into clear, decision-ready insights.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
