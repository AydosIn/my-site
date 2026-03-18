import { Container } from "@components/Container";
import { Section } from "@components/Section";
import { site } from "@data/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container>
      <Section title="Contact">
        <ul className="space-y-3">
          <li>
            <span className="font-medium">Email:</span>{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </li>
          <li>
            <span className="font-medium">Telegram:</span>{" "}
            <a href={site.contact.telegram} target="_blank" rel="noreferrer">{site.contact.telegram}</a>
          </li>
          <li>
            <span className="font-medium">LinkedIn:</span>{" "}
            <a href={site.contact.linkedin} target="_blank" rel="noreferrer">{site.contact.linkedin}</a>
          </li>
          <li>
            <span className="font-medium">GitHub:</span>{" "}
            <a href={site.contact.github} target="_blank" rel="noreferrer">{site.contact.github}</a>
          </li>
        </ul>
      </Section>
    </Container>
  );
}