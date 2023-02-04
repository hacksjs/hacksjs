// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { isArray } from '.'

/**
 * Test for arrays and any array-like (iterable) object such as a `NodeList` or
 * `arguments` objects.
 *
 * This test passes for strings, which in JavaScript are "iterable objects" and
 * have other characteristics of arrays, such as a `length` property. Basically,
 * any kind of iterable object, whose value can be looped through using the
 * `for...of` construct, should pass this test.
 *
 * Note, `ArrayBuffer` instances are not considered to be array-like. That's
 * because you cannot directly read or write the contents of a buffer. Instead,
 * you must first transfer the buffer to another object such as a typed array
 * or a `DataView`.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = new Map()
 * map.set(0, 'foo')
 * map.set(1, 'bar')
 *
 * isArrayLike(map) // → true
 */
const isArrayLike = (test) => {

  if (isArray(test)) {
    return true
  }

  // Must exclude null and undefined before testing for iterators.
  // Loose equality on `null` also catches `undefined`.
  if (test == null) {
    return false
  }

  // Test for iterators, which will capture iterable objects
  // such as Maps and Sets. https://mzl.la/3cH0BCU
  return (typeof test[Symbol.iterator] === 'function')

}

// Aliases
const isCollection = isArrayLike
const isIterable = isArrayLike

export { isArrayLike, isCollection, isIterable }
