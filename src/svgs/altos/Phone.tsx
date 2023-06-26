import * as React from "react"
const Phone = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#AA2210"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.882 1h3.765L8.53 5.706 6.176 7.118a10.352 10.352 0 0 0 4.706 4.705l1.412-2.352L17 11.353v3.765A1.882 1.882 0 0 1 15.118 17 15.059 15.059 0 0 1 1 2.882 1.882 1.882 0 0 1 2.882 1Z"
    />
  </svg>
)
export default Phone
