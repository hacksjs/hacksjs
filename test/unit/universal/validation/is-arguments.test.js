// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isArguments } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isArguments()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isArguments)

  test.passes([
    'arguments built-in variable',
  ])

  test.run()

})
