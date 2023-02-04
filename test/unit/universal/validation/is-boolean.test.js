// @ts-check

import { isBoolean } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isBoolean()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isBoolean)

  builder.passes([
    'boolean object false',
    'boolean object true',
    'boolean primitive false',
    'boolean primitive true',
  ])

  builder.run()

})
