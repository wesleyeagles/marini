import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={9}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.925 5.438a.5.5 0 0 0 .81 0L8.089.793A.5.5 0 0 0 7.683 0H.977a.5.5 0 0 0-.405.793l3.353 4.645Z"
      fill="#343434"
    />
  </svg>
)

export default SvgComponent
