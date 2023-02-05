// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isNull } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isNull()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isNull)

  test.passes([
    'null',
  ])

  test.run()

})
