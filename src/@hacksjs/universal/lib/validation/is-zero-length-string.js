// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isString } from '../validation'

/**
 * Test for a string of zero length.
 *
 * This is a stricter test than `isBlankText()`, which will evaluate `true` for
 * strings containing only whitespace characters.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = ''
 * isZeroLengthString(test) // → true
 */
const isZeroLengthString = (test) => {
  return (isString(test) && test.length === 0)
}

export { isZeroLengthString }
