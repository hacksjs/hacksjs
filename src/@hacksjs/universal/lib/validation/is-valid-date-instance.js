// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for an instance of JavaScript's native `Date` object and that represents
 * a valid date and time.
 *
 * This is a more comprehensive test than `isDateInstance()`, which checks only
 * for a `Date` instance.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = new Date()
 * isValidDateInstance(test) // → true
 * isDateInstance(test) // → true
 *
 * @example
 * const test = new Date('foo')
 * isValidDateInstance(test) // → false
 * isDateInstance(test) // → true
 */
// TODO: Create separate tests for ISO dates (ie string-encoded dates)
const isValidDateInstance = (test) => {
  if (objectToString(test) === object_tostring_map.date) {
    if (!Number.isNaN(test.getTime())) {
      return true
    }
  }
  return false
}

export { isValidDateInstance }
