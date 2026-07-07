type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
};

function Button({ children, variant = "primary" }: ButtonProps) {
    const baseStyles =
        "rounded-lg px-6 py-3 font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-500",
        secondary:
            "border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </button>
    );
}

export default Button;