// @ts-check

// Jest globals.
import { describe, expect, test } from '@jest/globals'

// The mock values we test against.
import { mocks, mock_keys } from '../__mocks__'

/**
 * @callback validationFunction
 *
 * @param {*} value Test value.
 * @returns {boolean} Whether or not the value passes the validation test.
 */

/**
 * Build and run tests for a specific validation function.
 *
 * @example
 * // Import the validation function to be tested.
 * import { isBlankText } from './path/to/validation'
 *
 * // Initialize a new instance of this test builder class.
 * const builder = new ValidationFunctionTestBuilder()
 *
 * // Set the validation function to be tested. Expected
 * // to return boolean true or false.
 * builder.fn()
 *
 * // Provide a list of key names that reference mock values
 * // that are expected to pass the validation function's test.
 * builder.passes([
 *   'string literal',
 *   'string object',
 *   'template literal',
 * ])
 *
 * // Compile and run all the tests. Tests will be automatically created
 * // for all the mock values for which the given validation function is
 * // expected to fail.
 * builder.run()
 */
class ValidationFunctionTestBuilder {

  /**
   * Reference to the function to test.
   *
   * @type {validationFunction}
   */
  #fn

  /**
   * List of mock keys for which the test function should pass.
   *
   * @type {string[]}
   */
  #passes

  /**
   * List of mock keys for which the test function should fail.
   *
   * @type {string[]}
   */
  #fails

  /**
   * Provide a reference to the validation function to test.
   *
   * This will need to be wrapped in an outer function, if additional
   * arguments need to be provided besides the mock value.
   *
   * @param {validationFunction} fn
   */
  fn (fn) {
    this.#fn = fn
  }

  /**
   * Provide a list of keys from the mocks object, which reference values
   * for which the validation function is expected to pass.
   *
   * This function will automatically compile a list of mock values for
   * which the validation function is expected to fail.
   *
   * @param {string[]} keys List of mock keys.
   * @throws Error if non-existent mock key.
   */
  passes (keys) {
    keys.forEach((key) => {
      if (!mock_keys.includes(key)) {
        throw Error(`Non-existent mock key: "${key}"`)
      }
    })

    this.#passes = keys
    this.#fails = mock_keys.filter((key) => !keys.includes(key))
  }

  /**
   * Alternatively, provide keys from the mocks object that reference values
   * for which the validation function is expected to fail.
   *
   * This function will automatically compile a list of mock values for
   * which the validation function is expected to pass.
   *
   * @param {string[]} keys List of mock keys.
   * @throws Error if non-existent mock key.
   */
  fails (keys) {
    keys.forEach((key) => {
      if (!mock_keys.includes(key)) {
        throw Error(`Non-existent mock key: "${key}"`)
      }
    })

    this.#fails = keys
    this.#passes = mock_keys.filter((key) => !keys.includes(key))
  }

  /**
   * Build and run the test suite.
   */
  run () {

    describe('return true', () => {
      const expected = true

      // We are not using Jest's `test.each()` because it quotes the
      // mock key in the test output.
      this.#passes.forEach((key) => {
        test(key, () => {
          const value = mocks[key]
          const actual = this.#fn(value)
          expect(actual).toEqual(expected)
        })
      })
    })

    describe('return false', () => {
      const expected = false

      this.#fails.forEach((key) => {
        test(key, () => {
          const value = mocks[key]
          const actual = this.#fn(value)
          expect(actual).toEqual(expected)
        })
      })
    })
  }
}

export { ValidationFunctionTestBuilder }
