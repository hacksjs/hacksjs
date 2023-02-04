// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a `NaN` value.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = Number.NaN
 * isNaN(test) // → true
 */
const isNaN = (test) => {

  // We cannot use JavaScript's older `isNaN()` function because it's
  // behavior is a little quirky:
  //
  // isNaN('hello') // → true
  //
  // ECMAScript 6's `Number.isNaN()` function provides reliable `NaN` detection.
  // This function is easily polyfill-able for older browsers.

  return (Number.isNaN(test))

}

export { isNaN }
