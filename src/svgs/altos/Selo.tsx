import * as React from "react"
const Selo = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <path
      stroke="#BA381F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.363 37.684A24.667 24.667 0 0 1 2.001 7.167 24.667 24.667 0 0 0 19.473 1a24.667 24.667 0 0 0 17.473 6.167 24.667 24.667 0 0 1-.185 14.512"
    />
    <path
      stroke="#BA381F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.4}
      strokeWidth={2}
      d="M25.64 33.89 29.753 38l8.222-8.222"
    />
  </svg>
)
export default Selo
