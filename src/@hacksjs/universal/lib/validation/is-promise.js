// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isAnyObject } from '.'
import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for an instance of a `Promise`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = new Promise()
 * isPromise(test) // → true
 */
const isPromise = (test) => {
  return isAnyObject(test) && (objectToString(test) === object_tostring_map.promise)
}

export { isPromise }
