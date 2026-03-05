import type { ReactNode } from "react"
import { Navbar } from "./navbar"


type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 mx-auto max-w-6xl px-6 py-10 w-full">
        {children}
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Fandresena
      </footer>
    </div>
  )
}