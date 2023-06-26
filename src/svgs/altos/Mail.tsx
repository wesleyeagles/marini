import * as React from "react"
const Mail = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#AA2210"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 2.857A1.857 1.857 0 0 1 2.857 1h13a1.857 1.857 0 0 1 1.857 1.857v9.286A1.857 1.857 0 0 1 15.857 14h-13A1.857 1.857 0 0 1 1 12.143V2.857Z"
    />
    <path
      stroke="#AA2210"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 2.857 9.357 8.43l8.357-5.572"
    />
  </svg>
)
export default Mail
