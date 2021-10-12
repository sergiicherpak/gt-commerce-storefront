import React from "react";

const CheckCircleIcon = ({ width = 25, height = 25, color = "#2A2D34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4204 23C9.63528 23 7.01983 21.9077 5.04997 19.9232C3.08011 17.9387 2 15.3038 2 12.4979C2 9.69208 3.08425 7.05718 5.05411 5.07683C7.02397 3.09649 9.63942 2 12.4204 2C13.0908 2 13.6329 2.54616 13.6329 3.22156C13.6329 3.89696 13.0908 4.44729 12.4204 4.44729C8.01304 4.44729 4.42508 8.06194 4.42508 12.5021C4.42508 16.9422 8.01304 20.5527 12.4204 20.5527C16.8278 20.5527 20.4157 16.9381 20.4157 12.4979C20.4157 11.8225 20.9578 11.2764 21.6283 11.2764C22.2987 11.2764 22.8408 11.8225 22.8408 12.4979C22.8408 15.3038 21.7565 17.9387 19.7867 19.9232C17.8168 21.9077 15.2055 23 12.4204 23Z"
        fill={color}
      />
      <path
        d="M12.1719 15.4494C11.5884 15.4494 11.0049 15.2285 10.5497 14.7907L7.5287 11.8807C7.04451 11.4137 7.02796 10.6382 7.49145 10.1505C7.95495 9.66267 8.72468 9.64599 9.20887 10.1129L12.1719 12.9688L20.8501 4.53045C21.3343 4.05933 22.0999 4.07601 22.5675 4.55963C23.0351 5.04742 23.0186 5.81871 22.5385 6.28983L13.8025 14.7865C13.3431 15.2285 12.7555 15.4494 12.1719 15.4494Z"
        fill={color}
      />
    </svg>
  );
};

export default React.memo(CheckCircleIcon);
