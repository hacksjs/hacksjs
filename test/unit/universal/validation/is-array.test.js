// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isArray } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isArray()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isArray)

  test.passes([
    'array literal with no elements',
    'array literal with elements',
    'array literal with elements with undefined values',
    'array constructed with elements',
    'array constructed with elements with undefined values',
    'array constructed with no elements',
  ])

  test.run()

})
