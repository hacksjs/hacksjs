// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isBoolean } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isBoolean()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isBoolean)

  test.passes([
    'boolean object false',
    'boolean object true',
    'boolean primitive false',
    'boolean primitive true',
  ])

  test.run()

})
