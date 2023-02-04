// @ts-check

import { hasOwnNonWritableProperty, hasOwnImmutableProperty } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('hasOwnWritableProperty()', () => {

  const test = new ValidationFunctionTest()

  test.fn((value) => {
    return hasOwnNonWritableProperty(value, 'immutable')
  })

  test.passes([
    'object with own non-writable property',
  ])

  test.run()

})

describe('hasOwnImmutableProperty() - alias', () => {

  const test = new ValidationFunctionTest()

  test.fn((value) => {
    return hasOwnImmutableProperty(value, 'immutable')
  })

  test.passes([
    'object with own non-writable property',
  ])

  test.run()

})
