// @ts-check

// Test framework
import { describe, test, expect } from '../../../includes/test-framework.js'

import { objectToString, object_tostring_map } from '../../../../src/@hacksjs/universal/lib/objects'

// Import JSDom to emulate web platform APIs.
import 'jsdom-global/register'

// TODO: Move to centralized mocks.
class TestClass {
  get [Symbol.toStringTag] () {
    return 'Test'
  }

  get key () {
    return true
  }

  set key (_value) {
    // return undefined
  }

  fn () {
    return null
  }
}

describe('objectToString()', () => {

  test('return "[object Arguments]" for the arguments object', () => {
    let actual
    let expected
    (function () {
      const test = arguments
      actual = objectToString(test)
      expected = object_tostring_map.arguments
    }())

    expect(actual).toBe(expected)
  })

  test('return "[object Array]" for Array instances', () => {
    const test = []
    const actual = objectToString(test)
    const expected = object_tostring_map.array

    expect(actual).toBe(expected)
  })

  test('return "[object ArrayBuffer]" for ArrayBuffer instances', () => {
    const test = new ArrayBuffer(8)
    const actual = objectToString(test)
    const expected = object_tostring_map.array_buffer

    expect(actual).toBe(expected)
  })

  test('return "[object AsyncFunction]" for async functions', async () => {
    const test = async () => {}
    const actual = objectToString(test)
    const expected = object_tostring_map.async_function

    expect(actual).toBe(expected)
  })

  test('return "[object Boolean]" for boolean primitives', () => {
    const test = false
    const actual = objectToString(test)
    const expected = object_tostring_map.boolean

    expect(actual).toBe(expected)
  })

  test('return "[object Boolean]" for Boolean instances', () => {
    // eslint-disable-next-line no-new-wrappers
    const test = new Boolean(false)
    const actual = objectToString(test)
    const expected = object_tostring_map.boolean

    expect(actual).toBe(expected)
  })

  test('return "[object Boolean]" for Object(boolean) instances', () => {
    // eslint-disable-next-line no-new-object
    const test = new Object(false)
    const actual = objectToString(test)
    const expected = object_tostring_map.boolean

    expect(actual).toBe(expected)
  })

  test('return "[object DataView]" for DataView instances', () => {
    const test = new DataView(new ArrayBuffer(2))
    const actual = objectToString(test)
    const expected = object_tostring_map.data_view

    expect(actual).toBe(expected)
  })

  test('return "[object Date]" for Date instances', () => {
    const test = new Date()
    const actual = objectToString(test)
    const expected = object_tostring_map.date

    expect(actual).toBe(expected)
  })

  test('return "[object DOMException]" for DomException instances', () => {
    const test = new DOMException()
    const actual = objectToString(test)
    const expected = object_tostring_map.dom_exception

    expect(actual).toBe(expected)
  })

  test('return "[object Error]" for Error instances', () => {
    const test = new Error()
    const actual = objectToString(test)
    const expected = object_tostring_map.error

    expect(actual).toBe(expected)
  })

  test('return "[object Float32Array]" for Float32Array instances', () => {
    const test = new Float32Array(2)
    const actual = objectToString(test)
    const expected = object_tostring_map.float32_array

    expect(actual).toBe(expected)
  })

  test('return "[object Float64Array]" for Float64Array instances', () => {
    const test = new Float64Array(2)
    const actual = objectToString(test)
    const expected = object_tostring_map.float64_array

    expect(actual).toBe(expected)
  })

  test('return "[object Function]" for anonymous functions', () => {
    const test = function () {}
    const actual = objectToString(test)
    const expected = object_tostring_map.function

    expect(actual).toBe(expected)
  })

  test('return "[object Function]" for named functions', () => {
    const test = function fn () {}
    const actual = objectToString(test)
    const expected = object_tostring_map.function

    expect(actual).toBe(expected)
  })

  test('return "[object Function]" for arrow functions', () => {
    const test = () => {}
    const actual = objectToString(test)
    const expected = object_tostring_map.function

    expect(actual).toBe(expected)
  })

  test('return "[object Function]" for classes', () => {
    const actual = objectToString(TestClass)
    const expected = object_tostring_map.function

    expect(actual).toBe(expected)
  })

  test('return "[object Function]" for class methods', () => {
    const test = (new TestClass()).fn
    const actual = objectToString(test)
    const expected = object_tostring_map.function

    expect(actual).toBe(expected)
  })

  test('not return "[object Function]" for getters', () => {
    const test = (new TestClass()).key
    const actual = objectToString(test)
    const not_expected = object_tostring_map.function

    expect(actual).not.toBe(not_expected)
  })

  test('not return "[object Function]" for setters', () => {
    const test = (new TestClass()).key = true
    const actual = objectToString(test)
    const not_expected = object_tostring_map.function

    expect(actual).not.toBe(not_expected)
  })

  test('return "[object GeneratorFunction]" for generator functions', () => {
    /**
     * @param {number} i
     */
    function * generator (i) {
      yield i
      yield i + 10
    }

    const actual = objectToString(generator)
    const expected = object_tostring_map.generator_function

    expect(actual).toBe(expected)
  })

  test('return "[object Function]" for GeneratorFunction constructor', () => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
    const GeneratorFunction = Object.getPrototypeOf(function * () {}).constructor

    const actual = objectToString(GeneratorFunction)
    const expected = object_tostring_map.function

    expect(actual).toBe(expected)
  })

  test('return "[object Int8Array]" for Int8Array instances', () => {
    const test = new Int8Array(2)
    const actual = objectToString(test)
    const expected = object_tostring_map.int8_array

    expect(actual).toBe(expected)
  })

  test('return "[object Int16Array]" for Int16Array instances', () => {
    const test = new Int16Array(2)
    const actual = objectToString(test)
    const expected = object_tostring_map.int16_array

    expect(actual).toBe(expected)
  })

  test('return "[object Int32Array]" for Int32Array instances', () => {
    const test = new Int32Array(2)
    const actual = objectToString(test)
    const expected = object_tostring_map.int32_array

    expect(actual).toBe(expected)
  })

  test('return "[object Map]" for Map instances', () => {
    const test = new Map()
    const actual = objectToString(test)
    const expected = object_tostring_map.map

    expect(actual).toBe(expected)
  })

  test('return "[object Number]" for number primitives', () => {
    const test = 1
    const actual = objectToString(test)
    const expected = object_tostring_map.number

    expect(actual).toBe(expected)
  })

  test('return "[object Number]" for Number instances', () => {
    // eslint-disable-next-line no-new-wrappers
    const test = new Number(1)
    const actual = objectToString(test)
    const expected = object_tostring_map.number

    expect(actual).toBe(expected)
  })

  test('return "[object Number]" for Object(number) instances', () => {
    // eslint-disable-next-line no-new-object
    const test = new Object(1)
    const actual = objectToString(test)
    const expected = object_tostring_map.number

    expect(actual).toBe(expected)
  })

  test('return "[object Null]" for null values', () => {
    const test = null
    const actual = objectToString(test)
    const expected = object_tostring_map.null

    expect(actual).toBe(expected)
  })

  test('return "[object Object]" for plain object literals', () => {
    const test = {}
    const actual = objectToString(test)
    const expected = object_tostring_map.object

    expect(actual).toBe(expected)
  })

  test('return "[object Object]" for Object instances', () => {
    // eslint-disable-next-line no-new-object
    const test = new Object()
    const actual = objectToString(test)
    const expected = object_tostring_map.object

    expect(actual).toBe(expected)
  })

  test('return "[object Promise]" for promises', () => {
    const test = new Promise(() => {})
    const actual = objectToString(test)
    const expected = object_tostring_map.promise

    expect(actual).toBe(expected)
  })

  test('return "[object RegExp]" for literal regular expressions', () => {
    const test = /./
    const actual = objectToString(test)
    const expected = object_tostring_map.reg_exp

    expect(actual).toBe(expected)
  })

  test('return "[object RegExp]" for RegExp instances', () => {
    // eslint-disable-next-line prefer-regex-literals
    const test = new RegExp('')
    const actual = objectToString(test)
    const expected = object_tostring_map.reg_exp

    expect(actual).toBe(expected)
  })

  test('return "[object Set]" for Set instances', () => {
    const test = new Set()
    const actual = objectToString(test)
    const expected = object_tostring_map.set

    expect(actual).toBe(expected)
  })

  test('return "[object String]" for string primitives', () => {
    const test = ''
    const actual = objectToString(test)
    const expected = object_tostring_map.string

    expect(actual).toBe(expected)
  })

  test('return "[object String]" for String instances', () => {
    // eslint-disable-next-line no-new-wrappers
    const test = new String('')
    const actual = objectToString(test)
    const expected = object_tostring_map.string

    expect(actual).toBe(expected)
  })

  test('return "[object String]" for Object(string) instances', () => {
    // eslint-disable-next-line no-new-object
    const test = new Object('')
    const actual = objectToString(test)
    const expected = object_tostring_map.string

    expect(actual).toBe(expected)
  })

  test('return "[object Symbol]" for Symbol instances', () => {
    const test = Symbol('')
    const actual = objectToString(test)
    const expected = object_tostring_map.symbol

    expect(actual).toBe(expected)
  })

  test('return "[object Uint8Array]" for Uint8Array instances', () => {
    const test = new Uint8Array(2)
    const actual = objectToString(test)
    const expected = object_tostring_map.uint8_array

    expect(actual).toBe(expected)
  })

  test('return "[object Uint8ClampedArray]" for Uint8ClampedArray instances', () => {
    const test = new Uint8ClampedArray(2)
    const actual = objectToString(test)
    const expected = object_tostring_map.uint8_clamped_array

    expect(actual).toBe(expected)
  })

  test('return "[object Uint16Array]" for Uint16Array instances', () => {
    const test = new Uint16Array(2)
    const actual = objectToString(test)
    const expected = object_tostring_map.uint16_array

    expect(actual).toBe(expected)
  })

  test('return "[object Uint32Array]" for Uint32Array instances', () => {
    const test = new Uint32Array(2)
    const actual = objectToString(test)
    const expected = object_tostring_map.uint32_array

    expect(actual).toBe(expected)
  })

  test('return "[object Undefined]" for undefined values', () => {
    const test = undefined
    const actual = objectToString(test)
    const expected = object_tostring_map.undefined

    expect(actual).toBe(expected)
  })

  test('return "[object WeakMap]" for WeakMap instances', () => {
    const test = new WeakMap()
    const actual = objectToString(test)
    const expected = object_tostring_map.weak_map

    expect(actual).toBe(expected)
  })

  test('return "[object WeakSet]" for WeakSet instances', () => {
    const test = new WeakSet()
    const actual = objectToString(test)
    const expected = object_tostring_map.weak_set

    expect(actual).toBe(expected)
  })

  test('return the wrapped typed for Proxies', () => {
    // In JavaScript, you can't tell that a Proxy is a Proxy. Their type
    // is revealed as the type of the internal value for which they provide
    // a facade.
    const target = []
    const handler = {}
    const test = new Proxy(target, handler)

    const actual = objectToString(test)
    const expected = object_tostring_map.array

    expect(actual).toBe(expected)
  })

  // https://mzl.la/3nAMnbY
  test('return custom string where "Symbol.toStringTag" getter', () => {
    const test = new TestClass()
    const actual = objectToString(test)
    const expected = '[object Test]'

    expect(actual).toBe(expected)
  })

})
