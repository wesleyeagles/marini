import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.882 1h3.765L8.53 5.706 6.176 7.118a10.352 10.352 0 0 0 4.706 4.705l1.412-2.352L17 11.353v3.765A1.882 1.882 0 0 1 15.118 17 15.059 15.059 0 0 1 1 2.882 1.882 1.882 0 0 1 2.882 1"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
