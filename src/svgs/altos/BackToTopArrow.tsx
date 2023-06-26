import * as React from "react"
const BackToTopArrow = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#BA3718"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 1v10M5 1l4 4M5 1 1 5"
    />
  </svg>
)
export default BackToTopArrow
