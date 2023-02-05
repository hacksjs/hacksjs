// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'
import { all_test_primitives } from './includes/all-test-primitives'

// Component under test
import { isAnyPrimitive } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isAnyPrimitive()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isAnyPrimitive)

  // The tests that pass for isAnyPrimitive() are expected to be exactly
  // the same as those that fail for isAnyObject(). To enforce this, the
  // tests for each function share the same list of mocks.
  test.passes(all_test_primitives)

  test.run()

})
