import * as React from "react"
const Facebook = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#BA3718"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 9.273V14h3.545v8.273h4.728V14h3.545L14 9.273H9.273V6.909a1.182 1.182 0 0 1 1.181-1.182H14V1h-3.546a5.91 5.91 0 0 0-5.909 5.91v2.363H1Z"
    />
  </svg>
)
export default Facebook
