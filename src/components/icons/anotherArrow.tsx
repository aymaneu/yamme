import React from "react";

const AnotherArrow = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <path
        fill="currentColor"
        d="M24.285 11.284L16 19.571l-8.285-8.288a1.01 1.01 0 10-1.429 1.43l8.999 9.002a1.009 1.009 0 001.428 0l8.999-9.002a1.01 1.01 0 10-1.427-1.429z"
      ></path>
    </svg>
  );
};

export default AnotherArrow;
