// @ts-check

// These are the keys to the mock values that are expected
// to pass the isAnyPrimitive() test. They are defined here because
// they are shared with the isAnyObject() test suite.
//
const all_mock_primitive_keys = [
  'bigint factory',
  'bigint factory binary',
  'bigint factory hexadecimal',
  'bigint factory octal',
  'bigint literal',
  'bigint literal binary',
  'bigint literal hexadecimal',
  'bigint literal octal',
  'boolean primitive false',
  'boolean primitive true',
  'nan',
  'null',

  'number literal binary',
  'number literal binary encoded as string',
  'number literal exponential',
  'number literal exponential encoded as string',
  'number literal exponential with decimal',
  'number literal exponential with decimal encoded as string',
  'number literal hexadecimal',
  'number literal hexadecimal encoded as string',
  'number literal max value',
  'number literal max value encoded as string',
  'number literal min value',
  'number literal min value encoded as string',
  'number literal octal',
  'number literal octal encoded as string',
  'number primitive negative float',
  'number primitive negative float encoded as string',
  'number primitive negative int',
  'number primitive negative int encoded as string',
  'number primitive positive float',
  'number primitive positive float encoded as string',
  'number primitive positive int',
  'number primitive positive int encoded as string',
  'number primitive zero',
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

  'undefined',
  'void 0',
]

export { all_mock_primitive_keys }
