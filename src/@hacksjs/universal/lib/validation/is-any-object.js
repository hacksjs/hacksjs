// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Test for an `Object` instance or any other object subtype.
 *
 * In JavaScript, most things are an object of some sort. Functions and arrays
 * and regular expressions are all objects. Only a handful of "primitive" types,
 * string literals, numbers, booleans, `null`, and `undefined`, are not objects.
 * Yet even some of these (strings, numbers, and booleans) can be represented by
 * the `String`, `Number` and `Boolean` objects respectively.
 *
 * See also the `isAnyPrimitive()` function, which returns the opposite result.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = {}
 * isAnyObject(test) // → true
 *
 * @example
 * const test = []
 * isAnyObject(test) // → true
 *
 * @example
 * const test = new Date()
 * isAnyObject(test) // → true
 *
 * @example
 * const test = /ab+c/i
 * isAnyObject(test) // → true
 */
const isAnyObject = (test) => {

  // Testing for a reference to _any_ type of object in JavaScript is tricky.
  //
  // We can't use `instanceof ` because it misses two valid cases.
  //
  //     function isAnyObject (test) {
  //       return (test instanceof Object)
  //     }
  //     isAnyObject(Object.prototype) → false
  //     isAnyObject(Object.create(null)) → false
  //
  // We can't use `typeof` either, because it returns false positives (for `null`)
  // and false negatives (for functions).
  //
  //     function isAnyObject (test) {
  //       return (typeof test === 'object')
  //     }
  //     isAnyObject(null) // → true
  //     isAnyObject(aFunction) // → false
  //
  // We can't use `Object.prototype.toString.call`, because it returns false
  // positives for all the primitive types.
  //
  //     Object.prototype.toString.call(new Number(3)) // → '[object Number]'
  //     Object.prototype.toString.call(3) // → '[object Number]'
  //
  // There seem to be only two reliable methodologies to check for any object in
  // JavaScript. The first option is to use `typeof` but with added logic to
  // eliminate the false positives and capture the false negatives.
  //
  //     function isAnyObject (test) {
  //       if (test === null) {
  //         return false
  //       }
  //       return ( (typeof test === 'function') || (typeof test === 'object') )
  //     }
  //
  // Lodash uses a similar solution, but their equivalent `isObjectLike` function
  // returns `false` for functions, which is not strictly corrected. In JavaScript,
  // functions are Function objects.
  //
  //     function isObjectLike (test) {
  //       return test != null && typeof test == 'object'
  //     }
  //
  // The solution we've chosen is to use the check `test === Object(test)`.
  // This works because the `Object` constructor creates an object wrapper for the
  // given primitive value. If the given value is already an object, it just
  // returns the same object reference without creating a new object. Thus we can
  // use a strict equality operator to compare the input and output values to see
  // if they reference the same thing. If they do not, the input must have been a
  // primitive type.
  //
  //     function isAnyObject (test) {
  //       return (test === Object(test))
  //     }

  return (test === Object(test))

}

export { isAnyObject }
