// @ts-check

import { isAsyncFunction } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isAsyncFunction()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isAsyncFunction)

  builder.passes([
    'function anonymous async',
    'function arrow async',
    'function named async',
  ])

  builder.run()

})
