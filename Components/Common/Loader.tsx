import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <>
    <div className="d-flex align-items-center justify-content-center">
      <RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  </>
  )
}
