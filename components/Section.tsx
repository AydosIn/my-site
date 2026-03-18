export function Section({ title, children }: { title?: string; children: React.ReactNode }) {
    return (
      <section className="mb-10 md:mb-12">
        {title ? <h2 className="mb-4 text-xl md:text-2xl font-semibold">{title}</h2> : null}
        {children}
      </section>
    );
  }