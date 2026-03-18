export function Card({
    title,
    subtitle,
    meta,
    children
  }: {
    title: string;
    subtitle?: string;
    meta?: string;
    children?: React.ReactNode;
  }) {
    return (
      <div className="rounded-md border border-neutral-200 p-4">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            {subtitle ? <div className="text-sm text-gray-600">{subtitle}</div> : null}
          </div>
          {meta ? <div className="text-sm text-gray-600">{meta}</div> : null}
        </div>
        {children ? <div className="mt-3">{children}</div> : null}
      </div>
    );
  }