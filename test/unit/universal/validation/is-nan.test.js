// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isNaN } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isNaN()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isNaN)

  test.passes([
    'nan',
  ])

  test.run()

})
