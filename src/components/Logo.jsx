import React from "react";

const Logo = ({ className }) => {
  return (
    <svg
      width="220"
      height="64"
      viewBox="0 0 320 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="logoTitle"
      className={className}
    >
      <title id="logoTitle">Product Dashboard Logo</title>

      {/* Icon */}
      <g>
        <rect width="64" height="64" rx="12" fill="url(#logo-gradient)" />
        <rect x="16" y="26" width="8" height="20" rx="3" fill="white" fillOpacity="0.7" />
        <rect x="28" y="18" width="8" height="36" rx="3" fill="white" />
        <rect x="40" y="30" width="8" height="16" rx="3" fill="white" fillOpacity="0.7" />
      </g>

      {/* Title */}
      <text
        x="84"
        y="34"
        fontFamily="Inter, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="var(--logo-text)"
      >
        Product
      </text>

      <text
        x="84"
        y="58"
        fontFamily="Inter, sans-serif"
        fontSize="18"
        fontWeight="400"
        fill="var(--logo-text)"
        opacity="0.9"
      >
        Dashboard
      </text>

      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7" />
          <stop offset="1" stopColor="#7e22ce" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
