import * as React from "react";

const SvgIconEllipsis = ({ title, titleId, ...props }) => (
  <svg
    width="21px"
    height="5px"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      // fill="#BBC0FF"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgIconEllipsis;
