import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import { PlacePixel } from './PlacePixel'

export class PixelRow extends React.PureComponent {
  render() {
    return (
      <div>
      {this.props.pixels.map((color, index) => 
        <PlacePixel 
          key={index}
          position={this.props.row_id * 192 + index}
          color={color}
          {... this.props} />)}
      </div>
    )
  }
}
