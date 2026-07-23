"use client";

import type { IconType } from "react-icons";
import { FaSlack } from "react-icons/fa6";
import {
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJira,
  SiLangchain,
  SiPython,
} from "react-icons/si";
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
import { MotionProvider } from "@components/motion/MotionProvider";
import { RevealGroup, RevealItem } from "@components/motion/Reveal";

const skillVisuals: Record<string, { icon: IconType; color: string }> = {
  python: { icon: SiPython, color: "#ffd343" },
  html: { icon: SiHtml5, color: "#e34f26" },
  css: { icon: SiCss, color: "#663399" },
  git: { icon: SiGit, color: "#f05032" },
  github: { icon: SiGithub, color: "#f0f0f0" },
  llm: { icon: LuSparkles, color: "#a78bfa" },
  metadata: { icon: LuTags, color: "#fb923c" },
  embeddings: { icon: LuBinary, color: "#60a5fa" },
  "vector db": { icon: LuDatabase, color: "#2dd4bf" },
  rag: { icon: SiLangchain, color: "#65c9a5" },
  "prompt engineering": { icon: LuMessageSquareText, color: "#f59e0b" },
  jira: { icon: SiJira, color: "#2684ff" },
  slack: { icon: FaSlack, color: "#e01e5a" },
  "customer development (custdev)": { icon: LuUsers, color: "#f472b6" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <RevealItem className="cv-section">
      <div className="cv-section__head">
        <h2 className="cv-section__title">
          <span className="cv-section__slash">{"//"}</span> {title}
        </h2>
        <span className="cv-section__rule" aria-hidden="true" />
      </div>
      {children}
    </RevealItem>
  );
}

function Entry({ entry }: { entry: CvEntry }) {
  return (
    <div className="cv-entry">
      <span className="cv-entry__mark" aria-hidden="true">
        ▸
      </span>
      <span className="cv-entry__title">{entry.title}</span>
      <span className="cv-entry__date">{entry.date}</span>
      <span className="cv-entry__org">{entry.org}</span>
    </div>
  );
}

export function CvContent() {
  return (
    <MotionProvider>
      <RevealGroup className="cv">
        <RevealItem>
          <p className="cv-prompt">
            <span className="cv-prompt__path">~/aydos $</span> cat resume.md
            <span className="hero__cursor" aria-hidden="true" />
          </p>
        </RevealItem>

        <RevealItem>
          <h1 className="cv-name">{cvHeader.name}</h1>
        </RevealItem>
        <RevealItem>
          <p className="cv-role">{cvHeader.role}</p>
        </RevealItem>

        <RevealItem>
          <div className="cv-meta">
            <span className="cv-meta__item">{cvHeader.location}</span>
            <span className="cv-meta__item">{cvHeader.timezone}</span>
          </div>
        </RevealItem>

        <Section title="about">
          <p className="cv-about">{cvAbout}</p>
        </Section>

        <Section title="experience">
          <div className="cv-entries">
            {cvExperience.map((entry) => (
              <Entry key={entry.title} entry={entry} />
            ))}
          </div>
        </Section>

        <Section title="education">
          <div className="cv-entries">
            {cvEducation.map((entry) => (
              <Entry key={entry.title} entry={entry} />
            ))}
          </div>
        </Section>

        <Section title="skills">
          <div className="cv-skill-groups">
            {cvSkills.map((group) => (
              <div key={group.label} className="cv-skill-group">
                <span className="cv-skill-group__label">{group.label}</span>
                <div className="cv-chips">
                  {group.skills.map((skill) => {
                    const visual = skillVisuals[skill] ?? {
                      icon: LuBrainCircuit,
                      color: "currentColor",
                    };
                    const SkillIcon = visual.icon;

                    return (
                      <span
                        key={skill}
                        className="cv-chip"
                        data-tone={group.tone}
                        style={
                          {
                            "--skill-icon": visual.color,
                          } as React.CSSProperties
                        }
                      >
                        <SkillIcon className="cv-chip__icon" aria-hidden="true" />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="links">
          <div className="cv-links">
            {cvLinks.map((link) => {
              const external = !link.href.startsWith("mailto:");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="cv-link-row"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <span className="cv-link-row__label">{link.label}</span>
                  <span className="cv-link-row__handle">{link.handle} ↗</span>
                </a>
              );
            })}
          </div>
        </Section>
      </RevealGroup>
    </MotionProvider>
  );
}
