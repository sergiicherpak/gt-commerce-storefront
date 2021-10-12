import React from "react";

const VintageIcon = ({ width = 32, height = 32, color = "#2A2D34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M221.65,45.56H203.17V37.34a14,14,0,0,0-28,0v8.22H74.8V37.34a14,14,0,0,0-28,0v8.22H28.35A19.37,19.37,0,0,0,9,64.91V207.29a19.37,19.37,0,0,0,19.35,19.35h193.3A19.37,19.37,0,0,0,241,207.29V64.91A19.37,19.37,0,0,0,221.65,45.56Zm-39.46,0V37.34a7,7,0,1,1,14,0V60.77a7,7,0,1,1-14,0V45.56Zm-128.36,0V37.34a7,7,0,1,1,14,0V60.77a7,7,0,0,1-14,0V45.56ZM16,64.91A12.38,12.38,0,0,1,28.35,52.55H46.83v8.22a14,14,0,0,0,28,0V52.55H175.2v8.22a14,14,0,0,0,28,0V52.55h18.48A12.38,12.38,0,0,1,234,64.91V89.84H16ZM234,207.29a12.37,12.37,0,0,1-12.36,12.36H28.35A12.37,12.37,0,0,1,16,207.29V96.83H234Z"
        fill={color}
      />
      <path
        d="M187.41,148.58a3.5,3.5,0,0,0,3.5-3.49v-22h22a3.5,3.5,0,0,0,0-7H187.41a3.49,3.49,0,0,0-3.49,3.49v25.45A3.49,3.49,0,0,0,187.41,148.58Z"
        fill={color}
      />
      <path
        d="M137.32,148.58a3.5,3.5,0,0,0,3.5-3.49v-22h22a3.5,3.5,0,0,0,0-7H137.32a3.49,3.49,0,0,0-3.49,3.49v25.45A3.49,3.49,0,0,0,137.32,148.58Z"
        fill={color}
      />
      <path
        d="M87.23,148.58a3.5,3.5,0,0,0,3.5-3.49v-22h22a3.5,3.5,0,0,0,0-7H87.23a3.49,3.49,0,0,0-3.49,3.49v25.45A3.49,3.49,0,0,0,87.23,148.58Z"
        fill={color}
      />
      <path
        d="M37.14,148.58a3.5,3.5,0,0,0,3.5-3.49v-22h22a3.5,3.5,0,0,0,0-7H37.14a3.49,3.49,0,0,0-3.49,3.49v25.45A3.49,3.49,0,0,0,37.14,148.58Z"
        fill={color}
      />
      <path
        d="M187.41,200.34a3.5,3.5,0,0,0,3.5-3.5v-22h22a3.5,3.5,0,0,0,0-7H187.41a3.49,3.49,0,0,0-3.49,3.5v25.44A3.5,3.5,0,0,0,187.41,200.34Z"
        fill={color}
      />
      <path
        d="M137.32,200.34a3.5,3.5,0,0,0,3.5-3.5v-22h22a3.5,3.5,0,0,0,0-7H137.32a3.49,3.49,0,0,0-3.49,3.5v25.44A3.5,3.5,0,0,0,137.32,200.34Z"
        fill={color}
      />
      <path
        d="M87.23,200.34a3.5,3.5,0,0,0,3.5-3.5v-22h22a3.5,3.5,0,0,0,0-7H87.23a3.49,3.49,0,0,0-3.49,3.5v25.44A3.5,3.5,0,0,0,87.23,200.34Z"
        fill={color}
      />
      <path
        d="M37.14,200.34a3.5,3.5,0,0,0,3.5-3.5v-22h22a3.5,3.5,0,0,0,0-7H37.14a3.49,3.49,0,0,0-3.49,3.5v25.44A3.5,3.5,0,0,0,37.14,200.34Z"
        fill={color}
      />
    </svg>
  );
};

export default React.memo(VintageIcon);
