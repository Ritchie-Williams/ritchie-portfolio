import Button from "./Button";
import Container from "./Container";

function Hero() {
    return (
        <section className="min-h-screen bg-slate-950 flex items-center">
            <Container>
                <div className="flex flex-col items-center justify-center text-center">

                    <h1 className="text-6xl font-bold text-white">
                        Ritchie Williams
                    </h1>

                    <h2 className="mt-4 text-2xl text-blue-400 font-semibold">
                        Computer Systems Analyst
                    </h2>

                    <p className="mt-6 max-w-2xl text-lg text-slate-300">
                        Building cloud solutions, automating infrastructure, and documenting
                        my journey toward becoming a Cloud Engineer.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <Button>View Projects</Button>

                        <Button variant="secondary">
                            Download Resume
                        </Button>
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;