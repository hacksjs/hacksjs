// @ts-check

import { isArguments } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isArguments()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isArguments)

  test.passes([
    'arguments built-in variable',
  ])

  test.run()

})
