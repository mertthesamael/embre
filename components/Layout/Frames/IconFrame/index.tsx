import React, { FC } from "react";

type IconFrameProps = {
    icon:JSX.Element
};

const IconFrame: FC<IconFrameProps> = ({icon}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.484 7.22585H7.22597V47.4839H47.484V7.22585ZM6.70984 6.70972V48H48.0002V6.70972H6.70984Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.6144 47.9795L40.6673 41.0323L41.0323 40.6674L47.9794 47.6146L47.6144 47.9795Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.70968 48L0 41.2903L0.335953 40.8484L7.14883 47.5581L6.70968 48Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.6347 7.07464L40.8495 0.440532L41.29 0L47.9997 6.70968L47.6347 7.07464Z"
        fill="black"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
      >
        <path d="M0 0H41.2903V41.2903H0V0Z" fill="black" />
        <g transform="translate(7, 7)">
       {icon}
        </g>
      </svg>
    </svg>
  );
};

export default IconFrame;
