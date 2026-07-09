import Badge from "./Badge";
import Card from "./Card";

type ProjectCardProps = {
    title: string;
    description: string;
    tags: string[];
};

function ProjectCard({ title, description, tags }: ProjectCardProps) {
    return (
        <Card>
            <h2 className="text-xl font-semibold text-white">{title}</h2>

            <p className="mt-4 text-base leading-7 text-slate-300">
                {description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                {tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                ))}
            </div>
        </Card>
    );
}

export default ProjectCard;