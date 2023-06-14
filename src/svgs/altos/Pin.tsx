import * as React from "react"
const Pin = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
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
      strokeOpacity={0.5}
      strokeWidth={2}
      d="M11.25 18.51c0 1.926.81 3.773 2.252 5.134 1.441 1.362 3.397 2.127 5.435 2.127 2.04 0 3.995-.765 5.436-2.127 1.442-1.361 2.252-3.208 2.252-5.134 0-1.925-.81-3.772-2.252-5.134-1.441-1.361-3.397-2.126-5.436-2.126-2.038 0-3.994.765-5.435 2.127-1.442 1.361-2.252 3.208-2.252 5.133Z"
    />
    <path
      stroke="#BA3718"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m31.622 31.291-9.514 9.411A4.51 4.51 0 0 1 18.938 42a4.51 4.51 0 0 1-3.169-1.298l-9.516-9.41a17.686 17.686 0 0 1-4.908-9.086 17.567 17.567 0 0 1 1.02-10.252A17.787 17.787 0 0 1 8.973 3.99 18.077 18.077 0 0 1 18.938 1c3.547 0 7.015 1.04 9.965 2.99a17.787 17.787 0 0 1 6.607 7.964 17.567 17.567 0 0 1 1.02 10.252 17.685 17.685 0 0 1-4.909 9.085Z"
    />
  </svg>
)
export default Pin
