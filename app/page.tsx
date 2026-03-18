import { Container } from "@components/Container";
import { Section } from "@components/Section";
import { site } from "@data/site";

export default function HomePage() {
  return (
    <Container>
      <Section>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          {site.ownerName}
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl">
          {site.tagline}
        </p>
      </Section>
      <Section title="What I do">
        <p className="text-gray-700 max-w-2xl leading-7">
          {site.whatIDo}
        </p>
      </Section>
    </Container>
  );
}
