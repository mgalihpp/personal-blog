import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvider"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Blog",
  description: "My Blog",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem attribute="class" defaultTheme="dark">
          <div
            className="prose-xl mx-auto w-full 
          max-w-4xl px-4 dark:prose-invert md:px-0"
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
