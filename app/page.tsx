export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh", transition: "all 0.3s" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "72px 32px 64px" }}>
        <h1
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "52px",
            fontWeight: 800,
            color: "var(--fg)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            marginBottom: "28px",
            transition: "all 0.3s",
          }}
        >
          I&apos;m Aydos.
        </h1>

        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: 1.85,
            color: "var(--fg2)",
            display: "grid",
            gap: "18px",
            transition: "all 0.3s",
          }}
        >
          <p>I enjoy presenting myself and meeting new people. That&apos;s literally the whole point of this website.</p>
          <p>
            I study Data Science at the{" "}
            <a href="https://aut-edu.uz/" target="_blank" rel="noreferrer" style={{ color: "var(--fg)", textDecoration: "underline" }}>
              American University of Technology
            </a>{" "}
            in Tashkent. I am a class of 2029. Originally, I came from Nukus, Karakalpakstan. However, it didn&apos;t
            stop me from growing.
          </p>
          <p>
            For three years I worked hard towards one goal. I wanted to get into a top university in the United States
            as an international student. It didn&apos;t work out for me. I was angry and embarassed at the same time.
            But when I came to Tashkent, I saw something different. Startups, smart people, real opportunities. So, I
            changed my plans. Now I am working at{" "}
            <a href="https://aisha.group/" target="_blank" rel="noreferrer" style={{ color: "var(--fg)", textDecoration: "underline" }}>
              Aisha AI
            </a>{" "}
            as a project manager, studying Data Science on a full scholarship, and slowly figuring out how businesses
            actually work. I don&apos;t know the endpoint here, but I am enjoying the process very much.
          </p>
          <p>
            Before all of this, I did not build anything related to business or technology. Why? Because I enjoyed my
            youth. I used to go out with my friends and come home very late. I used to drive a car without a driving
            licence. I went to martial arts and fought with students from different schools. As you see, I had so much
            fun in my childhood. Those were good years.
          </p>
          <p>
            Now I care about growing, personally and professionally. I read a lot about philosophy, education, and
            humans. I have more questions than answers right now. And I think that is okay.
          </p>
          <p>
            That&apos;s me, in a nutshell. I also run a{" "}
            <a href="https://t.me/aydossthoughts" target="_blank" rel="noreferrer" style={{ color: "var(--fg)", textDecoration: "underline" }}>
              telegram channel
            </a>{" "}
            where I share my reflections on life, education, and things I observe. One more thing, if you are curious
            about why AUT, why Data Science, why Tashkent not gap year, I will be posting about them either in my
            telegram channel or reflection section. Thank you for reading. I appreciate it. If any of this is
            interesting to you,{" "}
            <a href="/contact" style={{ color: "var(--fg)", textDecoration: "underline" }}>
              let me know
            </a>
            .
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", margin: "40px 0 24px", transition: "all 0.3s" }} />

        <section style={{ marginBottom: "28px" }}>
          <div style={{ fontSize: "11px", color: "var(--muted2)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
            Reflections
          </div>
          <div style={{ display: "grid", gap: "8px" }}>
            {[
              { title: "Starting this site", meta: "Mar 2026" },
              { title: "A small lesson", meta: "Mar 2026" },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "14px" }}>
                <span style={{ color: "var(--fg)" }}>{item.title}</span>
                <span style={{ color: "var(--muted)" }}>{item.meta}</span>
              </div>
            ))}
          </div>
          <a href="/reflections" style={{ display: "inline-block", marginTop: "10px", color: "#2563eb", textDecoration: "none", fontSize: "14px" }}>
            View all reflections →
          </a>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <div style={{ fontSize: "11px", color: "var(--muted2)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
            Recently read
          </div>
          <div style={{ display: "grid", gap: "8px" }}>
            {[
              { title: "Clean Code", meta: "Robert C. Martin" },
              { title: "Atomic Habits", meta: "James Clear" },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "14px" }}>
                <span style={{ color: "var(--fg)" }}>{item.title}</span>
                <span style={{ color: "var(--muted)" }}>{item.meta}</span>
              </div>
            ))}
          </div>
          <a href="/books" style={{ display: "inline-block", marginTop: "10px", color: "#2563eb", textDecoration: "none", fontSize: "14px" }}>
            View all books →
          </a>
        </section>

        <section>
          <div style={{ fontSize: "11px", color: "var(--muted2)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
            Finds
          </div>
          <div style={{ display: "grid", gap: "8px" }}>
            {[
              { title: "How to Think for Yourself - Paul Graham", meta: "paulgraham.com" },
              { title: "The Cook and the Chef - Wait But Why", meta: "waitbutwhy.com" },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", justifyContent: "space-between", gap: "14px", fontSize: "14px" }}>
                <span style={{ color: "var(--fg)" }}>{item.title}</span>
                <span style={{ color: "var(--muted)" }}>{item.meta}</span>
              </div>
            ))}
          </div>
          <a href="/finds" style={{ display: "inline-block", marginTop: "10px", color: "#2563eb", textDecoration: "none", fontSize: "14px" }}>
            View all finds →
          </a>
        </section>
      </div>
    </div>
  );
}