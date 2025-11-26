import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-11/12 mx-auto py-20'>
      {children}
    </div>
  )
}
