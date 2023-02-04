// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isArguments } from './is-arguments'
import { objectToString } from '../objects'

/**
 * Test for a plain `Object` instance.
 *
 * A plain object is one created with object literal syntax, or the constructor:
 * `new Object()`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = {}
 * isPlainObject(test) // → true
 *
 * @example
 * const test = new Object
 * isPlainObject(test) // → true
 *
 * @example
 * const test = new Date
 * isPlainObject(test) // → false
 *
 * @example
 * const test = window
 * isPlainObject(test) // → false
 */
const isPlainObject = (test) => {

  // Primitive type.
  if (test !== Object(test)) {
    return false
  }

  // Not inherited from Object.
  if (Object.getPrototypeOf(test) !== Object.prototype) {
    return false
  }

  // JavaScript's built-in `arguments` variable is reported as a plain object.
  if (isArguments(test)) {
    return false
  }

  // TODO: Add tests for these objects.
  // In web browsers, test for reference to the global `window` object,
  // which (annoyingly) passes the above tests.
  const name = objectToString(test)
  if (name === '[object global]') { // Chrome
    return false
  }
  if (name === '[object Window]') { // Firefox/Opera/IE9
    return false
  }
  if (name === '[object DOMWindow]') { // Safari
    return false
  }

  return true

}

export { isPlainObject }
