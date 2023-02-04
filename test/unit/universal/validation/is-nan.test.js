// @ts-check

import { isNaN } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isNaN()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isNaN)

  builder.passes([
    'nan',
  ])

  builder.run()

})
