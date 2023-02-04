// @ts-check

import { isNull } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isNull()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isNull)

  test.passes([
    'null',
  ])

  test.run()

})
