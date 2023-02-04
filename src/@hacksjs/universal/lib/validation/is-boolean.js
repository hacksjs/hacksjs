// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for a `Boolean` instance or a primitive value of `true` or `false`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = false
 * isBoolean(test) // → true
 */
const isBoolean = (test) => {

  if (test === true || test === false) {
    return true
  }

  if (objectToString(test) === object_tostring_map.boolean) {
    return true
  }

  return false

}

export { isBoolean }
