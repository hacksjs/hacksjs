// @ts-check

// eslint-disable prefer-regex-literals
// eslint-disable key-spacing
// eslint-disable no-array-constructor
// eslint-disable quote-props
// eslint-disable no-new-wrappers


// Import JSDom to emulate web platform APIs.
import 'jsdom-global/register'

/**
 * TODO: Describe this…
 */
const generateTestData = () => {

  /**
   * @typedef {*} AnyTestValue
   * @enum {AnyTestValue}
   */
  const testData = {

    'arguments built-in variable':
        (function () { return arguments })(),

    'array literal with no elements':
        [],

    'array literal with elements':
        [null, false, 0],

    'array literal with elements with undefined values':
        [undefined],

    'array constructed with no elements':
        new Array(),

    'array constructed with elements':
        new Array(null, false),

    'array constructed with elements with undefined values':
        new Array(undefined),

    'array buffer':
        new ArrayBuffer(8),

    'bigint literal':
        900719925474099267n,

    'bigint literal octal':
        0o777777777777n,

    'bigint literal hexadecimal':
        0x123456789ABCDEFn,

    'bigint literal binary':
        0b11101001010101010101n,

    'bigint factory':
        BigInt(900719925474099267n),

    'bigint factory octal':
        BigInt(0o777777777777n),

    'bigint factory hexadecimal':
        BigInt(0x123456789ABCDEFn),

    'bigint factory binary':
        BigInt(0b11101001010101010101n),

    'boolean object false':
        new Boolean(false),

    'boolean object true':
        new Boolean(true),

    'boolean primitive false':
        false,

    'boolean primitive true':
        true,

    'date object with current time':
        new Date(),

    'date object with far-future time':
        new Date('2179-02-24T03:00:00'),

    'date object with historic time':
        new Date('1979-02-24T03:00:00'),

    'date object with invalid value':
        new Date('foo'),

    // TODO: Add more DOM element mocks.
    // TODO: Add text node mocks.

    'dom element: form':
        document.createElement('form'),

    'dom node list':
        document.querySelectorAll('div'),

    'function anonymous':
        function () { return null },

    'function anonymous async':
        async function () { return null },

    'function anonymous async - immediately invoked':
        (async function () { return null })(),

    'function anonymous returning promise':
        function () { return Promise.resolve(true) },

    'function anonymous returning promise - immediately invoked':
        (function () { return Promise.resolve(true) })(),

    'function arrow':
        () => { return null },

    'function arrow async':
        async () => { return null },

    'function arrow async - immediately invoked':
        (async () => { return null })(),

    'function arrow returning promise':
        () => { return Promise.resolve(true) },

    'function arrow returning promise - immediately invoked':
        (() => { return Promise.resolve(true) })(),

    'function named':
        function namedFunction () { return null },

    'function named async':
        async function namedFunction () { return null },

    'function named async - immediately invoked':
        (async function namedFunction () { return null })(),

    'function named returning promise':
        function namedFunction () { return Promise.resolve(true) },

    'function named returning promise - immediately invoked':
        (function namedFunction () { return Promise.resolve(true) })(),

    'iterator object':
        (function * () { yield * [1, 2, 3] })(),

    'map with no elements':
        new Map(),

    'map with elements':
        (() => {
          const map = new Map()
          map.set(0, 'foo')
          map.set(1, 'bar')
          return map
        })(),

    'nan':
        Number.NaN,

    'null':
        null,

    'number literal max value':
        Number.MAX_VALUE,

    'number literal max value encoded as string':
        '' + Number.MAX_VALUE,

    'number literal min value':
        Number.MIN_VALUE,

    'number literal min value encoded as string':
        '' + Number.MIN_VALUE,

    'number literal binary':
        0b111, // 7

    'number literal binary encoded as string':
        '' + 0b111,

    'number literal exponential':
        314e-2,

    'number literal exponential encoded as string':
        '' + 314e-2,

    'number literal exponential with decimal':
        0.0314e+2,

    'number literal exponential with decimal encoded as string':
        '' + 0.0314e+2,

    'number literal hexadecimal':
        0xA,

    'number literal hexadecimal encoded as string':
        '' + 0xA,

    'number literal octal':
        0o51, // 41

    'number literal octal encoded as string':
        '' + 0o51,

    'number object empty':
        new Number(),

    'number object negative float':
        new Number(-3.14),

    'number object negative int':
        new Number(-42),

    'number object positive float':
        new Number(3.14),

    'number object positive int':
        new Number(42),

    'number object zero':
        new Number(0),

    'number primitive negative float':
        -3.14,

    'number primitive negative float encoded as string':
        '-3.14',

    'number primitive negative int':
        -42,

    'number primitive negative int encoded as string':
        '-42',

    'number primitive positive float':
        3.14,

    'number primitive positive float encoded as string':
        '3.14',

    'number primitive positive int':
        42,

    'number primitive positive int encoded as string':
        '42',

    'number primitive zero':
        0,

    'number primitive zero encoded as string':
        '0',

    'object constructed with no own properties':
        Object(),

    'object constructed with own property':
        (() => {
          const o = Object()
          o.prop = false
          return o
        })(),

    'object literal with no own properties':
        {},

    'object literal with own property':
        { prop: false },

    'object literal with own property with null value':
        { prop: null },

    'object literal with own property with undefined value':
        { prop: undefined },

    'object with own explicit writable property':
        (() => {
          const o = {}
          Object.defineProperty(o, 'mutable', {
            value: false,
            writable: true,
            enumerable: false,
          })
          return o
        })(),

    'object with own implicit writable property':
        (() => {
          const o = {}
          o.mutable = false
          return o
        })(),

    'object with own non-writable property':
        (() => {
          const o = {}
          Object.defineProperty(o, 'immutable', {
            value: false,
            writable: false,
            enumerable: false,
          })
          return o
        })(),

    'object with inherited non-writable property':
        (() => {
          const o = {}
          Object.defineProperty(o, 'immutable', {
            value: false,
            writable: false,
            enumerable: false,
          })
          return Object.create(o, {})
        })(),

    'promise':
        new Promise((_resolve, _reject) => { return null }),

    'regexp constructed':
        new RegExp('ab+c', 'i'),

    'regexp literal':
        /ab+c/i,

    'set with no elements':
        new Set(),

    'set with elements':
        (() => {
          const set = new Set()
          set.add(42)
          set.add('forty two')
          return set
        })(),

    'shared array buffer':
        new SharedArrayBuffer(1024),

    'string literal of zero length':
        '',

    'string literal that cannot be coerced to a number: "99,999"':
        '99,999',

    'string literal that cannot be coerced to a number: "[1]"':
        '[1]',

    'string literal that cannot be coerced to a number: "10 0"':
        '10 0',

    'string literal with visible characters':
        'lorem ipsum...',

    'string literal with three space characters':
        '   ',

    'string literal with "en space" character':
        ' ',

    'string literal with "en space" character - unicode encoded':
        '\u2002',

    'string literal with "line feed" character - escaped':
        '\n',

    'string literal with "line feed" character - unicode encoded':
        '\u000A',

    'string literal with "narrow no-break space" character':
        ' ',

    'string literal with "narrow no-break space" character - unicode encoded':
        '\u202F',

    'string literal with "null" control character - unicode encoded':
        '\u0000',

    'string literal with "soft hyphen" character':
        '­',

    'string literal with "soft hyphen" character - unicode encoded':
        '\u00AD',

    'string literal with "zero-width non-breaking space" character':
        '﻿',

    'string literal with "zero-width non-breaking space" character - unicode encoded':
        '\uFEFF',

    'string object of zero length':
        new String(''),

    'string object with visible characters':
        new String('lorem ipsum...'),

    'string object with three space characters':
        new String('   '),

    'string object with "en space" character':
        new String(' '),

    'string object with "en space" character - unicode encoded':
        new String('\u2002'),

    'string object with "line feed" character - escaped':
        new String('\n'),

    'string object with "line feed" character - unicode encoded':
        new String('\u000A'),

    'string object with "narrow no-break space" character':
        new String(' '),

    'string object with "narrow no-break space" character - unicode encoded':
        new String('\u202F'),

    'string object with "null" control character - unicode encoded':
        new String('\u0000'),

    'string object with "soft hyphen" character':
        new String('­'),

    'string object with "soft hyphen" character - unicode encoded':
        new String('\u00AD'),

    'string object with "zero-width non-breaking space" character':
        new String('﻿'),

    'string object with "zero-width non-breaking space" character - unicode encoded':
        new String('\uFEFF'),

    // TODO: Add tests for template strings, multiline strings, datestring values, etc.

    'typed array from length':
        new Int8Array(2),

    'typed array from array':
        new Int8Array([21, 31]),

    'typed array from another typed array':
        new Int8Array(new Int8Array([21, 31])),

    'typed array from array buffer':
        new Int8Array(new ArrayBuffer(8), 1, 4),

    'typed array from iterator object':
        new Int8Array(function * () { yield * [1, 2, 3] }()),

    'typed array of type Int8Array with no value':
        new Int8Array(),

    'typed array of type Uint8Array with no value':
        new Uint8Array(),

    'typed array of type Uint8ClampedArray with no value':
        new Uint8ClampedArray(),

    'typed array of type Int16Array with no value':
        new Int16Array(),

    'typed array of type Uint16Array with no value':
        new Uint16Array(),

    'typed array of type Int32Array with no value':
        new Int32Array(),

    'typed array of type Uint32Array with no value':
        new Uint32Array(),

    'typed array of type Float32Array with no value':
        new Float32Array(),

    'typed array of type Float64Array with no value':
        new Float64Array(),

    'typed array of type BigInt64Array with no value':
        new BigInt64Array(),

    'typed array of type BigUint64Array with no value':
        new BigUint64Array(),

    'undefined':
        undefined,

    'void 0':
        // eslint-disable-next-line no-void
        void 0,

  }

  // const testKeys = Object.keys(testValues)
  // return { testKeys, testValues }

  return testData

}

export { generateTestData }
