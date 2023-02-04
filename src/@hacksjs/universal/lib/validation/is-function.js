// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for a reference to a function — which may be either synchronous
 * or asynchronous.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = () => {}
 * isFunction(test) // → true
 */
const isFunction = (test) => {
  const type = objectToString(test)
  return (type === object_tostring_map.function || type === object_tostring_map.async_function)
}

export { isFunction }
