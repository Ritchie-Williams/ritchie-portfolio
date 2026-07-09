import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { projects } from "../data/projects";

function ProjectsPage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <PageHeader
                eyebrow="Projects"
                title="Project work, technical builds, and engineering case studies."
                description="A growing collection of hands-on work that documents the problems I have solved, the tools I have used, and the technologies I am continuing to build with."
            />

            <Section className="bg-slate-950 pt-0">
                <Container>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}

export default ProjectsPage;