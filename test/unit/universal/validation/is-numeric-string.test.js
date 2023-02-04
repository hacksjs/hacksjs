// @ts-check

import { isNumericString } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isNumericString()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isNumericString)

  test.passes([
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
  ])

  test.run()

  //   test('return false for "99,999"', () => {
  //     const test = '99,999'
  //     const actual = isNumericString(test)

  //     expect(actual).toBe(expected)
  //   })

  //   test('return false for "[1]"', () => {
  //     const test = '[1]'
  //     const actual = isNumericString(test)

  //     expect(actual).toBe(expected)
  //   })

})
