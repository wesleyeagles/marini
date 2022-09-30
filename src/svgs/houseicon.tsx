import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={55}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#fff" d="M0 0h55v55H0z" />
    <path
      d="M18.556 27.557H16L27.5 15 39 27.557h-2.556M18.555 27.557v9.767c0 .74.27 1.45.749 1.973.48.524 1.13.818 1.807.818H33.89c.678 0 1.328-.294 1.807-.818.48-.523.748-1.233.748-1.973v-9.767"
      stroke="#5686BF"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.667 40.115v-8.372c0-.74.269-1.45.748-1.973a2.452 2.452 0 0 1 1.807-.817h2.556c.678 0 1.328.294 1.807.817.479.523.748 1.233.748 1.973v8.372"
      stroke="#5686BF"
      strokeOpacity={0.3}
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
