// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a `bigint` primitive.
 *
 * Note, although internally JavaScript uses a primitive wrapper object,
 * `BigInt`, in JavaScript applications there can only be `bigint` primitives.
 * The `BigInt()` function, which cannot be used with the `new` keyword, can
 * be used as a factory method to create `bigint` values, as an alternative to
 * the leaner but less expressive literal syntax.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = 9007199254740991n
 * isBigInt(test) // → true
 *
 * @example
 * const test = 9007199254740991
 * isBigInt(test) // → false
 */
const isBigInt = (test) => {
  return (typeof test === 'bigint')
}

export { isBigInt }
