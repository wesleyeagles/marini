import * as React from "react"
const Lazer = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={43}
    fill="none"
    {...props}
  >
    <path
      stroke="#BA3718"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m36.842 11.398-35.729-.266a15.313 15.313 0 0 0 15.199 15.426l5.104.038a15.313 15.313 0 0 0 15.422-14.624l.004-.574ZM31.512 41.984a5.105 5.105 0 1 1 .076-10.209 5.105 5.105 0 0 1-.076 10.21ZM26.52 26.634l2.515 5.123M11.207 26.52l-7.77 15.255M26.445 36.842 6.028 36.69"
    />
    <path
      stroke="#BA3718"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.4}
      strokeWidth={2}
      d="m26.69 3.665.019-2.552M19.035 3.609l.019-2.552M11.378 3.552 11.396 1"
    />
  </svg>
)
export default Lazer
