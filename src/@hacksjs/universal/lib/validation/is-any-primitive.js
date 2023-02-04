// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

// This test returns the exact same result as `isAnyObject()`. The test uses the
// same methodology to check for an object instance, with the result of the test
// inverted. See the `isAnyObject()` source for notes on the test methodology.

/**
 * Test for one of JavaScript's five primitive types: a string, number, boolean,
 * `null` or `undefined`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = true
 * isAnyPrimitive(test) // → true
 *
 * @example
 * const test = new Boolean(true)
 * isAnyPrimitive(test) // → false
 */
const isAnyPrimitive = (test) => {
  return (test !== Object(test))
}

export { isAnyPrimitive }
