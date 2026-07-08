type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    description?: string;
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
    return (
        <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                {eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-6 text-lg leading-8 text-slate-300">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionHeader;