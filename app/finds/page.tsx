import { finds } from "@data/finds";
import { FindsList } from "@components/FindsList";

export const metadata = { title: "Finds" };

export default function FindsPage() {
  return (
    <div className="page-shell">
      <FindsList finds={finds} />
    </div>
  );
}
