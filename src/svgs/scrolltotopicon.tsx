import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={53}
    height={53}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#EAEAEA" d="M0 0h53v53H0z" />
    <path
      d="m25.292 21.46-6.482 6.48-1.708-1.708 9.398-9.398 9.398 9.398-1.708 1.709-6.482-6.482v14.708h-2.416V21.459Z"
      fill="#2D3748"
    />
  </svg>
)

export default SvgComponent
