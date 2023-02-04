// @ts-check

import { isValidDateInstance } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isValidDateInstance()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isValidDateInstance)

  test.passes([
    'date object with current time',
    'date object with far-future time',
    'date object with historic time',
  ])

  test.run()

})
