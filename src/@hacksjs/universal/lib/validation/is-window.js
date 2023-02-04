// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { objectToString } from '../objects'

/**
 * Test for a reference to the global `window` object.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * isWindow(window) // → true
 */
const isWindow = (test) => {
  const name = objectToString(test)

  if (name === '[object global]') return true    // Chrome
  if (name === '[object Window]') return true    // Firefox/Opera/IE9
  if (name === '[object DOMWindow]') return true // Safari

  return false
}

export { isWindow }
