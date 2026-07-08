import useScrollReveal from "../hooks/useScrollReveal";

type FadeInProps = {
    children: React.ReactNode;
};

function FadeIn({ children }: FadeInProps) {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
        >
            {children}
        </div>
    );
}

export default FadeIn;