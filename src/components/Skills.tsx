import Container from "./Container";
import Section from "./Section";

const skills = [
  "Microsoft 365",
  "Entra ID",
  "Azure",
  "PowerShell",
  "NinjaOne",
  "Windows Administration",
  "Networking",
  "Linux",
  "Git",
  "React",
  "TypeScript",
  "Tailwind CSS",
];

function Skills() {
  return (
    <Section className="bg-slate-950">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Technologies I work with and continue to build on.
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Skills;