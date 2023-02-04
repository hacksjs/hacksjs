// @ts-check

/**
 * This function is ported from the Ramda library.
 *
 * @see       {@link https://github.com/ramda/ramda/blob/v0.28.0/source/internal/_isTypedArray.js}
 * @copyright 2013-2020 Scott Sauyet and Michael Hurley
 * @license   MIT
 */

import { objectToString, object_tostring_map } from '../objects'

/**
 * Checks for a string value.
 *
 * @param {*} test The value to test
 * @returns {boolean} `true` if `test` is a typed array, `false` otherwise.
 *
 * @example
 * isTypedArray(new Uint8Array([])) // → true
 * isTypedArray(new Float32Array([])) // → true
 * isTypedArray([]) // → false
 * isTypedArray(null) // → false
 * isTypedArray({}) // → false
 */
const isTypedArray = (test) => {
  const type = objectToString(test)

  // TODO: Use object_tostring_map
  return type === '[object Uint8ClampedArray]' ||
    type === '[object Int8Array]' ||
    type === '[object Uint8Array]' ||
    type === '[object Int16Array]' ||
    type === '[object Uint16Array]' ||
    type === '[object Int32Array]' ||
    type === '[object Uint32Array]' ||
    type === '[object Float32Array]' ||
    type === '[object Float64Array]' ||
    type === '[object BigInt64Array]' ||
    type === '[object BigUint64Array]'
}

export { isTypedArray }
