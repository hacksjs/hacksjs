// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isAsyncFunction } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isAsyncFunction()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isAsyncFunction)

  test.passes([
    'function anonymous async',
    'function arrow async',
    'function named async',
  ])

  test.run()

})
