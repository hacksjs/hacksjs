// @ts-check

import { isUndefined } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isUndefined()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isUndefined)

  builder.passes([
    'undefined',
    'void 0',
  ])

  builder.run()

})
