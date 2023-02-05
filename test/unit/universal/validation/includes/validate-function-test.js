// @ts-check

// Test framework
import { describe, expect, test } from '../../../../includes/test-framework'

// Test artifacts generator
import { generateTestArtifacts } from './generate-test-artifacts'

/**
 * @callback validationFunction
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
 * const test = new ValidationFunctionTest()
 *
 * // Set the validation function to be tested. Expected
 * // to return boolean true or false.
 * test.fn(isBlankText)
 *
 * // Provide a list of key names that reference mock values
 * // that are expected to pass the validation function's test.
 * test.passes([
 *   'string literal',
 *   'string object',
 *   'template literal',
 * ])
 *
 * // Compile and run all the tests. Tests will be automatically created
 * // for all the mock values for which the given validation function is
 * // expected to fail.
 * test.run()
 */
class ValidationFunctionTest {

  /**
   * Reference to the function to test.
   *
   * @type {validationFunction}
   */
  #fn

  /**
   * List of testKeys for which the test function should pass.
   *
   * @type {string[]}
   */
  #passes

  /**
   * List of testKeys for which the test function should fail.
   *
   * @type {string[]}
   */
  #fails

  #testKeys
  #testValues

  constructor() {
    const { testValues, testKeys } = generateTestArtifacts()

    this.#testKeys = testKeys
    this.#testValues = testValues
  }

  /**
   * Provide a reference to the validation function to test.
   *
   * This will need to be wrapped in an outer function, if additional
   * arguments need to be provided besides the test value.
   *
   * @param {validationFunction} fn
   */
  fn (fn) {
    this.#fn = fn
  }

  /**
   * Provide a list of keys from the test data object, which reference values
   * for which the validation function is expected to pass.
   *
   * This function will automatically compile a list of test values for
   * which the validation function is expected to fail.
   *
   * @param {string[]} keys List of test keys.
   * @throws Error if non-existent test key.
   */
  passes (keys) {
    keys.forEach((key) => {
      if (!this.#testKeys.includes(key)) {
        throw Error(`Non-existent test key: "${key}"`)
      }
    })

    this.#passes = keys
    this.#fails = this.#testKeys.filter((key) => !keys.includes(key))
  }

  /**
   * Alternatively, provide keys from the test data object that reference values
   * for which the validation function is expected to fail.
   *
   * This function will automatically compile a list of test values for
   * which the validation function is expected to pass.
   *
   * @param {string[]} keys List of test keys.
   * @throws Error if non-existent test key.
   */
  fails (keys) {
    keys.forEach((key) => {
      if (!this.#testKeys.includes(key)) {
        throw Error(`Non-existent test key: "${key}"`)
      }
    })

    this.#fails = keys
    this.#passes = this.#testKeys.filter((key) => !keys.includes(key))
  }

  /**
   * Build and run the test suite.
   */
  run () {
    describe('return true', () => {
      const expected = true

      // We are not using Jest's `test.each()` because it quotes the
      // test data key in the test output.
      this.#passes.forEach((key) => {
        test(key, () => {
          const value = this.#testValues[key]
          const actual = this.#fn(value)
          expect(actual).toEqual(expected)
        })
      })
    })

    describe('return false', () => {
      const expected = false

      this.#fails.forEach((key) => {
        test(key, () => {
          const value = this.#testValues[key]
          const actual = this.#fn(value)
          expect(actual).toEqual(expected)
        })
      })
    })
  }
}

export { ValidationFunctionTest }
