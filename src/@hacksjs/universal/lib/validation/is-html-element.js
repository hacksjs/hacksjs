// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a reference to a DOM element node.
 *
 * References to text nodes and comment nodes will evaluate to `false`, as will
 * `NodeList` instances.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 */
const isHTMLElement = (test) => {
  return !!(test && test.nodeType === 1)
}

export { isHTMLElement }
