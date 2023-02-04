// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a reference to the `<body>` element of the main document.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * isHTMLBody(window.document.body)
 * // → true
 *
 * @example
 * isHTMLBody(document.createElement('body'))
 * // → false
 */
const isHTMLBody = (test) => {
  return (test === window.document.body)
}

export { isHTMLBody }
