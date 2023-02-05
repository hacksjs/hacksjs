// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'
import { all_test_numbers } from './includes/all-test-numbers'

// Component under test
import { isNumber } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isNumber()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isNumber)

  // The list of tests expected to pass for `isNumber()` should
  // be identical to `isValidNumber()`, except with the addition
  // of the "nan" test, which should pass.

  const all_mock_number_keys = all_test_numbers.slice()
  all_mock_number_keys.push('nan')

  test.passes(all_mock_number_keys)

  test.run()

})
