import Badge from "../components/Badge";
import Card from "../components/Card";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import { journalEntries } from "../data/journal";

function JournalPage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <PageHeader
                eyebrow="Journal"
                title="Notes, reflections, and lessons from my engineering journey."
                description="A space for documenting what I am learning, what I am building, and how I am thinking through technical challenges."
            />

            <Section className="bg-slate-950 pt-0">
                <Container>
                    <div className="grid gap-6">
                        {journalEntries.map((entry) => (
                            <Card key={entry.title}>
                                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                                    {entry.date}
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold text-white">
                                    {entry.title}
                                </h2>

                                <p className="mt-4 text-base leading-7 text-slate-300">
                                    {entry.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    {entry.tags.map((tag) => (
                                        <Badge key={tag}>{tag}</Badge>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}

export default JournalPage;
