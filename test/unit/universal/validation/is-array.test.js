// @ts-check

import { isArray } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isArray()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isArray)

  test.passes([
    'array literal with no elements',
    'array literal with elements',
    'array literal with elements with undefined values',
    'array constructed with elements',
    'array constructed with elements with undefined values',
    'array constructed with no elements',
  ])

  test.run()

})
