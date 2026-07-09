import Card from "../components/Card";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";

const contactLinks = [
    {
        label: "Email",
        value: "ritchiewilliams04@gmail.com",
        href: "mailto:ritchiewilliams04@gmail.com",
    },
    {
        label: "LinkedIn",
        value: "Connect with me professionally",
        href: "https://www.linkedin.com/in/ritchie-j-williams/",
    },
    {
        label: "GitHub",
        value: "View my repositories and projects",
        href: "https://github.com/Ritchie-Williams",
    },
];

function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <PageHeader
                eyebrow="Contact"
                title="Let’s connect."
                description="A simple way for visitors, recruiters, and collaborators to reach out or view my professional profiles."
            />

            <Section className="bg-slate-950 pt-0">
                <Container>
                    <div className="grid gap-6 md:grid-cols-3">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                                <Card className="h-full">
                                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                                        {link.label}
                                    </p>

                                    <p className="mt-4 text-base leading-7 text-slate-300">
                                        {link.value}
                                    </p>
                                </Card>
                            </a>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}

export default ContactPage;