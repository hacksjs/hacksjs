// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isSyncFunction } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isSyncFunction()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isSyncFunction)

  test.passes([
    'function anonymous',
    'function anonymous returning promise',
    'function arrow',
    'function arrow returning promise',
    'function named',
    'function named returning promise',
  ])

  test.run()

})
