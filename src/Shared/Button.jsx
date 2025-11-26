import React from 'react'

export default function Button({children}) {
  return <button className="btn rounded-4xl bg-red-500 text-white">
    {children}
  </button>
}
