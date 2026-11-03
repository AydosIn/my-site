import type { IconType } from "react-icons";
import { FaSlack } from "react-icons/fa6";
import { SiCss, SiGit, SiGithub, SiHtml5, SiJira, SiLangchain, SiPython } from "react-icons/si";
import {
  LuBinary,
  LuBrainCircuit,
  LuDatabase,
  LuMessageSquareText,
  LuSparkles,
  LuTags,
  LuUsers,
} from "react-icons/lu";
import {
  cvAbout,
  cvEducation,
  cvExperience,
  cvHeader,
  cvLinks,
  cvSkills,
  type CvEntry,
} from "@data/cv";
import { PrintButton } from "@components/PrintButton";

const skillIcons: Record<string, IconType> = {
  python: SiPython,
  html: SiHtml5,
  css: SiCss,
  git: SiGit,
  github: SiGithub,
  llm: LuSparkles,
  metadata: LuTags,
  embeddings: LuBinary,
  "vector db": LuDatabase,
  rag: SiLangchain,
  "prompt engineering": LuMessageSquareText,
  jira: SiJira,
  slack: FaSlack,
  "customer development (custdev)": LuUsers,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function Entry({ entry }: { entry: CvEntry }) {
  return (
    <li className="cv-entry">
      <span className="cv-entry__title">{entry.title}</span>
      <span className="cv-entry__date meta">{entry.date}</span>
      <span className="cv-entry__org">{entry.org}</span>
    </li>
  );
}

export function CvContent() {
  return (
    <div className="page cv">
      <header className="page-head">
        <h1 className="page-title">{cvHeader.name}</h1>
        <p className="cv-role">{cvHeader.role}</p>
        <p className="page-sub">
          {cvHeader.location} · {cvHeader.timezone}
        </p>
        <p className="cv-print">
          <PrintButton>save as pdf ↓</PrintButton>
        </p>
      </header>

      <Section title="about">
        <p className="cv-about">{cvAbout}</p>
      </Section>

      <Section title="experience">
        <ul className="cv-entries">
          {cvExperience.map((entry) => (
            <Entry key={entry.title} entry={entry} />
          ))}
        </ul>
      </Section>

      <Section title="education">
        <ul className="cv-entries">
          {cvEducation.map((entry) => (
            <Entry key={entry.title} entry={entry} />
          ))}
        </ul>
      </Section>

      <Section title="skills">
        <div className="cv-skills">
          {cvSkills.map((group) => (
            <div key={group.label} className="cv-skill-group">
              <h3 className="cv-skill-group__label">{group.label}</h3>
              <ul className="cv-chips">
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill] ?? LuBrainCircuit;
                  return (
                    <li key={skill} className="cv-chip">
                      <Icon className="cv-chip__icon" aria-hidden="true" />
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="links">
        <ul className="cv-links">
          {cvLinks.map((link) => {
            const external = !link.href.startsWith("mailto:");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="cv-link"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <span className="cv-link__label">{link.label}</span>
                  <span className="cv-link__handle meta">
                    {link.handle} {external ? "↗" : ""}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>
    </div>
  );
}
