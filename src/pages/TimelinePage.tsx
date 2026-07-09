import Badge from "../components/Badge";
import Card from "../components/Card";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import { timelineEvents } from "../data/timeline";

function TimelinePage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <PageHeader
                eyebrow="Timeline"
                title="The journey from IT systems support toward cloud engineering."
                description="A chronological view of my career growth, certifications, projects, and technical milestones."
            />

            <Section className="bg-slate-950 pt-0">
                <Container>
                    <div className="relative border-l border-slate-800 pl-8">
                        {timelineEvents.map((event) => (
                            <div key={`${event.year}-${event.title}`} className="relative mb-10">
                                <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border border-blue-400 bg-slate-950" />

                                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                                    {event.year}
                                </p>

                                <Card className="mt-4">
                                    <h2 className="text-xl font-semibold text-white">
                                        {event.title}
                                    </h2>

                                    <p className="mt-4 text-base leading-7 text-slate-300">
                                        {event.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {event.tags.map((tag) => (
                                            <Badge key={tag}>{tag}</Badge>
                                        ))}
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}

export default TimelinePage;