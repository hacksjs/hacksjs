// @ts-check

import { isDateInstance } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isDateInstance()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isDateInstance)

  builder.passes([
    'date object with current time',
    'date object with far-future time',
    'date object with historic time',
    'date object with invalid value',
  ])

  builder.run()

})
