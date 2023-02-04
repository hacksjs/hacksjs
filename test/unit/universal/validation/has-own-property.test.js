// @ts-check

import { hasOwnProperty } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('hasOwnProperty()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn((value) => {
    return hasOwnProperty(value, 'prop')
  })

  builder.passes([
    'object constructed with own property',
    'object literal with own property',
    'object literal with own property with null value',
    'object literal with own property with undefined value',
  ])

  builder.run()

})
