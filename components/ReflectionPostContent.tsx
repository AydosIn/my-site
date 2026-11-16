import Link from "next/link";
import { site } from "@data/site";
import { Page } from "@components/Page";

type Props = {
  title: string;
  date: string;
  isoDate: string;
  html: string;
};

export function ReflectionPostContent({ title, date, isoDate, html }: Props) {
  return (
    <Page as="article" title={title} sub={<time dateTime={isoDate}>{date}</time>}>
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

      <p className="page-note">
        Thoughts on this? Tell me on{" "}
        <a href={site.contact.telegram} target="_blank" rel="noreferrer">
          Telegram
        </a>{" "}
        or by <a href={`mailto:${site.contact.email}`}>email</a>.
      </p>

      <p className="page-end">
        <Link href="/reflections" className="more">
          All writing
        </Link>
      </p>
    </Page>
  );
}
