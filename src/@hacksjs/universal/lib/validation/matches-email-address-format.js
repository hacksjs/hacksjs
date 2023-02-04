// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a string that contains what looks to be a valid email address.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = 'hello@example.com'
 * matchesEmailAddressFormat(test) // → true
 */
const matchesEmailAddressFormat = (test) => {
  // TODO: Verify is a string, first.
  const ptn = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9]{2,}/
  return ptn.test(test)
}

export { matchesEmailAddressFormat }
