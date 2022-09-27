import React from 'react'
import { color } from '../../theme/index'

export function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={color.deepGrey}
        stroke={color.deepGrey}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.2"
        d="M5.758 2.242a.6.6 0 00-.849.849L9.819 8l-4.91 4.91a.6.6 0 10.849.848l5.333-5.334a.6.6 0 000-.848L5.758 2.242z"
      />
    </svg>
  )
}
