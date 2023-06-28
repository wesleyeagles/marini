import * as React from "react"
const Hospital = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#1D1D1B"
      d="M10.485.002A10.718 10.718 0 0 0 3.14 3.136a10.67 10.67 0 0 0 0 15.12 10.694 10.694 0 0 0 7.32 3.133h.168a10.719 10.719 0 0 0 7.608-3.086 10.598 10.598 0 0 0 3.158-7.584A10.717 10.717 0 0 0 10.484.002Zm5.191 18.23a9.785 9.785 0 0 1-2.2 1.052c-.557.163-1.125.283-1.7.359-.501.035-1.005.035-1.507 0h-.957a9.234 9.234 0 0 1-4.784-2.393 10.189 10.189 0 0 1-1.34-1.579 9.067 9.067 0 0 1-1.316-3.086 13.25 13.25 0 0 1-.167-1.363 10.575 10.575 0 0 1 0-1.507 8.54 8.54 0 0 1 .79-2.871 9.187 9.187 0 0 1 4.497-4.402 8.756 8.756 0 0 1 2.249-.67c.382-.02.766-.02 1.148 0h.311a8.923 8.923 0 0 1 5.24 1.675 9.569 9.569 0 0 1 1.96 1.961 8.637 8.637 0 0 1 1.389 2.775c.157.524.269 1.06.334 1.603a6.29 6.29 0 0 1 0 .67v.311a8.948 8.948 0 0 1-1.1 4.33 9.068 9.068 0 0 1-1.531 2.034c-.408.402-.848.77-1.316 1.1Z"
    />
    <path
      fill="#1D1D1B"
      d="M17.04 8.041v-.143h-3.47V4.285H8.116a.526.526 0 0 0 0 .311v3.182H4.527v5.598h3.589v2.751a5.411 5.411 0 0 0 0 .622v.24h5.359c.062.021.13.021.191 0v-3.47H17.16V8.09l-.12-.048ZM11.8 11.87v3.565H9.551v-3.565H5.963V9.62H9.55V6.055H11.8v3.613h3.612v2.249h-3.157l-.455-.048Z"
    />
  </svg>
)
export default Hospital