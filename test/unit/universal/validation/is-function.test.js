// @ts-check

import { isFunction } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isFunction()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isFunction)

  test.passes([
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

  test.run()

})
