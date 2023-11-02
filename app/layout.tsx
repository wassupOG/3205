import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Navbar } from "@/components/custom/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "3205 Task",
  description: "Test task for 3205 by wassupOG",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="main-container">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
