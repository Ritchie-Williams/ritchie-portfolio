import Badge from "./Badge";
import Card from "./Card";
import Container from "./Container";
import Section from "./Section";

const skillGroups = [
    {
        title: "Cloud & Microsoft",
        skills: [
            "Azure",
            "Microsoft 365",
            "Entra ID",
            "SharePoint",
        ],
    },
    {
        title: "Automation & Endpoint",
        skills: [
            "PowerShell",
            "Bash",
            "NinjaOne",
            "Windows Administration",
            "Device Imaging",
        ],
    },
    {
        title: "Development",
        skills: [
            "React",
            "TypeScript",
            "C++",
            "Python",
            "Tailwind CSS",
            "Git",
        ],
    },
    {
        title: "Infrastructure",
        skills: [
            "Networking",
            "Linux",
            "Virtual Machines",
            "Troubleshooting",
        ],
    },
];

function Skills() {
    return (
        <Section className="bg-slate-950">
            <Container>
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                        Skills
                    </p>

                    <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                        Technologies I work with and continue to build on.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Throughout my career I have developed experience across cloud
                        technologies, systems administration, automation, infrastructure,
                        and modern web development. These are the technologies I use most
                        frequently while continuing to expand my knowledge.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {skillGroups.map((group) => (
                        <Card key={group.title}>
                            <h3 className="text-xl font-semibold text-white">
                                {group.title}
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <Badge key={skill}>
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}

export default Skills;