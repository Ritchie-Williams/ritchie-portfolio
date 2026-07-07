import Container from "./Container";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-center">
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition duration-200 hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;