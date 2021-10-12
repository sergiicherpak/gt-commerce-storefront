import React from "react";

const LimitedTimeOfferIcon = ({
  width = 32,
  height = 32,
  color = "#2A2D34",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 250 250`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M125,20.25A104.75,104.75,0,1,0,229.75,125,104.87,104.87,0,0,0,125,20.25Zm0,202.36A97.61,97.61,0,1,1,222.61,125,97.72,97.72,0,0,1,125,222.61Z"
        fill={color}
      />
      <path
        d="M209.71,124.83a84.49,84.49,0,0,0-24.43-59.28,4.94,4.94,0,0,0-.36-.44,5.19,5.19,0,0,0-.45-.37,84.54,84.54,0,0,0-119,.05,3.68,3.68,0,0,0-.38.31c-.11.12-.21.25-.3.37A84.46,84.46,0,0,0,40.3,124.91s0,0,0,.08,0,.05,0,.07a84.45,84.45,0,0,0,24.46,59.42,2.87,2.87,0,0,0,.75.75,84.44,84.44,0,0,0,59.41,24.47h.13a84.39,84.39,0,0,0,59.42-24.46,2.72,2.72,0,0,0,.42-.34,3.54,3.54,0,0,0,.35-.42,84.42,84.42,0,0,0,24.46-59.29,1.1,1.1,0,0,0,0-.18C209.72,125,209.71,124.89,209.71,124.83Zm-27.42,52.41-7.95-8a3.57,3.57,0,1,0-5.06,5l8,8a77.29,77.29,0,0,1-48.68,20.18V191.19a3.56,3.56,0,0,0-3.56-3.57h0a3.57,3.57,0,0,0-3.57,3.57v11.28a77.25,77.25,0,0,1-48.66-20.19l8-7.95a3.57,3.57,0,0,0-5-5.05l-8,7.95a77.24,77.24,0,0,1-20.18-48.67H58.81a3.57,3.57,0,1,0,0-7.14H47.53A77.23,77.23,0,0,1,67.72,72.76l8,7.95a3.57,3.57,0,0,0,5-5l-8-8a77.23,77.23,0,0,1,48.66-20.19V58.8a3.57,3.57,0,1,0,7.14,0V47.52a77.26,77.26,0,0,1,48.68,20.2l-8,7.94a3.57,3.57,0,1,0,5,5l8-7.94a77.23,77.23,0,0,1,20.19,48.66H191.21a3.57,3.57,0,1,0,0,7.14h11.27A77.25,77.25,0,0,1,182.29,177.24Z"
        fill={color}
      />
      <path
        d="M128.56,123.51V76.14a3.57,3.57,0,1,0-7.14,0V125a3.54,3.54,0,0,0,.54,1.85.83.83,0,0,0,.07.13,2.79,2.79,0,0,0,.35.42.58.58,0,0,0,.1.12v0l23.76,23.76a3.59,3.59,0,0,0,5.05,0,3.58,3.58,0,0,0,0-5.05Z"
        fill={color}
      />
    </svg>
  );
};

export default React.memo(LimitedTimeOfferIcon);
