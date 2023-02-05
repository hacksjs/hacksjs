// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isHTMLForm } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isHTMLForm()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isHTMLForm)

  test.passes([
    'dom element: form',
  ])

  test.run()

})
