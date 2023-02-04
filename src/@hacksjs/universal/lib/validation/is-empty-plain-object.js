// @ts-check

import { hasOwnProperties, isPlainObject } from '.'

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a plain `Object` instance with no properties of its own.
 *
 * This is equivalent to combining `isPlainObject()` and `hasOwnProperties()`
 * into an AND condition.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = {}
 * isEmptyPlainObject(test) // → true
 * 
 * const test2 = { prop: 1 }
 * isEmptyPlainObject(test2) // → false
 */
const isEmptyPlainObject = (test) => {
  return isPlainObject(test) && !hasOwnProperties(test)
}

export { isEmptyPlainObject }
