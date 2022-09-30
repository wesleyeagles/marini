import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.171 12.132a4.28 4.28 0 0 1 2.99 1.21 4.085 4.085 0 0 1 1.239 2.922v4.82h-2.82v-4.82c0-.365-.148-.716-.412-.974a1.426 1.426 0 0 0-.997-.403c-.374 0-.732.145-.997.403a1.362 1.362 0 0 0-.412.974v4.82h-2.82v-4.82c0-1.096.446-2.147 1.24-2.922a4.28 4.28 0 0 1 2.99-1.21ZM10.123 12.82H7.304v8.264h2.82V12.82ZM8.714 10.755c.778 0 1.41-.617 1.41-1.378 0-.76-.632-1.377-1.41-1.377-.779 0-1.41.617-1.41 1.377 0 .761.631 1.378 1.41 1.378Z"
      fill="#fff"
    />
    <rect
      x={0.5}
      y={0.5}
      width={27}
      height={28.217}
      rx={2.5}
      stroke="#fff"
      strokeOpacity={0.3}
    />
  </svg>
)

export default SvgComponent
