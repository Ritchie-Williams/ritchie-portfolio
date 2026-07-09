import { NavLink } from "react-router-dom";

import Container from "./Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Timeline", href: "/timeline" },
  { label: "Journal", href: "/journal" },
  { label: "Spotify", href: "/spotify" },
  { label: "Contact", href: "/contact" },
  { label: "Credentials", href: "/credentials" },
];

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-center">
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium transition duration-200 ${isActive
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-blue-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;