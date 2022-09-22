import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 17.977 1.558-3.588a8.496 8.496 0 1 1 3.21 2.738L1 17.977"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.664 7.592a.472.472 0 1 0 .944 0v-.944a.472.472 0 1 0-.944 0v.944Zm0 0a4.72 4.72 0 0 0 4.72 4.72h.944a.472.472 0 1 0 0-.943h-.944a.472.472 0 1 0 0 .944"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
