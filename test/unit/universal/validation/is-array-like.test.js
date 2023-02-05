// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isArrayLike, isCollection, isIterable } from '../../../../src/@hacksjs/universal/lib/validation'

const passes = [
  // These are the same values that pass for `isArray()`:
  'array literal with no elements',
  'array literal with elements',
  'array literal with elements with undefined values',
  'array constructed with elements',
  'array constructed with elements with undefined values',
  'array constructed with no elements',

  // String primitives and objects are array-like in JavaScript. They are
  // collections of characters.
  'number literal max value encoded as string',
  'number literal min value encoded as string',
  'number literal binary encoded as string',
  'number literal exponential encoded as string',
  'number literal exponential with decimal encoded as string',
  'number literal hexadecimal encoded as string',
  'number literal octal encoded as string',
  'number primitive negative float encoded as string',
  'number primitive negative int encoded as string',
  'number primitive positive float encoded as string',
  'number primitive positive int encoded as string',
  'number primitive zero encoded as string',

  'string literal of zero length',
  'string literal that cannot be coerced to a number: "99,999"',
  'string literal that cannot be coerced to a number: "[1]"',
  'string literal that cannot be coerced to a number: "10 0"',
  'string literal with visible characters',
  'string literal with three space characters',
  'string literal with "en space" character',
  'string literal with "en space" character - unicode encoded',
  'string literal with "line feed" character - escaped',
  'string literal with "line feed" character - unicode encoded',
  'string literal with "narrow no-break space" character',
  'string literal with "narrow no-break space" character - unicode encoded',
  'string literal with "null" control character - unicode encoded',
  'string literal with "soft hyphen" character',
  'string literal with "soft hyphen" character - unicode encoded',
  'string literal with "zero-width non-breaking space" character',
  'string literal with "zero-width non-breaking space" character - unicode encoded',
  'string object of zero length',
  'string object with visible characters',
  'string object with three space characters',
  'string object with "en space" character',
  'string object with "en space" character - unicode encoded',
  'string object with "line feed" character - escaped',
  'string object with "line feed" character - unicode encoded',
  'string object with "narrow no-break space" character',
  'string object with "narrow no-break space" character - unicode encoded',
  'string object with "null" control character - unicode encoded',
  'string object with "soft hyphen" character',
  'string object with "soft hyphen" character - unicode encoded',
  'string object with "zero-width non-breaking space" character',
  'string object with "zero-width non-breaking space" character - unicode encoded',

  // These are other array-like values.
  'arguments built-in variable',
  'dom node list',
  'iterator object',
  'map with elements',
  'map with no elements',
  'set with elements',
  'set with no elements',
  'typed array from another typed array',
  'typed array from array',
  'typed array from array buffer',
  'typed array from iterator object',
  'typed array from length',
  'typed array of type BigInt64Array with no value',
  'typed array of type BigUint64Array with no value',
  'typed array of type Float32Array with no value',
  'typed array of type Float64Array with no value',
  'typed array of type Int16Array with no value',
  'typed array of type Int32Array with no value',
  'typed array of type Int8Array with no value',
  'typed array of type Uint16Array with no value',
  'typed array of type Uint32Array with no value',
  'typed array of type Uint8Array with no value',
  'typed array of type Uint8ClampedArray with no value',
]

describe('isArrayLike()', () => {

  const test = new ValidationFunctionTest()
  test.fn(isArrayLike)
  test.passes(passes)
  test.run()

})

describe('isCollection()', () => {

  const test = new ValidationFunctionTest()
  test.fn(isCollection)
  test.passes(passes)
  test.run()

})

describe('isIterable()', () => {

  const test = new ValidationFunctionTest()
  test.fn(isIterable)
  test.passes(passes)
  test.run()

})
