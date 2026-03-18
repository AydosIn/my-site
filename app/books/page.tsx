import { Container } from "@components/Container";
import { Section } from "@components/Section";
import { Card } from "@components/Card";
import { Badge } from "@components/Badge";
import { books } from "@data/books";

export const metadata = { title: "Books" };

export default function BooksPage() {
  return (
    <Container>
      <Section title="Books I've Read">
        <div className="grid gap-4">
          {books.map((b) => (
            <Card key={b.id} title={b.title} subtitle={b.author} meta={b.year?.toString()}>
              <p className="text-gray-700">{b.takeaway}</p>
              {b.tags && b.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {b.tags.map((t) => <Badge key={t} label={t} />)}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  );
}