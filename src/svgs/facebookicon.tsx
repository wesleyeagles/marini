import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.5}
      y={0.5}
      width={27}
      height={28}
      rx={2.5}
      stroke="#fff"
      strokeOpacity={0.3}
    />
    <path
      d="M18 7h-2.182c-.964 0-1.89.412-2.571 1.145a4.062 4.062 0 0 0-1.065 2.764v2.345H10v3.126h2.182v6.254h2.909V16.38h2.182L18 13.254h-2.91v-2.345c0-.208.078-.407.214-.553a.703.703 0 0 1 .514-.23H18V7Z"
      fill="#D9D9D9"
    />
  </svg>
)

export default SvgComponent
