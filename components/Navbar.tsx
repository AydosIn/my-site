import { site } from "@data/site";

export function Navbar() {
  return (
    <header style={{
      background: '#fff',
      borderBottom: '1px solid #f0f0f0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '18px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="/" style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '16px',
          fontWeight: 700,
          color: '#111',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}>
          {site.ownerName}
        </a>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['Achievements', 'Books', 'Reflections'].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} style={{
              fontSize: '13px',
              color: '#666',
              textDecoration: 'none',
              fontWeight: 400,
            }}>
              {item}
            </a>
          ))}
          <a href="/contact" style={{
            background: '#2563eb',
            color: '#fff',
            padding: '8px 18px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 500,
            textDecoration: 'none',
          }}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}