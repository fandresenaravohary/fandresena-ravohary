import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../ui/theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-semibold">
          Fandresena
        </NavLink>

        <div className="flex items-center gap-6">
          <NavLink to="/" className="text-sm font-medium hover:text-primary">
            Home
          </NavLink>

          <NavLink
            to="/experiences"
            className="text-sm font-medium hover:text-primary"
          >
            Experiences
          </NavLink>

          <NavLink
            to="/contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </NavLink>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
