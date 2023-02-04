// @ts-check

import { isBoolean } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isBoolean()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isBoolean)

  test.passes([
    'boolean object false',
    'boolean object true',
    'boolean primitive false',
    'boolean primitive true',
  ])

  test.run()

})
