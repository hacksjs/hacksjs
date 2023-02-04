// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a string primitive or `String` instance.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = 'hello'
 * isString(test) // → true
 */
const isString = (test) => {
  // return (Object.prototype.toString.call(test) === '[object String]')
  return ((typeof test === 'string') || (test instanceof String))
}

export { isString }
