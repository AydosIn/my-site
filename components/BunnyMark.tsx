/**
 * The bunny-and-heart mark, small and still: used in the navbar and on the 404 page.
 * The animated version on the home page is BunnyLogo; both draw from these paths.
 */

export const HEART =
  "M104 44 C 90 34, 86 24, 92 18 C 97 13, 103 16, 104 21 C 106 15, 113 13, 117 18 C 122 25, 116 35, 104 44 Z";

export const EAR_LEFT = "M50 60 C 42 40, 40 20, 47 10 C 52 18, 56 38, 58 56";
export const EAR_RIGHT = "M60 58 C 60 38, 64 22, 74 14 C 76 26, 72 42, 66 58";
export const BODY =
  "M30 76 C 22 66, 30 54, 44 54 C 56 54, 64 62, 66 70 C 74 64, 92 64, 102 76 C 112 88, 110 106, 100 114 L 72 116 C 70 110, 64 108, 58 112 L 46 114 C 40 112, 42 104, 50 102 C 44 96, 40 90, 38 86 C 32 84, 28 82, 30 76 Z";

const line = { stroke: "var(--bunny-line)", strokeLinejoin: "round", strokeLinecap: "round" } as const;

export function BunnyMark({
  className,
  lost = false,
}: {
  className?: string;
  /** The 404 bunny: its heart has wandered off, so a question mark floats where it was. */
  lost?: boolean;
}) {
  return (
    <svg className={className} viewBox="18 4 108 120" aria-hidden="true" focusable="false">
      <g className="bunny-mark__ears">
        <path d={EAR_LEFT} fill="var(--bunny)" strokeWidth="3" {...line} />
        <path d={EAR_RIGHT} fill="var(--bunny)" strokeWidth="3" {...line} />
      </g>
      <path d={BODY} fill="var(--bunny)" strokeWidth="3" {...line} />
      <circle cx="106" cy="98" r="6" fill="var(--bunny)" strokeWidth="2.8" {...line} />
      <circle cx="42" cy="68" r="3" fill="var(--bunny-line)" />
      <circle cx="30.5" cy="74" r="2" fill="var(--bunny-line)" />
      {lost ? (
        <text
          x="104"
          y="40"
          textAnchor="middle"
          className="bunny-mark__question"
          fill="var(--heart)"
          fontSize="34"
        >
          ?
        </text>
      ) : (
        <path className="bunny-mark__heart" d={HEART} fill="var(--heart)" strokeWidth="2.8" {...line} />
      )}
    </svg>
  );
}
