import Container from "./Container";

function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
                    <p>© {new Date().getFullYear()} Ritchie Williams. Built with React, Tailwind CSS, and Azure.</p>

                    <div className="flex gap-4">
                        <a href="#" className="transition hover:text-white">
                            GitHub
                        </a>
                        <a href="#" className="transition hover:text-white">
                            LinkedIn
                        </a>
                        <a href="#" className="transition hover:text-white">
                            Resume
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;