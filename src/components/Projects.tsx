import { projects } from "../data/projects";

import Badge from "./Badge";
import Card from "./Card";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function Projects() {
    return (
        <FadeIn>
            <Section id="projects" className="bg-slate-900">
                <Container>

                    <SectionHeader
                        eyebrow="Projects"
                        title="Practical work, active builds, and future cloud labs."
                        description="This section will continue to grow as I document completed projects, current work, and hands-on learning labs."
                    />

                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {projects.map((project) => (
                            <Card key={project.title}>
                                <h3 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-base leading-7 text-slate-300">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag}>
                                            {tag}
                                        </Badge>
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

export default Projects;