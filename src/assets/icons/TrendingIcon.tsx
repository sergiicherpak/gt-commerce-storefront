import React from "react";

const TrendingIcon = ({ width = 32, height = 32, color = "#2A2D34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 250 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M219.43,209.06H31.86V36.94a4,4,0,1,0-8,0V213.06a4,4,0,0,0,4,4H219.43a4,4,0,0,0,0-8Z"
        fill={color}
      />
      <path
        d="M226.11,105.8l-2.7-26s0,0,0-.08a2.2,2.2,0,0,0-.07-.37c0-.13-.06-.25-.1-.38a2.15,2.15,0,0,0-.13-.32,3.26,3.26,0,0,0-.18-.38c0-.09-.11-.18-.17-.27a2.42,2.42,0,0,0-.27-.36l-.09-.13-.13-.11-.33-.3-.27-.2-.36-.2-.3-.16-.39-.13a3.18,3.18,0,0,0-.33-.09l-.39-.06c-.12,0-.24,0-.36,0H194.71a4,4,0,0,0,0,8h14.46l-55.94,51.38-26.65-28.75a4,4,0,0,0-5.56-.29L48.41,169.88a4,4,0,0,0,2.63,7,4,4,0,0,0,2.63-1l69.68-60.79,26.72,28.83a4,4,0,0,0,5.64.23l60.57-55.65,1.88,18.1a4,4,0,0,0,4,3.59l.42,0A4,4,0,0,0,226.11,105.8Z"
        fill={color}
      />
    </svg>
  );
};

export default React.memo(TrendingIcon);