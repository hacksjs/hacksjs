// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a reference to an HTML `<form>` element.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 */
const isHTMLForm = (test) => {
  if (test && test.nodeType === 1 && test.nodeName.toUpperCase() === 'FORM') {
    return true
  }

  return false
}

export { isHTMLForm }
