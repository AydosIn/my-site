import { SiteHeader } from "@components/SiteHeader";

/** Every page but home: the header, then the page's own title and content. */
export function Page({
  title,
  sub,
  children,
  as: Tag = "div",
}: {
  title: string;
  sub?: React.ReactNode;
  children: React.ReactNode;
  as?: "div" | "article";
}) {
  return (
    <div className="wrap">
      <SiteHeader />
      <Tag>
        <header className="page-head">
          <h1 className="page-title">{title}</h1>
          {sub && <p className="label">{sub}</p>}
        </header>
        {children}
      </Tag>
    </div>
  );
}
