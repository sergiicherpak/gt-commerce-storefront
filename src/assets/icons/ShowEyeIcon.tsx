import React from "react";

const ShowEyeIcon = ({ width = 32, height = 32, color = "#2A2D34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.035 8.72847C22.7237 8.38511 22.209 8.38511 21.8976 8.72847C21.5863 9.07182 21.5863 9.62119 21.8976 9.96455L22.8317 10.974C23.2002 11.3723 23.4035 11.9079 23.4035 12.471C23.4035 13.0341 23.2002 13.5698 22.8317 13.9681L21.815 15.0737C16.6873 20.636 8.3381 20.636 3.20403 15.0737L2.18738 13.9681C1.81885 13.5698 1.61552 13.0341 1.61552 12.471C1.61552 11.9079 1.81885 11.3723 2.18738 10.974L3.11507 9.96455C5.01493 7.90441 7.41676 6.53099 10.0473 5.99536C12.6207 5.47346 15.2513 5.77561 17.6531 6.86748C18.0598 7.05289 18.5363 6.84688 18.7079 6.40052C18.8795 5.95415 18.6888 5.44599 18.2758 5.26058C15.5817 4.03136 12.6334 3.69487 9.7487 4.27858C6.79406 4.87602 4.1063 6.42112 1.9777 8.72847L1.04365 9.73793C-0.347884 11.2487 -0.347884 13.7003 1.04365 15.2042L2.0603 16.3098C4.84973 19.3382 8.56049 21 12.5 21C16.4395 21 20.1503 19.3313 22.9397 16.3098L23.9563 15.2042C25.3479 13.6934 25.3479 11.2418 23.9563 9.73793L23.035 8.72847Z"
        fill={color}
      />
      <path
        d="M7.8431 12.4709C7.8431 15.2589 9.93358 17.532 12.507 17.532C15.0804 17.532 17.1708 15.2589 17.1708 12.4709C17.1708 9.68284 15.0804 7.40983 12.507 7.40983C9.93358 7.40983 7.8431 9.68284 7.8431 12.4709ZM15.5696 12.4709C15.5696 14.2975 14.1971 15.7877 12.5133 15.7877C10.8295 15.7877 9.45703 14.2975 9.45703 12.4709C9.45703 10.6442 10.8295 9.15407 12.5133 9.15407C14.1971 9.15407 15.5696 10.6442 15.5696 12.4709Z"
        fill={color}
      />
    </svg>
  );
};

export default React.memo(ShowEyeIcon);
