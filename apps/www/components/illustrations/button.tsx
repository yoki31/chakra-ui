import { createComponent } from "./create-component"

export const ButtonAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x={101} y={118} width={198} height={64} rx={12} fill={palette[3]} />
      <rect x={143} y={142} width={114} height={16} rx={8} fill={palette[2]} />
      <path
        d="M288.996 174.937C288.073 174.654 287.241 174.842 286.594 175.078C286.039 174.417 285.115 173.804 283.914 173.804C282.99 173.804 282.204 174.087 281.604 174.37C280.911 173.473 279.802 172.623 278.139 172.623C277.215 172.623 276.475 172.906 275.829 173.237V166.721C275.829 164.833 274.581 162 271.209 162C267.836 162 266.589 164.833 266.589 166.721V179.941L266.311 179.658C266.126 179.422 264.278 177.25 261.922 177.345C259.704 177.392 258.318 178.336 257.44 180.414C256.377 182.964 257.533 184.002 257.856 184.238C258.734 184.852 259.611 185.655 259.704 185.986C259.842 186.41 260.627 188.724 262.153 190.99C262.753 191.888 263.539 192.548 264.093 193.068C264.278 193.256 264.463 193.398 264.602 193.54C264.74 193.681 264.971 193.918 265.202 194.154C265.711 194.626 266.311 195.24 266.866 195.854C267.328 196.42 268.39 198.733 268.991 200.245C269.176 200.669 269.592 201 270.054 201H286.225C286.64 201 286.964 200.811 287.195 200.433C287.379 200.103 292 192.69 292 188.016V179.517C291.999 177.061 290.937 175.55 288.996 174.937L288.996 174.937ZM289.689 187.968C289.689 191.037 286.963 196.23 285.577 198.592H270.792C270.284 197.364 269.268 195.098 268.574 194.295C267.974 193.587 267.327 192.973 266.773 192.407C266.542 192.171 266.357 192.029 266.218 191.84C266.034 191.651 265.848 191.462 265.571 191.273C265.063 190.849 264.462 190.282 264.047 189.668C262.984 188.11 262.198 186.315 261.875 185.229C261.505 184.096 259.934 182.869 259.287 182.349C259.287 182.208 259.334 181.877 259.565 181.311C260.073 180.083 260.674 179.706 262.014 179.658H262.06C263.123 179.658 264.232 180.697 264.601 181.169L266.911 183.765C267.234 184.143 267.743 184.237 268.204 184.096C268.666 183.907 268.944 183.482 268.944 183.01L268.944 166.722C268.944 166.344 269.037 164.361 271.254 164.361C273.38 164.361 273.564 166.155 273.564 166.722V179.706C273.564 180.367 274.072 180.886 274.72 180.886C275.367 180.886 275.875 180.367 275.875 179.706V176.307C276.198 175.882 277.03 174.985 278.185 174.985C279.294 174.985 279.848 175.835 280.033 176.165V179.706C280.033 180.368 280.541 180.887 281.188 180.887C281.835 180.887 282.344 180.368 282.344 179.706V176.732C282.667 176.496 283.267 176.165 283.961 176.165C284.608 176.165 284.977 176.637 285.116 176.921V179.706C285.116 180.368 285.624 180.887 286.271 180.887C286.918 180.887 287.427 180.368 287.427 179.706V177.298C287.704 177.157 288.027 177.062 288.35 177.157C288.998 177.393 289.737 177.724 289.737 179.47V187.969L289.689 187.968Z"
        fill="black"
      />
      <path
        d="M271.012 162.003C271.007 162.004 271.002 162.004 270.997 162.004L271.005 162L271.012 162.003Z"
        fill={palette[0]}
      />
      <path
        d="M285.582 198.592C286.968 196.23 289.694 191.037 289.694 187.968L289.742 187.969V179.47C289.742 177.724 289.003 177.393 288.355 177.157C288.032 177.062 287.709 177.157 287.432 177.298V179.706C287.432 180.368 286.923 180.887 286.276 180.887C285.629 180.887 285.121 180.368 285.121 179.706V176.921C284.982 176.637 284.613 176.165 283.966 176.165C283.272 176.165 282.672 176.496 282.349 176.732V179.706C282.349 180.368 281.84 180.887 281.193 180.887C280.546 180.887 280.038 180.368 280.038 179.706V176.165C279.853 175.835 279.299 174.985 278.19 174.985C277.035 174.985 276.203 175.882 275.88 176.307V179.706C275.88 180.367 275.372 180.886 274.725 180.886C274.077 180.886 273.569 180.367 273.569 179.706V166.722C273.569 166.155 273.385 164.361 271.259 164.361C269.042 164.361 268.949 166.344 268.949 166.722L268.949 183.01C268.949 183.482 268.671 183.907 268.209 184.096C267.748 184.237 267.239 184.143 266.916 183.765L264.606 181.169C264.237 180.697 263.128 179.658 262.065 179.658H262.019C260.679 179.706 260.078 180.083 259.57 181.311C259.339 181.877 259.292 182.208 259.292 182.349C259.316 182.368 259.341 182.388 259.367 182.409C260.052 182.958 261.523 184.138 261.88 185.229C262.203 186.315 262.989 188.11 264.052 189.668C264.467 190.282 265.068 190.849 265.576 191.273C265.853 191.462 266.039 191.651 266.223 191.84C266.312 191.961 266.42 192.063 266.547 192.182C266.618 192.249 266.695 192.322 266.778 192.407C266.913 192.544 267.053 192.685 267.197 192.83C267.644 193.278 268.125 193.76 268.579 194.295C269.273 195.098 270.289 197.364 270.797 198.592H285.582Z"
        fill={palette[0]}
      />
    </svg>
  )
})
