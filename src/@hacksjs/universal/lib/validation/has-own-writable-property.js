// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test whether a certain property of a given object can be changed.
 *
 * Note, the property must be set directly on the test object and not inherited
 * via the object's prototype chain.
 *
 * @param {*} test The value to test.
 * @param {string} prop Property name.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = {}
 *
 * Object.defineProperty(test, 'mutable', {
 *   value: 1,
 *   writable: true,
 *   enumerable: false
 * })
 *
 * hasOwnWritableProperty(test, 'mutable') // → true
 */
const hasOwnWritableProperty = (test, prop) => {
  // This check is required to prevent TypeErrors when
  // `Object.getOwnPropertyDescriptor()` is called on
  // `undefined` or `null` values.
  if (!test) return false

  const descriptor = Object.getOwnPropertyDescriptor(test, prop)
  return (descriptor !== undefined && descriptor.writable)
}

// Aliases
const hasOwnMutableProperty = hasOwnWritableProperty

export { hasOwnWritableProperty, hasOwnMutableProperty }
