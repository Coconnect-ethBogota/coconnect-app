import * as React from "react"

const ChatIcon = (props) => (
  <svg
    width={27}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M1.542 16.13a6.992 6.992 0 0 0 7.072 6.912h3.427c.932.001 1.823.382 2.467 1.056l1.826 1.91a1.537 1.537 0 0 0 2.188 0l2.836-2.966.931-1.039c.172-.186.359-.357.559-.512a6.833 6.833 0 0 0 2.61-5.36V7.741A6.992 6.992 0 0 0 18.386.834H8.614a6.992 6.992 0 0 0-7.073 6.908v8.388Z"
      stroke="url(#a)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M4.958 11.938a1.708 1.708 0 1 1 3.417 0 1.708 1.708 0 0 1-3.417 0Z"
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M11.791 11.938a1.708 1.708 0 1 1 3.417 0 1.708 1.708 0 0 1-3.417 0Z"
      stroke="url(#c)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M18.625 11.938a1.708 1.708 0 1 1 3.417 0 1.708 1.708 0 0 1-3.417 0Z"
      stroke="url(#d)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="a"
        x1={13.5}
        y1={0.833}
        x2={13.5}
        y2={26.465}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA5985" />
        <stop offset={1} stopColor="#FDC731" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={6.666}
        y1={10.23}
        x2={6.666}
        y2={13.646}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA5985" />
        <stop offset={1} stopColor="#FDC731" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={13.5}
        y1={10.23}
        x2={13.5}
        y2={13.646}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA5985" />
        <stop offset={1} stopColor="#FDC731" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={20.333}
        y1={10.23}
        x2={20.333}
        y2={13.646}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FA5985" />
        <stop offset={1} stopColor="#FDC731" />
      </linearGradient>
    </defs>
  </svg>
)

export default ChatIcon
