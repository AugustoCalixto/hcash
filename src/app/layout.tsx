import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { SiteProvider } from "@/components/site-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Herocash Brasil",
  description:
    "Soluções financeiras e de gestão para empreendedores: maquininhas e CRM via WhatsApp.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <SiteProvider>
          <SiteHeader />
          {children}
          <Footer />
        </SiteProvider>
      </body>
    </html>
  )
}
