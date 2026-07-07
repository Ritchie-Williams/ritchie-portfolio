type BadgeProps = {
  children: React.ReactNode;
};

function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-white">
      {children}
    </span>
  );
}

export default Badge;