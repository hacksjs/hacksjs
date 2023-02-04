// @ts-check

import { isFunction } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isFunction()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isFunction)

  builder.passes([
    'function anonymous',
    'function anonymous async',
    'function anonymous returning promise',
    'function arrow',
    'function arrow async',
    'function arrow returning promise',
    'function named',
    'function named async',
    'function named returning promise',
  ])

  builder.run()

})
