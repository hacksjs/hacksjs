// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isNumber } from '../validation'

/**
 * Test for a number primitive or `Number` object instance.
 *
 * Unlike `isNumber()`, this test will fail for the `NaN` value.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = Number.NaN
 * isValidNumber(test) // → false
 */
const isValidNumber = (test) => {

  if (!isNumber(test)) {
    return false
  }

  if (Number.isNaN(test) === true) {
    return false
  }

  return true
}

export { isValidNumber }
