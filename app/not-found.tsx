import Link from "next/link";
import { Page } from "@components/Page";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Page title="Page not found" sub="The link might be old, or it never existed.">
      <ul className="list">
        <li className="item">
          <Link href="/">Home</Link>
        </li>
        <li className="item">
          <Link href="/reflections">Writing</Link>
        </li>
        <li className="item">
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </Page>
  );
}
