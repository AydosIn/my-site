import { ImageResponse } from "next/og";
import { site } from "@data/site";

export const alt = site.ownerName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link preview: the header of the site, large, on white. */
export default function OgImage() {
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
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ color: "#111827", fontSize: 84, fontWeight: 700 }}>{site.ownerName}</div>
        <div style={{ display: "flex", gap: 40, marginTop: 16, color: "#4b5563", fontSize: 40 }}>
          {site.role.map((part) => (
            <span key={part}>{part}</span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
