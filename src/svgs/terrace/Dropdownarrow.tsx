import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 6 .757 1.757 2.172.343 5 3.172 7.828.343l1.415 1.414L5 6Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
