// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isUndefined } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isUndefined()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isUndefined)

  test.passes([
    'undefined',
    'void 0',
  ])

  test.run()

})
