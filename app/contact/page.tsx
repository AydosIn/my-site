import { ContactCards } from "@components/ContactCards";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="page-shell contact-shell">
      <ContactCards />
    </div>
  );
}
