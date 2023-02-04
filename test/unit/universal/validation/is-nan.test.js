// @ts-check

import { isNaN } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isNaN()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isNaN)

  test.passes([
    'nan',
  ])

  test.run()

})
