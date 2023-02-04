// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a reference to the document's root `<html>` element.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * isHTMLRoot(window.document.documentElement)
 * // → true
 */
const isHTMLRoot = (test) => {
  return (test === window.document.documentElement)
}

export { isHTMLRoot }
