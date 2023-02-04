// @ts-check

import { isRegExp } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isRegExp()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isRegExp)

  test.passes([
    'regexp constructed',
    'regexp literal',
  ])

  test.run()

})
