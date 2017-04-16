import {List, Map} from 'immutable'

/**
 * Clean slate function that initiates whole new bitmap
 * from a string of hexidecimal characters [0-9a-f]+
 *
 */
function setBitmap(state, bitmap) {
  return state.merge({bitmap})
}

/**
 * Color must be hex [0-9a-f]
 */
function setPixel(state, position, color) {
  return state.setIn(['bitmap', position], color)
}

export default function(state = Map(), action) {
  switch(action.type) {
  case 'SET_BITMAP':
    return setBitmap(state, action.bitmap)
  case 'SET_PIXEL':
    return setPixel(state, action.position, action.color)
  case 'SET_PIXELS':
    return setPixels(state, action.pixel_updates)
  }
  return state
}
