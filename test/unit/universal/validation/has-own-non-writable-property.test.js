// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { hasOwnNonWritableProperty, hasOwnImmutableProperty } from '../../../../src/@hacksjs/universal/lib/validation'

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

describe('hasOwnImmutableProperty()', () => {

  const test = new ValidationFunctionTest()

  test.fn((value) => {
    return hasOwnImmutableProperty(value, 'immutable')
  })

  test.passes([
    'object with own non-writable property',
  ])

  test.run()

})
