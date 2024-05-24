import React from "react";

const Star = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      color="var(--token-93a0d621-2ab6-47e4-87c4-d713c78e9797, rgb(187, 75, 54))"
    >
      <g color="var(--token-93a0d621-2ab6-47e4-87c4-d713c78e9797, rgb(187, 75, 54))">
        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
      </g>
    </svg>
  );
};

export default Star;
