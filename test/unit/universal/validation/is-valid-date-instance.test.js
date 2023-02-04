// @ts-check

import { isValidDateInstance } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isValidDateInstance()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isValidDateInstance)

  builder.passes([
    'date object with current time',
    'date object with far-future time',
    'date object with historic time',
  ])

  builder.run()

})
