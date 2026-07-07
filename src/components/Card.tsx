type CardProps = {
    children: React.ReactNode;
    className?: string;
};

function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30 ${className}`}
        >
            {children}
        </div>
    );
}

export default Card;