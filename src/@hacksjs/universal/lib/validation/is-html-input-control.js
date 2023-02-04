// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for a reference to an input control: `<select>`, `<textarea>`, `<input>`
 * or even a `<button>` — any element that can submit a value with a `<form>`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 */
const isHTMLInputControl = (test) => {
  if (!(test && test.nodeType === 1)) return false

  const name = test.nodeName.toUpperCase()
  if (name === 'BUTTON') return true
  if (name === 'INPUT') return true
  if (name === 'SELECT') return true
  if (name === 'TEXTAREA') return true

  return false
}

// alias
const isHTMLInput = isHTMLInputControl

export { isHTMLInputControl, isHTMLInput }
