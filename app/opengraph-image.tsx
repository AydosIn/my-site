import { ImageResponse } from "next/og";
import { site } from "@data/site";

export const alt = site.ownerName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a font subset from Google Fonts for the OG render. Satori can't use
// CSS font stacks, so we fail soft to its default font if the fetch fails.
async function loadGoogleFont(family: string, text: string) {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@400;700&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(cssUrl)).text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!match) return null;
    const res = await fetch(match[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const facts = site.devFacts.join("  ·  ");
  const text = `~/aydos $ whoami${site.ownerName}${facts}`;
  const fontData = await loadGoogleFont("JetBrains Mono", text);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          backgroundColor: "#000000",
          fontFamily: fontData ? "JetBrains Mono" : "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, marginBottom: 36 }}>
          <span style={{ color: "#8f8f8f" }}>~/aydos $&nbsp;</span>
          <span style={{ color: "#4ade80" }}>whoami</span>
        </div>
        <div
          style={{
            color: "#f0f0f0",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            marginBottom: 32,
          }}
        >
          {site.ownerName.toLowerCase()}
        </div>
        <div style={{ color: "#8f8f8f", fontSize: 30 }}>{facts}</div>
        <div
          style={{
            marginTop: 56,
            width: 120,
            height: 4,
            backgroundColor: "#4ade80",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [{ name: "JetBrains Mono", data: fontData, style: "normal" as const }]
        : undefined,
    },
  );
}
