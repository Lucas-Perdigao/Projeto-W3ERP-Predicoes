import React from 'react'
import { color } from '../../theme'

export function ChartLine() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={color.white}
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 01.75.75v17.25H21a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75V3A.75.75 0 013 2.25z"
        clipRule="evenodd"
      />
      <path
        fill={color.white}
        fillRule="evenodd"
        d="M21.322 2.323a.75.75 0 01.355 1l-5 10.5a.75.75 0 01-1.179.234l-4.268-3.84-3.56 7.118a.75.75 0 11-1.34-.67l4-8a.75.75 0 011.172-.223l4.253 3.828 4.568-9.593a.75.75 0 011-.354z"
        clipRule="evenodd"
      />
    </svg>
  )
}
