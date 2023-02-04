// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for an `undefined` value.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = undefined
 * isUndefined(test) // → true
 */
const isUndefined = (test) => {

  // We're using the old school methodology to test for an `undefined` value. This
  // was a fail-safe strategy in the days when `undefined` could be "shadowed"
  // within a function's scope. This can't happen within ES modules / strict mode,
  // but we're still using this strategy as its a good-un.
  //
  //     (function () {
  //       var undefined = 'shadow'
  //       console.log( undefined ) // → 'shadow'
  //     })

  // eslint-disable-next-line no-void
  return (test === void 0)

}

export { isUndefined }
