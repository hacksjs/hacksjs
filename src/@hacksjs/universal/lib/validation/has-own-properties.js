// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isAnyObject } from '../validation'

// TODO: Consider instead using `Object.getOwnPropertyNames()` and then checking
// the `length` of the result. Benchmark both options. https://mzl.la/3gCiYKu

/**
 * Test for an object (of any type) with no enumerable properties of its own.
 *
 * Properties inherited via the prototype chain are NOT counted. Properties with
 * a value of `undefined` ARE counted.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = { prop: true }
 * hasOwnProperties(test) // → true
 */
const hasOwnProperties = (test) => {

  if (!isAnyObject(test)) {
    return false
  }

  for (const prop in test) {
    // https://eslint.org/docs/rules/no-prototype-builtins
    // if (test.hasOwnProperty(prop)) {
    if (Object.prototype.hasOwnProperty.call(test, prop)) {
      return true
    }
  }

  return false

}

export { hasOwnProperties }
