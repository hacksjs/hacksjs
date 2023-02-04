// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isString, isNaN } from '../validation'

/**
 * Test for valid number value encoded as a string.
 *
 * This tests specifically for string primitives and String objectives that can
 * be coerced into a valid number. Numbers themselves will test false — the
 * expected type is string.
 *
 * Non-numerical values and `NaN` will test `false`. `BigInt` instances will
 * also test false.
 *
 * Not all numerical strings can be reliably coerced into JavaScript's floating
 * point number type. Values such as "99,999" and "[1]" will fail this test.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = 1
 * isNumericString(test) // → false
 *
 * @example
 * const test = '' + 8e5
 * isNumericString(test) // → true
 *
 * @example
 * const test = '42.5'
 * isNumericString(test) // → true
 */
const isNumericString = (test) => {

  if (!isString(test)) {
    return false
  }

  // This solution is taken from Angular 4.
  // https://github.com/angular/angular/blob/4.3.x/packages/common/src/pipes/number_pipe.ts#L172
  // See also https://stackoverflow.com/questions/18082/

  return (!isNaN(test - parseFloat(test)))

}

export { isNumericString }
