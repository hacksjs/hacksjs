// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a value that is exactly equal to `null`.
 *
 * This is a strict test. This function returns false for nil values such as `0`
 * and `undefined`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = null
 * isNull(test) // → true
 */
const isNull = (test) => {
  return (test === null)
}

export { isNull }
