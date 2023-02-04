// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test whether a certain property of a given object is immutable.
 *
 * This is _not_ the opposite of hasOwnWritableProperty(). For this test,
 * as with hasOwnWritableProperty(), primitives and objects missing the
 * property will evaluate to false.
 *
 * As with the hasOwnWritableProperty() test, the property is expected to be
 * set directly on the test object, not inherited via the object's prototype.
 *
 * @param {*} test The value to test.
 * @param {string} prop Property name.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = {}
 *
 * Object.defineProperty(test, 'immutable', {
 *   value: 1,
 *   writable: false,
 *   enumerable: false
 * })
 *
 * hasOwnNonWritableProperty(test, 'immutable') // → true
 */
const hasOwnNonWritableProperty = (test, prop) => {
  // This check is required to prevent TypeErrors when
  // `Object.getOwnPropertyDescriptor()` is called on
  // `undefined` or `null` values.
  if (!test) return false

  const descriptor = Object.getOwnPropertyDescriptor(test, prop)
  return (descriptor !== undefined && !descriptor.writable)
}

// Aliases
const hasOwnImmutableProperty = hasOwnNonWritableProperty

export { hasOwnNonWritableProperty, hasOwnImmutableProperty }
