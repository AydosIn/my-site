import Link from "next/link";

type Props = {
  title: string;
  date: string;
  html: string;
};

export function ReflectionPostContent({ title, date, html }: Props) {
  return (
    <div className="page-shell reflection-post">
      <h1 className="reflection-post__title">{title}</h1>
      <div className="reflection-post__date">{date}</div>
      <div className="reflection-post__body" dangerouslySetInnerHTML={{ __html: html }} />
      <Link href="/reflections" className="reflection-post__back">
        ← reflections
      </Link>
    </div>
  );
}
