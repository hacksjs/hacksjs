// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for an `Array` instance.
 *
 * This test is strict. Array-like objects such as `NodeList` will fail the test
 * and evaluate `false`. To test for any type of iterable, use `isArrayLike()`
 * or `isIterable()`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = []
 * isArray(test) // → true
 */
const isArray = (test) => {
  return (Array.isArray(test) || test instanceof Array)
}

export { isArray }
