import React from 'react'
import { PlacePixel } from './PlacePixel'

export class PlaceCanvas extends React.Component {
  render() {
    var bitmap = this.props.bitmap

    return <div className="place_canvas">
      {bitmap.split('').map((color, index) => 
        <PlacePixel key={index} position={index} color={color} />)}
    </div>
  }
}
