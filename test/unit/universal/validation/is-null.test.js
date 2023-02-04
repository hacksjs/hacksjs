// @ts-check

import { isNull } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isNull()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isNull)

  builder.passes([
    'null',
  ])

  builder.run()

})
