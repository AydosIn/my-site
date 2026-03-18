import { site } from "@data/site";
import { books } from "@data/books";
import { achievements } from "@data/achievements";

export default function HomePage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '90px 40px 70px' }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: '#f4f4f4', border: '1px solid #e8e8e8',
          borderRadius: '100px', padding: '6px 14px', marginBottom: '32px'
        }}>
          <div style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%' }} />
          <span style={{ fontSize: '12px', color: '#666' }}>Engineer · Critical Thinker · Reader</span>
        </div>

        {/* Hero */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '68px',
          fontWeight: 800,
          color: '#111',
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          marginBottom: '24px',
          maxWidth: '700px',
        }}>
          Building things<br />
          <span style={{ color: '#bbb' }}>people want.</span>
        </h1>

        <p style={{
          fontSize: '16px', color: '#888', lineHeight: 1.7,
          maxWidth: '480px', marginBottom: '40px', fontWeight: 300,
        }}>
          {site.whatIDo}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '64px' }}>
          <a href="/achievements" style={{
            background: '#111', color: '#fff', padding: '12px 24px',
            borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none',
          }}>
            View Achievements
          </a>
          <a href="/reflections" style={{
            background: '#2563eb', color: '#fff', padding: '12px 24px',
            borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none',
          }}>
            Read Reflections →
          </a>
          <a href="/books" style={{
            background: 'transparent', color: '#666', padding: '12px 24px',
            borderRadius: '8px', fontSize: '14px', fontWeight: 400,
            textDecoration: 'none', border: '1px solid #e0e0e0',
          }}>
            Books
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '48px',
          paddingTop: '48px', borderTop: '1px solid #f0f0f0',
          marginBottom: '80px',
        }}>
          {[
            { num: `${achievements.length}`, label: 'Achievements' },
            { num: `${books.length}`, label: 'Books Read' },
            { num: '∞', label: 'Ideas Explored' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: '36px',
                fontWeight: 700, color: '#111', marginBottom: '4px',
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: '12px', color: '#aaa' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px',
        }}>
          {site.nav.map((item, i) => (
            <a key={item.href} href={item.href} style={{
              background: '#fafafa', border: '1px solid #f0f0f0',
              borderRadius: '12px', padding: '24px 20px', textDecoration: 'none',
              display: 'block',
            }}>
              <div style={{
                fontSize: '10px', color: '#ccc', textTransform: 'uppercase',
                letterSpacing: '0.1em', marginBottom: '10px',
              }}>
                0{i + 1}
              </div>
              <div style={{
                fontFamily: 'Syne, sans-serif', fontSize: '16px',
                fontWeight: 600, color: '#111', marginBottom: '8px',
              }}>
                {item.label}
              </div>
              <div style={{ fontSize: '12px', color: '#aaa', lineHeight: 1.6 }}>
                {item.description}
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}