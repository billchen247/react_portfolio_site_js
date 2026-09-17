// Custom brand mark: hexagon shape with the initials "AB".
// Not sourced from any third-party brand — drawn inline with SVG primitives.
export default function Logo({ size = 40, title = 'Alex Bennett logo' }) {
  return (
    <svg
      role="img"
      aria-label={title}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#22d3aa" />
        </linearGradient>
      </defs>
      {/* Hexagon container. Coordinates place the shape centered in the 64x64 box. */}
      <polygon
        points="32,4 58,18 58,46 32,60 6,46 6,18"
        fill="url(#logoGradient)"
        stroke="#0f1226"
        strokeWidth="2"
      />
      {/* Initials in a dark tone for contrast against the light hex fill. */}
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#0f1226"
      >
        AB
      </text>
    </svg>
  );
}
