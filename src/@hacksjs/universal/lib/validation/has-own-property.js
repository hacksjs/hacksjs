// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isAnyObject } from '../validation'

/**
 * Test whether an object has a certain property of its own (ie not inherited
 * from its prototype chain).
 *
 * Returns `true` even if the value of the property is `null` or `undefined`.
 *
 * @param {*} test The value to test.
 * @param {string} prop Property name.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = {}
 * test.prop = true // Or use `Object.defineProperty()`.
 * hasOwnProperty(test, 'prop') // → true
 */
const hasOwnProperty = (test, prop) => {

  if (!isAnyObject(test)) {
    return false
  }

  // https://eslint.org/docs/rules/no-prototype-builtins
  // return (test.hasOwnProperty(prop))
  return (Object.prototype.hasOwnProperty.call(test, prop))

}

export { hasOwnProperty }
