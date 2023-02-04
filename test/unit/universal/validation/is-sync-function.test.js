// @ts-check

import { isSyncFunction } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isSyncFunction()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isSyncFunction)

  builder.passes([
    'function anonymous',
    'function anonymous returning promise',
    'function arrow',
    'function arrow returning promise',
    'function named',
    'function named returning promise',
  ])

  builder.run()

})
