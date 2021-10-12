import React from "react";

const TequilaIcon = ({ width = 32, height = 32, color = "#2A2D34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0961 5C23.444 5 23.7768 5.15127 24.0087 5.4185C24.2406 5.68573 24.3415 6.03364 24.286 6.38659L23.2826 13.1935C23.2272 13.5767 22.8641 13.8439 22.4809 13.7884C22.0977 13.733 21.8305 13.3699 21.886 12.9867L22.4658 9.05891H8.43872L9.98664 19.5516C10.0119 19.5592 10.0371 19.568 10.0623 19.5768C10.0875 19.5856 10.1127 19.5944 10.1379 19.602L10.1574 19.6085C11.7575 20.1402 13.1423 20.6004 15.4523 20.6004C15.8002 20.6004 16.143 20.5903 16.4708 20.5701C16.859 20.5398 17.1968 20.8373 17.222 21.2256C17.2523 21.6138 16.9548 21.9517 16.5666 21.9769C16.2086 22.0021 15.8355 22.0122 15.4523 22.0122C13.1732 22.0122 11.6858 21.5937 10.2186 21.1147L10.753 24.7248C10.7833 24.9215 10.9547 25.0727 11.1564 25.0727H19.7582C20.1465 25.0727 20.4641 25.3904 20.4641 25.7786C20.4641 26.1669 20.1465 26.4845 19.7582 26.4845H11.1615C10.264 26.4845 9.49251 25.8139 9.36142 24.9315L6.62357 6.38659C6.57315 6.03868 6.67399 5.68573 6.90592 5.4185C7.13282 5.15127 7.4656 5 7.81855 5H23.0961ZM8.05552 6.40676L8.23704 7.64208H22.6826L22.8641 6.40676H8.05552Z"
        fill={color}
      />
      <path
        d="M5.91511 21.7675C5.91511 22.1323 5.61938 22.428 5.25458 22.428C4.88978 22.428 4.59405 22.1323 4.59405 21.7675C4.59405 21.4027 4.88978 21.107 5.25458 21.107C5.61938 21.107 5.91511 21.4027 5.91511 21.7675Z"
        fill={color}
      />
      <path
        d="M3.94483 24.4362C4.30963 24.4362 4.60536 24.1404 4.60536 23.7757C4.60536 23.4109 4.30963 23.1152 3.94483 23.1152C3.58004 23.1152 3.28431 23.4109 3.28431 23.7757C3.28431 24.1404 3.58004 24.4362 3.94483 24.4362Z"
        fill={color}
      />
      <path
        d="M7.23389 23.7758C7.23389 24.1406 6.93816 24.4363 6.57337 24.4363C6.20857 24.4363 5.91284 24.1406 5.91284 23.7758C5.91284 23.411 6.20857 23.1153 6.57337 23.1153C6.93816 23.1153 7.23389 23.411 7.23389 23.7758Z"
        fill={color}
      />
      <path
        d="M5.2547 26.4565C5.6195 26.4565 5.91523 26.1608 5.91523 25.796C5.91523 25.4312 5.6195 25.1355 5.2547 25.1355C4.8899 25.1355 4.59417 25.4312 4.59417 25.796C4.59417 26.1608 4.8899 26.4565 5.2547 26.4565Z"
        fill={color}
      />
      <path
        d="M8.50831 25.796C8.50831 26.1608 8.21259 26.4565 7.84778 26.4565C7.48298 26.4565 7.18724 26.1608 7.18724 25.796C7.18724 25.4312 7.48298 25.1355 7.84778 25.1355C8.21259 25.1355 8.50831 25.4312 8.50831 25.796Z"
        fill={color}
      />
      <path
        d="M2.66051 26.4575C3.0253 26.4575 3.32103 26.1618 3.32103 25.797C3.32103 25.4322 3.0253 25.1365 2.66051 25.1365C2.29572 25.1365 2 25.4322 2 25.797C2 26.1618 2.29572 26.4575 2.66051 26.4575Z"
        fill="#2A2D34"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2483 13.7873L30.3291 22.8985C30.5308 23.1002 30.6418 23.3825 30.6367 23.6598C30.6266 23.9472 30.5006 24.2195 30.2888 24.4111C28.872 25.6918 27.0921 26.3221 25.3122 26.3221C23.3912 26.3221 21.4651 25.5809 20.0029 24.1187C17.1893 21.3052 17.0683 16.7823 19.7306 13.8276C19.9222 13.6108 20.1945 13.4848 20.4819 13.4797C20.7693 13.4747 21.0466 13.5856 21.2483 13.7873ZM21.5357 23.5993C22.4382 24.3153 23.5021 24.7389 24.5962 24.87L24.6063 20.569L21.5357 23.5993ZM23.6181 18.1689L20.5272 15.068C19.7961 15.9907 19.3776 17.0697 19.2516 18.1689H23.6181ZM23.5878 19.5858H19.2667C19.4028 20.6598 19.8213 21.7085 20.5323 22.601L23.5878 19.5858ZM26.0181 20.574L26.008 24.875C27.0871 24.749 28.1459 24.3305 29.0535 23.6195L26.0181 20.574Z"
        fill="#2A2D34"
      />
    </svg>
  );
};

export default React.memo(TequilaIcon);