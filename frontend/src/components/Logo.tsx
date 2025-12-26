import { SVGAttributes } from "react";

export default function Logo({
  showText = true,
  ...props
}: {
  showText?: boolean;
} & SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="340"
      height="100"
      viewBox="0 0 340 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#155dfc", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#4F46E5", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#7C3AED", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="postGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#EC4899", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#F97316", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#FBBF24", stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="strongGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Icon background with modern gradient */}
      <rect
        x="5"
        y="10"
        width="80"
        height="80"
        rx="24"
        fill="url(#iconGrad)"
        filter="url(#glow)"
      />

      {/* Stylized modern icon */}
      <g transform="translate(45, 50)">
        {/* Lightning bolt style for speed/energy */}
        <path
          d="M -5 -18 L 8 -2 L 0 -2 L 5 18 L -8 2 L 0 2 Z"
          fill="white"
          opacity="0.95"
          filter="url(#glow)"
        />
        {/* Orbiting dots for feed motion */}
        <circle cx="-15" cy="-12" r="2" fill="white" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8;1;0.8"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="15" cy="-12" r="2" fill="white" opacity="0.6">
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="1.5s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="15" cy="12" r="2" fill="white" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="1.5s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Text */}
      {showText && (
        <>
          <text
            x="100"
            y="52"
            fontFamily="'Inter', 'SF Pro Display', -apple-system, sans-serif"
            fontSize="42"
            fontWeight="900"
            fill="#155dfc"
            letterSpacing="-2"
            style={{ textShadow: "0 2px 8px rgba(21, 93, 252, 0.3)" }}
          >
            feed
          </text>
          <text
            x="195"
            y="52"
            fontFamily="'Inter', 'SF Pro Display', -apple-system, sans-serif"
            fontSize="42"
            fontWeight="900"
            fill="url(#postGrad)"
            letterSpacing="-2"
            filter="url(#strongGlow)"
          >
            post
          </text>

          {/* Modern floating elements */}
          <circle cx="325" cy="38" r="3" fill="#EC4899" opacity="0.8">
            <animate
              attributeName="cy"
              values="38;32;38"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="332" cy="48" r="2.5" fill="#F97316" opacity="0.7">
            <animate
              attributeName="cy"
              values="48;54;48"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="318" cy="52" r="2" fill="#FBBF24" opacity="0.6">
            <animate
              attributeName="cy"
              values="52;46;52"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Modern tagline */}
          <text
            x="102"
            y="74"
            fontFamily="'Inter', 'SF Pro Display', -apple-system, sans-serif"
            fontSize="10"
            fontWeight="600"
            fill="#6b7280"
            letterSpacing="3"
            opacity="0.8"
          >
            SHARE • CONNECT • INSPIRE
          </text>
        </>
      )}
    </svg>
  );
}
