import { cvAbout, cvEducation, cvExperience, cvHeader, cvLinks, cvSkills, type CvEntry } from "@data/cv";
import { Page } from "@components/Page";
import { PrintButton } from "@components/PrintButton";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  );
}

function Entries({ entries }: { entries: CvEntry[] }) {
  return (
    <ul className="list">
      {entries.map((entry) => (
        <li key={entry.title}>
          <div className="item">
            <span className="item__text">{entry.title}</span>
            <span className="label">{entry.date}</span>
          </div>
          <p className="item__desc">{entry.org}</p>
        </li>
      ))}
    </ul>
  );
}

export function CvContent() {
  return (
    <Page title="CV" sub={`${cvHeader.role} · ${cvHeader.location}`}>
      <p className="cv-print">
        <PrintButton>Save as PDF</PrintButton>
      </p>

      <div className="sections">
        <Section title="About">
          <p className="item__desc">{cvAbout}</p>
        </Section>

        <Section title="Experience">
          <Entries entries={cvExperience} />
        </Section>

        <Section title="Education">
          <Entries entries={cvEducation} />
        </Section>

        <Section title="Skills">
          <ul className="list">
            {cvSkills.map((group) => (
              <li key={group.label}>
                <span className="item__text">{group.label}</span>
                <p className="item__desc">{group.skills.join(", ")}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Links">
          <ul className="list">
            {cvLinks.map((link) => {
              const external = !link.href.startsWith("mailto:");
              return (
                <li key={link.label} className="item">
                  <a
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                  <span className="label">{link.handle}</span>
                </li>
              );
            })}
          </ul>
        </Section>
      </div>
    </Page>
  );
}
