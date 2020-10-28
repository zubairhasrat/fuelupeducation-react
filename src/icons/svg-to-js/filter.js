import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 24 24',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 9H15V3H17V5H21V7H17V9ZM3 7V5H13V7H3ZM3 19V17H9V19H3ZM13 21V19H21V17H13V15H11V21H13ZM7 11V9H9V15H7V13H3V11H7ZM21 13V11H11V13H21Z"
      // fill="black"
      // fill-opacity="0.54"
    />
  </svg>
);

export default SVG;
