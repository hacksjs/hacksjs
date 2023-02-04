// @ts-check

import { isArray } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isArray()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isArray)

  builder.passes([
    'array literal with no elements',
    'array literal with elements',
    'array literal with elements with undefined values',
    'array constructed with elements',
    'array constructed with elements with undefined values',
    'array constructed with no elements',
  ])

  builder.run()

})
