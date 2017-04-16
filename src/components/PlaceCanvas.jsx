import {Range} from 'immutable'
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'
import {PixelRow} from './PixelRow'
import { PlacePixel } from './PlacePixel'

export class PlaceCanvas extends React.PureComponent {
  splitIntoChunks(list, chunkSize = 1) {
    return Range(0, list.count(), chunkSize)
      .map(chunkStart => list.slice(chunkStart, chunkStart + chunkSize));
  }

  render() {
    var bitmap = this.props.bitmap
    var rows = this.splitIntoChunks(bitmap, 192)

    return (
      <div className="place_canvas">
        {rows.map((pixels, index) => 
          <PixelRow 
            key={index}
            row_id={index}
            pixels={pixels}
            {... this.props} />)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bitmap: state.get('bitmap')
  }
}

export const PlaceCanvasContainer = connect(
  mapStateToProps,
  actionCreators
)(PlaceCanvas)
