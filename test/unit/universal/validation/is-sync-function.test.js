// @ts-check

import { isSyncFunction } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isSyncFunction()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isSyncFunction)

  test.passes([
    'function anonymous',
    'function anonymous returning promise',
    'function arrow',
    'function arrow returning promise',
    'function named',
    'function named returning promise',
  ])

  test.run()

})
