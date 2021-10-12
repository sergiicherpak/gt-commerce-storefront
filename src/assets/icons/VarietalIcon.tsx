import React from "react";

const VarietalIcon = ({ width = 32, height = 32, color = "#2A2D34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.83 5.314a.726.726 0 00-.875-.544.727.727 0 00-.544.876l.833 3.587v.002c.077.34.38.565.708.565.058 0 .113-.01.147-.015l.014-.002.008-.002a.727.727 0 00.544-.876l-.834-3.59v-.001z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.46 7.248c1.226 0 2.317.592 3.001 1.506a3.745 3.745 0 016.75 2.242c0 .2-.016.396-.047.587.365-.193.802-.402 1.293-.597 1.948-.769 3.837-.93 5.462-.426h.001a.727.727 0 01.478.914.727.727 0 01-.912.478c-.88-.274-2.384-.436-4.475.383-.391.154-.745.321-1.05.478a3.755 3.755 0 012.34 3.474 3.754 3.754 0 01-3.308 3.723c.21.468.327.986.327 1.53a3.73 3.73 0 01-.792 2.304h3.04a.733.733 0 010 1.464H4.585a.732.732 0 01-.168-.02A3.753 3.753 0 01.75 21.541a3.754 3.754 0 013.307-3.723 3.727 3.727 0 01-.328-1.53 3.754 3.754 0 013.326-3.726 3.726 3.726 0 01-.343-1.566 3.753 3.753 0 013.748-3.748zm3.748 3.748c0 .108-.005.214-.013.32a2.29 2.29 0 100-.64c.008.106.013.213.013.32zm-2.983 5.291c0 .11-.005.22-.014.328a2.29 2.29 0 100-.656c.01.108.014.218.014.328zm1.49-5.29c0-.108.004-.214.013-.32a2.29 2.29 0 100 .638 3.798 3.798 0 01-.013-.319zm-5.238 3c1.153 0 2.107.857 2.267 1.963a3.78 3.78 0 000 .655 2.29 2.29 0 11-2.267-2.618zm.769 7.544c0 .112-.005.222-.015.332a2.29 2.29 0 100-.656c.01.107.015.215.015.324zm-1.496 0c0-.11.005-.217.014-.324a2.29 2.29 0 100 .656c-.009-.11-.014-.22-.014-.332zm10.514-5.254a2.29 2.29 0 114.58 0 2.29 2.29 0 01-4.58 0zm-2.981 5.26a2.29 2.29 0 114.58 0 2.29 2.29 0 01-4.58 0z"
        fill={color}
      />
      <path
        d="M23.541 12.677a.73.73 0 01.826.612c.016.099.197 1.195.9 2.22.669.971 1.81 1.883 3.774 1.801a4.282 4.282 0 00-1.91-2.771.73.73 0 01.782-1.232c2.662 1.693 2.668 4.534 2.668 4.661v.004l-.01.62-.614.094c-.41.057-.799.089-1.183.089-1.297 0-2.438-.354-3.394-1.063-2.002-1.491-2.422-3.987-2.456-4.19l-.002-.01-.001-.008a.73.73 0 01.62-.827zM25.272 23.473a.948.948 0 100 1.896.948.948 0 000-1.896z"
        fill={color}
      />
    </svg>
  );
};

export default React.memo(VarietalIcon);
