// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'
import { all_test_primitives } from './includes/all-test-primitives'

// Component under test
import { isAnyObject } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isAnyObject()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isAnyObject)

  // The tests that fail for isAnyObject() are expected to be exactly
  // the same as those that pass for isAnyPrimitive(). To enforce this, the
  // tests for each function share the same list of mocks.
  test.fails(all_test_primitives)

  test.run()

})
