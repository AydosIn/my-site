import Link from "next/link";
import { BunnyMark } from "@components/BunnyMark";

export const metadata = { title: "lost" };

export default function NotFound() {
  return (
    <div className="page lost">
      <BunnyMark className="lost__bunny" lost />
      <h1 className="page-title">this page hopped away</h1>
      <p className="page-sub">the link might be old, or it never existed.</p>
      <ul className="lost__links">
        <li>
          <Link href="/">go home</Link>
        </li>
        <li>
          <Link href="/reflections">read something</Link>
        </li>
        <li>
          <Link href="/projects">see what i&apos;ve built</Link>
        </li>
      </ul>
    </div>
  );
}
