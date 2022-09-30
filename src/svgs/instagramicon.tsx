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
    <rect
      x={0.5}
      y={0.5}
      width={27}
      height={28.555}
      rx={2.5}
      stroke="#fff"
      strokeOpacity={0.3}
    />
    <path
      d="M17.46 8h-7.356c-2.032 0-3.679 1.605-3.679 3.585v7.17c0 1.98 1.647 3.585 3.679 3.585h7.357c2.031 0 3.678-1.605 3.678-3.585v-7.17C21.14 9.605 19.492 8 17.461 8Z"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.725 14.719a2.805 2.805 0 0 1-.299 1.742c-.285.535-.736.97-1.289 1.24a3.01 3.01 0 0 1-1.79.27 2.97 2.97 0 0 1-1.614-.803 2.844 2.844 0 0 1-.824-1.573 2.804 2.804 0 0 1 .276-1.745 2.905 2.905 0 0 1 1.274-1.256 3.01 3.01 0 0 1 1.787-.291c.624.09 1.202.373 1.649.808.446.436.737 1 .83 1.608ZM17.829 11.227h.007"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
