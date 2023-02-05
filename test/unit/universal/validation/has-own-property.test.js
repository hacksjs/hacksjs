// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { hasOwnProperty } from '../../../../src/@hacksjs/universal/lib/validation'

describe('hasOwnProperty()', () => {

  const test = new ValidationFunctionTest()

  test.fn((value) => {
    return hasOwnProperty(value, 'prop')
  })

  test.passes([
    'object constructed with own property',
    'object literal with own property',
    'object literal with own property with null value',
    'object literal with own property with undefined value',
  ])

  test.run()

})
