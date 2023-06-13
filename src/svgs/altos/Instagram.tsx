import * as React from "react"
const Instagram = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#BA3718"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 6a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V6Z"
    />
    <path
      stroke="#BA3718"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.25 11a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0ZM16.625 5.375v.013"
    />
  </svg>
)
export default Instagram
