type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      {children}
    </section>
  );
}

export default Section;