import React from 'react'

export default ({ progress }) => {
  const progressWidth =  progress
  return (
    <div className="bg-red-400 h-8 w-full my-8 relative overflow-hidden rounded">
      <div style={{  width: progressWidth }} className="bg-green-400 h-full absolute"></div>
      <span className="absolute inset-auto">{progress}</span>
    </div>
  )
}
