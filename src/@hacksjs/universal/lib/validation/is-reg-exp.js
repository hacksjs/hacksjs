// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for an instance of JavaScript's `RegExp` object.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = /ab+c/i
 * isRegExp(test) // → true
 */
const isRegExp = (test) => {
  return (objectToString(test) === object_tostring_map.reg_exp)
}

export { isRegExp }
