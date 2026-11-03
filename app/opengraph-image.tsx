import { ImageResponse } from "next/og";
import { site } from "@data/site";
import { BODY, EAR_LEFT, EAR_RIGHT, HEART } from "@components/BunnyMark";

export const alt = site.ownerName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a font subset from Google Fonts for the OG render. Satori can't use
// CSS font stacks, so we fail soft to its default font if the fetch fails.
async function loadGoogleFont(family: string, weight: number, text: string) {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
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

const line = { stroke: "#000", strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" } as const;

export default async function OgImage() {
  const name = site.ownerName.toLowerCase();
  const role = `${site.role.join("  ·  ")}`;
  const [hand, text] = await Promise.all([
    loadGoogleFont("Neucha", 400, name),
    loadGoogleFont("Roboto Condensed", 400, role),
  ]);

  const fonts = [
    hand && { name: "Neucha", data: hand, style: "normal" as const, weight: 400 as const },
    text && { name: "Roboto Condensed", data: text, style: "normal" as const, weight: 400 as const },
  ].filter((font) => font !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
        }}
      >
        <svg width="220" height="244" viewBox="18 4 108 120">
          <path d={EAR_LEFT} fill="#f6f4fa" {...line} />
          <path d={EAR_RIGHT} fill="#f6f4fa" {...line} />
          <path d={BODY} fill="#f6f4fa" {...line} />
          <circle cx="106" cy="98" r="6" fill="#f6f4fa" {...line} />
          <circle cx="42" cy="68" r="3" fill="#000" />
          <circle cx="30.5" cy="74" r="2" fill="#000" />
          <path d={HEART} fill="#ff6b77" {...line} />
        </svg>
        <div
          style={{
            marginTop: 28,
            color: "#f0f0f0",
            fontSize: 92,
            fontFamily: hand ? "Neucha" : "sans-serif",
          }}
        >
          {name}
        </div>
        <div
          style={{
            marginTop: 8,
            color: "#9a9a9a",
            fontSize: 36,
            fontFamily: text ? "Roboto Condensed" : "sans-serif",
          }}
        >
          {role}
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length > 0 ? fonts : undefined },
  );
}
