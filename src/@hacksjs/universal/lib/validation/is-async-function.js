// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a reference to an async function.
 *
 * Note, this will fail for a conventional synchronous function that return
 * a promise. We're checking the function's static type, not its dynamic return
 * value. Functions that are prefixed with the `async` keyword are wrapped in
 * the `AsyncFunction` constructor, but those that dynamically return a
 * `Promise` are of the plain `Function` type.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = async function () => {}
 * isAsyncFunction(test) // → true
 */
const isAsyncFunction = (test) => {

  // Our performance benchmarks reveal this methodology of detecting an async
  // function to be more than 7x faster than the nearest best-performing method.
  return test != null && test[Symbol.toStringTag] === 'AsyncFunction'

}

export { isAsyncFunction }
