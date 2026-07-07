import Button from "./Button";
import Container from "./Container";
import TypingText from "./TypingText";

function Hero() {
    return (
        <section className="min-h-screen bg-slate-950 flex items-center pt-16">
            <Container>
                <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
                    <img
                        src="/project-columbus-logo.png"
                        alt="Ritchie Williams logo"
                        className="mb-8 h-24 w-24 rounded-xl bg-white object-contain p-2"
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
                        I build, automate, troubleshoot, and document technical solutions
                        while growing deeper into cloud engineering, infrastructure, and
                        modern development practices.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button>Explore My Journey</Button>
                        <Button variant="secondary">View Resume</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;