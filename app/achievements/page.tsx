import { Container } from "@components/Container";
import { Section } from "@components/Section";
import { Card } from "@components/Card";
import { achievements } from "@data/achievements";

export const metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <Container>
      <Section title="Achievements">
        <div className="grid gap-4">
          {achievements.map((a) => (
            <Card key={a.id} title={a.title} subtitle={a.organization} meta={a.date}>
              <p className="text-gray-700">{a.description}</p>
              {a.link && (
                <a className="mt-3 inline-flex text-sm" href={a.link} target="_blank" rel="noreferrer">
                  View
                </a>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  );
}