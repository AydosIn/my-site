/**
 * Hand-drawn version of the site icon (a bunny and a heart).
 * The heart beats; the ears tilt on hover (see .home-logo in globals.css).
 */
export function BunnyLogo() {
  return (
    <svg className="home-logo" viewBox="0 0 132 132" role="img" aria-label="a bunny and a heart">
      <g className="home-logo__heart">
        <path
          d="M104 44 C 90 34, 86 24, 92 18 C 97 13, 103 16, 104 21 C 106 15, 113 13, 117 18 C 122 25, 116 35, 104 44 Z"
          fill="var(--heart)"
          stroke="var(--bunny-line)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </g>
      <g className="home-logo__ears">
        <path
          d="M50 60 C 42 40, 40 20, 47 10 C 52 18, 56 38, 58 56"
          fill="var(--bunny)"
          stroke="var(--bunny-line)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M60 58 C 60 38, 64 22, 74 14 C 76 26, 72 42, 66 58"
          fill="var(--bunny)"
          stroke="var(--bunny-line)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M49 22 C 50 32, 52 42, 54 50" fill="none" stroke="var(--bunny-shade)" strokeWidth="2" strokeLinecap="round" />
        <path d="M70 24 C 67 34, 65 42, 63 50" fill="none" stroke="var(--bunny-shade)" strokeWidth="2" strokeLinecap="round" />
      </g>
      <path
        d="M30 76 C 22 66, 30 54, 44 54 C 56 54, 64 62, 66 70 C 74 64, 92 64, 102 76 C 112 88, 110 106, 100 114
           L 72 116 C 70 110, 64 108, 58 112 L 46 114 C 40 112, 42 104, 50 102 C 44 96, 40 90, 38 86 C 32 84, 28 82, 30 76 Z"
        fill="var(--bunny)"
        stroke="var(--bunny-line)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="106" cy="98" r="6" fill="var(--bunny)" stroke="var(--bunny-line)" strokeWidth="2.2" />
      <circle cx="42" cy="68" r="2.6" fill="var(--bunny-line)" />
      <circle cx="30.5" cy="74" r="1.8" fill="var(--bunny-line)" />
      <path
        d="M24 120 C 50 117, 84 122, 116 118"
        fill="none"
        stroke="var(--dim)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 5"
      />
    </svg>
  );
}
