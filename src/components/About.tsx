import Container from "./Container";
import Section from "./Section";

function About() {
    return (
        <Section className="bg-slate-900">
            <Container>
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                        About Me
                    </p>

                    <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                        Building a path from IT systems support into cloud engineering.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        I am Ritchie Williams, a Computer Systems Analyst focused on
                        infrastructure, automation, Microsoft cloud technologies, and
                        continuous technical growth. This platform documents my journey,
                        current projects, achievements, and the technologies I am learning.
                    </p>
                </div>
            </Container>
        </Section>
    );
}

export default About;