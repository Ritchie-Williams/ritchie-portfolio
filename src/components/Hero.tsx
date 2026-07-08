import Button from "./Button";
import Container from "./Container";
import TypingText from "./TypingText";

function Hero() {
    return (
        <section className="flex min-h-screen items-center bg-slate-950 pt-16">
            <Container>
                <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">

                    <img
                        src="/project-columbus-logo.png"
                        alt="Ritchie Williams Logo"
                        className="mb-8 h-24 w-24 object-contain"
                    />

                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                        Ritchie Williams
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                        Building Tomorrow&apos;s
                        <br />
                        <TypingText />
                    </h1>

                    <h2 className="mt-6 text-xl font-semibold text-slate-300">
                        Computer Systems Analyst • Aspiring Cloud Engineer
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                        Building cloud solutions, automating infrastructure, and documenting
                        my engineering journey as I work toward becoming a Cloud Engineer.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <a href="#about">
                            <Button>Explore My Journey</Button>
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="secondary">
                                View Resume
                            </Button>
                        </a>

                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;