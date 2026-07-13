"use client";

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
            <span className="cv-meta__item">
              <span className="cv-meta__dot" aria-hidden="true" /> {cvHeader.status}
            </span>
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
          <div className="cv-chips">
            {cvSkills.map((skill) => (
              <span key={skill} className="cv-chip">
                {skill}
              </span>
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
