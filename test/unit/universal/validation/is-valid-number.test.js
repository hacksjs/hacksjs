// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'
import { all_test_numbers } from './includes/all-test-numbers'

// Component under test
import { isValidNumber } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isValidNumber()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isValidNumber)

  // The list of tests expected to pass for `isValidNumber()` should
  // be identical to `isNumber()`, except the "nan" test should fail.
  test.passes(all_test_numbers)

  test.run()

})
