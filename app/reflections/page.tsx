import { getAllReflections } from "@lib/reflections";

export const metadata = { title: "Reflections" };

export default async function ReflectionsPage() {
  const posts = await getAllReflections();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="mb-4 text-xl font-semibold">Reflections</h2>
      <div className="grid gap-4">
        {posts.map((p) => (
          <div key={p.slug} className="rounded-md border border-neutral-200 p-4">
            <a href={"/reflections/" + p.slug}>
              <h3 className="text-lg font-medium">{p.title}</h3>
            </a>
            <div className="text-sm text-gray-600">{p.date}</div>
            {p.excerpt && (
              <p className="mt-2 text-gray-700">{p.excerpt}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}