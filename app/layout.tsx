import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hank Linder | Economics • Data Analytics • AI & Product',
  description: 'I specialize in quantitative analysis, AI-powered decision systems, Python-based economic modeling, and building deployable AI solutions—translating business problems into structured data frameworks and operationalizing analytics.',
  openGraph: {
    title: 'Hank Linder | Economics • Data Analytics • AI & Product',
    description: 'I specialize in quantitative analysis, AI-powered decision systems, Python-based economic modeling, and building deployable AI solutions—translating business problems into structured data frameworks and operationalizing analytics.',
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
