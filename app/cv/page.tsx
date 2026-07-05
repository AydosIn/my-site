import { CvContent } from "@components/CvContent";

export const metadata = { title: "cv" };

export default function CvPage() {
  return (
    <div className="page-shell">
      <CvContent />
    </div>
  );
}
