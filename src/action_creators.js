import {List, Map} from 'immutable'

/**
 * Accepts a string of hexadecimal chars [0-9a-f]
 */
export function setBitmap(newBitmap) {
  return {
    type: "SET_BITMAP",
    bitmap: List(newBitmap.split(''))
  }
}

/**
 * Accepts [
 *   {
 *     position: int,
 *     color: char [0-9a-f]
 *   }, ..
 * ]
 */
export function setPixels(pixel_updates = []) {
  return {
    type: "SET_PIXELS"
  }
}

/**
 * 
 */
export function setPixel(position, color) {
  return {
    type: "SET_PIXEL",
    position,
    color
  }
}
