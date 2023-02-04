// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a reference to a DOM element node is either a `<button>` control, or
 * an `<input>` with a `type` attribute that matches "button", "submit", "reset"
 * or "image".
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 */
const isHTMLButton = (test) => {
  if (!(test && test.nodeType === 1)) return false

  const name = test.nodeName.toUpperCase()
  if (name === 'BUTTON') return true
  if (name === 'INPUT') {
    const type = test.type.toUpperCase()
    if (type === 'BUTTON') return true
    if (type === 'SUBMIT') return true
    if (type === 'RESET') return true
    if (type === 'IMAGE') return true
  }

  return false
}

export { isHTMLButton }
