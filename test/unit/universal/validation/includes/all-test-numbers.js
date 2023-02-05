// @ts-check

// These are the keys to the test values that are expected
// to pass the isValidNumber() test. They are defined here because
// they are shared with the isNumber() test suite — which only adds
// the check for NaN (an invalid number).
//
const all_test_numbers = [
  'number literal binary',
  'number literal exponential',
  'number literal exponential with decimal',
  'number literal hexadecimal',
  'number literal max value',
  'number literal min value',
  'number literal octal',
  'number object empty',
  'number object negative float',
  'number object negative int',
  'number object positive float',
  'number object positive int',
  'number object zero',
  'number primitive negative float',
  'number primitive negative int',
  'number primitive positive float',
  'number primitive positive int',
  'number primitive zero',
]

export { all_test_numbers }
