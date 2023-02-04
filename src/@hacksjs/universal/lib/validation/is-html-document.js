// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a reference to the main `document` for the current web page.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * isHTMLDocument(window.document)
 * // → true
 */
const isHTMLDocument = (test) => {
  return (test === window.document)
}

export { isHTMLDocument }
