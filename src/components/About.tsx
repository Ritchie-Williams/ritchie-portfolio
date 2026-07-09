import { aboutCards } from "../data/about";

import Card from "./Card";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function About() {
    return (
        <FadeIn>
            <Section id="about" className="bg-slate-900">
                <Container>
                    <SectionHeader
                        eyebrow="About"
                        title="A systems-focused technologist building toward cloud engineering."
                        description="This platform documents my growth, technical work, and learning journey as I continue expanding from IT systems support into cloud infrastructure and engineering."
                    />

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {aboutCards.map((card) => (
                            <Card key={card.title}>
                                <h3 className="text-xl font-semibold text-white">
                                    {card.title}
                                </h3>

                                <p className="mt-4 text-base leading-7 text-slate-300">
                                    {card.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </FadeIn>
    );
}

export default About;