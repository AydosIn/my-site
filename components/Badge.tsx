export function Badge({ label }: { label: string }) {
    return <span className="rounded border px-2 py-0.5 text-xs text-gray-700">{label}</span>;
  }