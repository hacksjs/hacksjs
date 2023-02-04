// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for a `number` primitive or `Number` object instance.
 *
 * This function returns `true` for the `NaN` value, which JavaScript treats as
 * a type of number. To test for a valid number, use `isValidNumber()`.
 *
 * Note, `bigint` is another number type in JavaScript, but the two cannot be
 * used together. You cannot perform a `+` operation on a `bigint` and a
 * `number`, for example. And functions attached to the built-in `Math` object
 * are incompatible with `bigint` values.
 *
 * For these reasons, this function tests specifically for `Number` objects or
 * `number` literals/primitives. Hacks.js offers another validation function,
 * `isBigInt()`, for checking for `bigint` primitives.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = 1
 * isNumber(test) // → true
 */
const isNumber = (test) => {
  return (typeof test === 'number' || objectToString(test) === object_tostring_map.number)
}

export { isNumber }
