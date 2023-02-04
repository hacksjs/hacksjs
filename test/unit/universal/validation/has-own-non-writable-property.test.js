// @ts-check

import { hasOwnNonWritableProperty, hasOwnImmutableProperty } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('hasOwnWritableProperty()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn((value) => {
    return hasOwnNonWritableProperty(value, 'immutable')
  })

  builder.passes([
    'object with own non-writable property',
  ])

  builder.run()

})

describe('hasOwnImmutableProperty() - alias', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn((value) => {
    return hasOwnImmutableProperty(value, 'immutable')
  })

  builder.passes([
    'object with own non-writable property',
  ])

  builder.run()

})
