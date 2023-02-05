// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isRegExp } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isRegExp()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isRegExp)

  test.passes([
    'regexp constructed',
    'regexp literal',
  ])

  test.run()

})
