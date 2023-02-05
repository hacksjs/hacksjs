// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isFunction } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isFunction()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isFunction)

  test.passes([
    'function anonymous',
    'function anonymous async',
    'function anonymous returning promise',
    'function arrow',
    'function arrow async',
    'function arrow returning promise',
    'function named',
    'function named async',
    'function named returning promise',
  ])

  test.run()

})
