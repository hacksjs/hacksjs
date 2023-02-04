// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for an instance of JavaScript's native `Date` object.
 *
 * Note, this test will pass if the value represented by the `Date` instance is
 * an invalid date/time. A better test would be `isValidDateInstance()`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = new Date()
 * isDateInstance(test) // → true
 * isValidDateInstance(test) // → true
 *
 * @example
 * const test = new Date('foo')
 * isDateInstance(test) // → true
 * isValidDateInstance(test) // → false
 */
const isDateInstance = (test) => {
  return (objectToString(test) === object_tostring_map.date)
}

// Aliases
const isDateObject = isDateInstance

export { isDateInstance, isDateObject }
