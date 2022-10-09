import * as React from "react"

const CloseIcon = (props) => (
  <svg
    width={61}
    height={61}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={61} height={61} rx={20} fill="url(#a)" />
    <path
      d="M33.585 31.277a.39.39 0 0 1 0-.554l7.729-7.725a2.342 2.342 0 0 0-3.312-3.312l-7.725 7.725a.39.39 0 0 1-.554 0l-7.725-7.725a2.342 2.342 0 0 0-3.312 3.312l7.725 7.725a.39.39 0 0 1 0 .554l-7.725 7.725a2.342 2.342 0 0 0 3.312 3.312l7.725-7.725a.39.39 0 0 1 .554 0l7.725 7.725a2.342 2.342 0 0 0 3.312-3.312l-7.729-7.725Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={10}
        y1={6}
        x2={57}
        y2={58}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA5985" />
        <stop offset={1} stopColor="#FDC731" />
      </linearGradient>
    </defs>
  </svg>
)

export default CloseIcon
