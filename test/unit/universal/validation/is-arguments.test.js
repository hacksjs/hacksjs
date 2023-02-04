// @ts-check

import { isArguments } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isArguments()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isArguments)

  builder.passes([
    'arguments built-in variable',
  ])

  builder.run()

})
