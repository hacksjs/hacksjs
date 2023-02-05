// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isValidDateInstance } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isValidDateInstance()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isValidDateInstance)

  test.passes([
    'date object with current time',
    'date object with far-future time',
    'date object with historic time',
  ])

  test.run()

})
