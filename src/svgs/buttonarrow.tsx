import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 7h16m0 0-4.5-6M16 7l-4.5 5.5" stroke="#fff" strokeWidth={1.5} />
  </svg>
)

export default SvgComponent
