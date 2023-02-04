// @ts-check

import { isRegExp } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isRegExp()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isRegExp)

  builder.passes([
    'regexp constructed',
    'regexp literal',
  ])

  builder.run()

})
