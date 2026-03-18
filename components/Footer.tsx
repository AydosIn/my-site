import { site } from "@data/site";

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #f0f0f0',
      background: '#fff',
      padding: '24px 40px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ fontSize: '12px', color: '#bbb' }}>
          © {new Date().getFullYear()} {site.ownerName}
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { label: 'GitHub', href: site.contact.github },
            { label: 'LinkedIn', href: site.contact.linkedin },
            { label: 'Telegram', href: site.contact.telegram },
          ].map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={{
              fontSize: '12px',
              color: '#bbb',
              textDecoration: 'none',
            }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}