import Badge from "./Badge";
import Card from "./Card";

type CertificationCardProps = {
    title: string;
    category: string;
    description: string;
    document: string;
    issued: string;
    image?: string;
};

function CertificationCard({
    title,
    category,
    description,
    document,
    issued,
    image,
}: CertificationCardProps) {
    return (
        <Card>
            <div className="flex h-full flex-col">
                {image && (
                    <div className="mb-6 flex h-40 items-center justify-center rounded-xl border border-slate-800 bg-white p-4">
                        <img
                            src={image}
                            alt={`${title} badge`}
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                )}

                <div className="flex flex-wrap gap-3">
                    <Badge>{category}</Badge>
                    <Badge>Issued {issued}</Badge>
                </div>

                <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>

                <p className="mt-4 flex-grow text-base leading-7 text-slate-300">
                    {description}
                </p>

                <a
                    href={document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                    View Credential →
                </a>
            </div>
        </Card>
    );
}

export default CertificationCard;