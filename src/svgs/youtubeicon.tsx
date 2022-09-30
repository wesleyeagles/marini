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
    <path
      d="M18.444 9H9.556C7.592 9 6 10.555 6 12.474v5.212c0 1.918 1.592 3.474 3.556 3.474h8.888c1.964 0 3.556-1.556 3.556-3.474v-5.212C22 10.555 20.408 9 18.444 9Z"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12.222 12.475 4.445 2.605-4.445 2.606v-5.211Z"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={0.5}
      y={0.5}
      width={27}
      height={28}
      rx={2.5}
      stroke="#fff"
      strokeOpacity={0.3}
    />
  </svg>
)

export default SvgComponent
