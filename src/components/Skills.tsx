import { skillGroups } from "../data/skills";

import Badge from "./Badge";
import Card from "./Card";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function Skills() {
    return (
        <FadeIn>
            <Section id="skills" className="bg-slate-950">
                <Container>
                    <SectionHeader
                        eyebrow="Skills"
                        title="Technologies I work with and continue to build on."
                        description="Throughout my career I have developed experience across cloud technologies, systems administration, automation, infrastructure, and modern web development. These are the technologies I use most frequently while continuing to expand my knowledge."
                    />

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {skillGroups.map((group) => (
                            <Card key={group.title}>
                                <h3 className="text-xl font-semibold text-white">
                                    {group.title}
                                </h3>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    {group.skills.map((skill) => (
                                        <Badge key={skill}>{skill}</Badge>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </FadeIn>
    );
}

export default Skills;