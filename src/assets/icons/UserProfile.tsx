import React from 'react'

type Props = {
  color: string
}

export function UserProfile({ color }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      fill="none"
      viewBox="0 0 56 56"
    >
      <circle cx="28" cy="28" r="28" fill={color} />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
        d="M38.303 39.263c-.607-1.701-1.947-3.204-3.81-4.276-1.862-1.073-4.145-1.654-6.493-1.654-2.348 0-4.63.581-6.493 1.654-1.863 1.072-3.202 2.575-3.81 4.276"
      />
      <ellipse
        cx="28"
        cy="22.667"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
        rx="5.333"
        ry="5.333"
      />
    </svg>
  )
}
