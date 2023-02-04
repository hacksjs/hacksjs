// @ts-check

import { isAsyncFunction } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isAsyncFunction()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isAsyncFunction)

  test.passes([
    'function anonymous async',
    'function arrow async',
    'function named async',
  ])

  test.run()

})
