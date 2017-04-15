import React from 'react'

export function PlacePixel(props) {
  const className = `place_pixel pixel_${props.color}`

  function handleClick(e) {
    console.log(`Position ${props.position} clicked`)
    e.preventDefault(0)
  }

  return <a href="#" onClick={handleClick}>
    <div className={className}></div>
  </a>
}
