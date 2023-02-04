// @ts-check

import { isPromise } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isPromise()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isPromise)

  builder.passes([
    'promise',
    'function anonymous async - immediately invoked',
    'function anonymous returning promise - immediately invoked',
    'function arrow async - immediately invoked',
    'function arrow returning promise - immediately invoked',
    'function named async - immediately invoked',
    'function named returning promise - immediately invoked',
  ])

  builder.run()

})
