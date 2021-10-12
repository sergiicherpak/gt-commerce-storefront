import React from "react";

const BlogIcon = ({ width = 32, height = 32, color = "#2A2D34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 50 42`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.32,24.94l4.48,3.59c.69.69,2.75.77,2.75-.77V24.94A5.46,5.46,0,0,0,49,19.49v-13A5.46,5.46,0,0,0,43.55,1H22.45A5.46,5.46,0,0,0,17,6.45v13a5.46,5.46,0,0,0,5.45,5.45Z"
        fill="none"
        stroke="#262626"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <g>
        <g>
          <path
            d="M17,9A16,16,0,0,0,3.16,33a1.59,1.59,0,0,0-.19.42L1.12,39.28c-.42,1.29.31,2,1.6,1.6L8.54,39A1.59,1.59,0,0,0,9,38.84,16,16,0,1,0,17,9Z"
            fill="none"
            stroke="#262626"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <path
          d="M17,19.49V9A16,16,0,0,0,3.16,33a1.59,1.59,0,0,0-.19.42L1.12,39.28c-.42,1.29.31,2,1.6,1.6L8.54,39A1.59,1.59,0,0,0,9,38.84,16,16,0,0,0,33,25v-.06H22.45A5.46,5.46,0,0,1,17,19.49Z"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <g>
        <rect
          x="10"
          y="24.95"
          width="5"
          height="0.1"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <rect
          x="10"
          y="29.95"
          width="14"
          height="0.1"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <rect
          x="10"
          y="19.95"
          width="3"
          height="0.1"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <g>
        <circle
          cx="33"
          cy="13"
          r="0.5"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <circle
          cx="27"
          cy="13"
          r="0.5"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <circle
          cx="39"
          cy="13"
          r="0.5"
          fill="none"
          stroke="#262626"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default React.memo(BlogIcon);
