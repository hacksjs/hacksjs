// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isString } from '../validation'

/**
 * Test for a string of zero length or containing only white space characters.
 *
 * To test for a zero length string, use `isZeroLengthString()`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = '   '
 * isBlankText(test) // → true
 */
const isBlankText = (test) => {
  if (!isString(test)) return false

  const testNFC = test.normalize('NFC')

  const trimmed = testNFC.trim()
  return trimmed.length === 0

  // const pattern = /([^\s])/
  // return !pattern.test(testNFC)

  // const pattern = /^\s*$/
  // return pattern.test(testNFC)
}

// Aliases
const isBlankString = isBlankText

export { isBlankText, isBlankString }
