// @ts-check

import { isUndefined } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isUndefined()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isUndefined)

  test.passes([
    'undefined',
    'void 0',
  ])

  test.run()

})
