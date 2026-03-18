export const metadata = { title: "Reflections" };

export default function ReflectionsPage() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 40px" }}>

        <h1 style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "48px", fontWeight: 800, color: "#111",
          letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "8px",
        }}>
          Reflections
        </h1>
        <p style={{ fontSize: "13px", color: "#aaa", fontWeight: 300, marginBottom: "48px" }}>
          Thoughts, ideas, and things I am figuring out.
        </p>

        <div style={{
          border: "1.5px dashed #e0e0e0", borderRadius: "16px",
          padding: "72px 40px", textAlign: "center", background: "#fafafa",
        }}>
          <div style={{ fontSize: "40px", marginBottom: "20px" }}>✍️</div>
          <h2 style={{
            fontFamily: "Syne, sans-serif", fontSize: "22px",
            fontWeight: 800, color: "#111", marginBottom: "12px",
          }}>
            Coming soon
          </h2>
          <p style={{
            fontSize: "14px", color: "#aaa", fontWeight: 300,
            lineHeight: 1.7, maxWidth: "340px", margin: "0 auto 28px",
          }}>
            I am working on my first reflections. Check back soon — ideas are brewing.
          </p>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "#fff", border: "1px solid #e8e8e8",
            borderRadius: "100px", padding: "8px 18px",
          }}>
            <div style={{
              width: "6px", height: "6px",
              background: "#22c55e", borderRadius: "50%",
            }} />
            <span style={{ fontSize: "12px", color: "#666" }}>
              Writing in progress
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}