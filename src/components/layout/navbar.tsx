import { ThemeToggle } from "../ui/theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
        <span className="font-semibold">Fandresena</span>
        <ThemeToggle />
      </div>
    </nav>
  )
}