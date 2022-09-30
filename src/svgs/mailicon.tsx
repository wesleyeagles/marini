import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.35 1H2.793C1.803 1 1 1.803 1 2.794v8.968c0 .99.803 1.794 1.794 1.794h12.555c.99 0 1.794-.803 1.794-1.794V2.794c0-.991-.803-1.794-1.794-1.794Z"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m1 2.793 8.071 5.381 8.072-5.38"
      stroke="#fff"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
