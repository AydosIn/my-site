import Link from "next/link";
import { getAllReflections } from "@lib/reflections";
import { Page } from "@components/Page";
import { formatDate } from "@lib/utils";

export const metadata = { title: "Writing", alternates: { canonical: "/reflections" } };

export default async function ReflectionsPage() {
  const posts = await getAllReflections();

  return (
    <Page title="Writing" sub="Notes on people, work, and figuring things out.">
      {posts.length > 0 ? (
        <ul className="list list--loose">
          {posts.map((post) => (
            <li key={post.slug}>
              <div className="item">
                <Link href={`/reflections/${post.slug}`}>{post.title}</Link>
                <time className="label" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </div>
              {post.excerpt && <p className="item__desc">{post.excerpt}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="label">Nothing here yet.</p>
      )}
    </Page>
  );
}
