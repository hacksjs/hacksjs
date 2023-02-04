// @ts-check

import { isPromise } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isPromise()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isPromise)

  test.passes([
    'promise',
    'function anonymous async - immediately invoked',
    'function anonymous returning promise - immediately invoked',
    'function arrow async - immediately invoked',
    'function arrow returning promise - immediately invoked',
    'function named async - immediately invoked',
    'function named returning promise - immediately invoked',
  ])

  test.run()

})
