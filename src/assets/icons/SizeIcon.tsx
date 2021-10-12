import React from "react";

const SizeIcon = ({ width = 32, height = 32, color = "#2A2D34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8532 14.6304C23.2482 14.6304 23.5642 14.3172 23.5642 13.9258V10.6375C23.5642 9.42397 22.5767 8.44532 21.3523 8.44532H18.0346C17.6396 8.44532 17.3236 8.7585 17.3236 9.14996C17.3236 9.54142 17.6396 9.85458 18.0346 9.85458H21.1153L16.8891 14.1215C16.6127 14.3955 16.6127 14.8653 16.8891 15.1393C17.0471 15.2567 17.2051 15.335 17.4026 15.335C17.6001 15.335 17.7581 15.2567 17.9161 15.1393L22.1423 10.9115V13.9649C22.1423 14.3172 22.4583 14.6304 22.8532 14.6304Z"
        fill={color}
      />
      <path
        d="M15.1111 16.8616C14.8346 16.5876 14.3607 16.5876 14.0842 16.8616L9.85798 21.0894V18.036C9.85798 17.6445 9.542 17.3314 9.14703 17.3314C8.75205 17.3314 8.43608 17.6445 8.43608 18.036V21.3243C8.43608 22.5378 9.42351 23.5164 10.6479 23.5164H13.9657C14.3607 23.5164 14.6766 23.2033 14.6766 22.8118C14.6766 22.4204 14.3607 22.1072 13.9657 22.1072H10.8849L15.1111 17.8403C15.3876 17.5662 15.3876 17.1356 15.1111 16.8616Z"
        fill={color}
      />
      <path
        d="M26.289 17.8398C26.684 17.8398 27 17.5267 27 17.1352V8.75801C27 6.68328 25.3016 5 23.2083 5H8.79174C6.69839 5 5 6.68328 5 8.75801V23.242C5 25.3167 6.69839 27 8.79174 27H23.2083C25.3016 27 27 25.3167 27 23.242V21.9893C27 21.5979 26.684 21.2847 26.289 21.2847C25.8941 21.2847 25.5781 21.5979 25.5781 21.9893V23.242C25.5781 24.5338 24.5117 25.5907 23.2083 25.5907H8.79174C7.48833 25.5907 6.42191 24.5338 6.42191 23.242V8.75801C6.42191 7.46619 7.48833 6.40925 8.79174 6.40925H23.2083C24.5117 6.40925 25.5781 7.46619 25.5781 8.75801V17.1352C25.5781 17.5267 25.8941 17.8398 26.289 17.8398Z"
        fill={color}
      />
    </svg>
  );
};

export default React.memo(SizeIcon);
