// @ts-check

import { isDateInstance } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isDateInstance()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isDateInstance)

  test.passes([
    'date object with current time',
    'date object with far-future time',
    'date object with historic time',
    'date object with invalid value',
  ])

  test.run()

})
