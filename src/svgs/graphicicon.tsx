import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={50} height={50} rx={5} fill="#5686BF" fillOpacity={0.1} />
    <path
      d="M17.512 23.133c3.068 0 5.556-2.716 5.556-6.067 0-3.35-2.488-6.066-5.556-6.066s-5.556 2.716-5.556 6.066c0 3.35 2.488 6.067 5.556 6.067Z"
      fill="#5686BF"
      fillOpacity={0.1}
      stroke="#5686BF"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M17.512 11v6.066h5.556" fill="#5686BF" fillOpacity={0.1} />
    <path
      d="M17.512 11v6.066h5.556"
      stroke="#5686BF"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.29 32.232v6.066M31.4 27.683v10.616M25.846 26.166v12.133M36.956 24.65v13.649"
      stroke="#5686BF"
      strokeOpacity={0.3}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
