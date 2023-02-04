// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isAnyObject } from '.'
import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for a reference to an `arguments` object — a special type of object that
 * is native to JavaScript and exists only inside functions.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * function test () {
 *   return isArguments(arguments)
 * }
 * test() // → true
 */
const isArguments = (test) => {
  return isAnyObject(test) && (objectToString(test) === object_tostring_map.arguments)
}

export { isArguments }
