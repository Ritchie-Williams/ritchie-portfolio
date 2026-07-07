type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-24 ${className}`}>
      {children}
    </section>
  );
}

export default Section;