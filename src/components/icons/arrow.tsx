import React from "react";

const Arrow = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
    >
      <g>
        <path d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"></path>
      </g>
    </svg>
  );
};

export default Arrow;
