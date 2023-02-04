// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for a reference to a synchronous function.
 *
 * Note, functions that return a promise, but are not prefixed with the `async`
 * keyword, will be reported as being synchronous functions. That's because we
 * are checking the function's static type, not its return value at runtime.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = () => {}
 * isSyncFunction(test) // → true
 */
const isSyncFunction = (test) => {
  return (objectToString(test) === object_tostring_map.function)
}

export { isSyncFunction }
