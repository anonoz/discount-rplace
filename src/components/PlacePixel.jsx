import React from 'react'
import setPixels from '../action_creators'

const COLORS = "0123456789abcdef"

export function PlacePixel(props) {
  const className = `place_pixel pixel_${props.color}`

  function nextColor() {
    return COLORS[COLORS.indexOf(props.color) + 1 % COLORS.length]
  }

  return (
    <a href="#"
       className="place_pixel_button"
       onClick={() => {props.setPixel(props.position, nextColor())}}>
      <div className={className}></div>
    </a>
  )
}
