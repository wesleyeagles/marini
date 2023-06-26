import * as React from "react"
const PinMap = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#AA2210"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"
    />
    <path
      stroke="#AA2210"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.657 14.657 10.414 18.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
    />
  </svg>
)
export default PinMap
