import Badge from "./Badge";
import Card from "./Card";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const skillGroups = [
    {
        title: "Cloud & Microsoft",
        skills: ["Azure", "Microsoft 365", "Entra ID", "SharePoint"],
    },
    {
        title: "Automation & Endpoint",
        skills: ["PowerShell","Bash", "NinjaOne", "Windows Administration", "Device Imaging"],
    },
    {
        title: "Development",
        skills: ["React", "TypeScript", "Tailwind CSS", "C++", "Python", "Git"],
    },
    {
        title: "Infrastructure",
        skills: ["Networking", "Linux", "Virtual Machines", "Troubleshooting"],
    },
];

function Skills() {
    return (
        <FadeIn>
            <Section className="bg-slate-950">
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