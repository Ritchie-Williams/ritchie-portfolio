import Container from "./Container";

type PageHeaderProps = {
    eyebrow: string;
    title: string;
    description: string;
};

function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
    return (
        <section className="bg-slate-950 pt-32 pb-16">
            <Container>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                    {eyebrow}
                </p>

                <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    {title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                    {description}
                </p>
            </Container>
        </section>
    );
}

export default PageHeader;