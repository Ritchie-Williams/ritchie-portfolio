import Badge from "../components/Badge";
import Card from "../components/Card";
import CertificationCard from "../components/CertificationCard";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";

import { certifications, pursuing, resume } from "../data/credentials";

function CredentialsPage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <PageHeader
                eyebrow="Professional Credentials"
                title="Resume, certifications, and continued technical growth."
                description="A central place to view the credentials that support my technical background across cloud, security, automation, and enterprise IT."
            />

            <Section className="bg-slate-950 pt-0">
                <Container>
                    <div className="space-y-12">
                        <Card>
                            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                                        Resume
                                    </p>

                                    <h2 className="mt-3 text-2xl font-semibold text-white">
                                        {resume.title}
                                    </h2>

                                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                                        {resume.description}
                                    </p>
                                </div>

                                <a
                                    href={resume.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
                                >
                                    View Resume
                                </a>
                            </div>
                        </Card>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                                Certifications
                            </p>

                            <div className="mt-6 grid gap-6 md:grid-cols-2">
                                {certifications.map((certification) => (
                                    <CertificationCard
                                        key={certification.title}
                                        {...certification}
                                    />
                                ))}
                            </div>
                        </div>

                        <Card>
                            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                                Currently Pursuing
                            </p>

                            <h2 className="mt-3 text-2xl font-semibold text-white">
                                Next steps in my technical roadmap
                            </h2>

                            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                                Learning never stops. These are the certifications and
                                technologies I am actively working toward as I continue
                                progressing into cloud engineering.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {pursuing.map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

export default CredentialsPage;