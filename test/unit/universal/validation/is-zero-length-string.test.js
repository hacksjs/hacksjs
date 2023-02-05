// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isZeroLengthString } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isZeroLengthString()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isZeroLengthString)

  // This test is expected to fail for a string value containing only "non-space
  // blank" characters, such as the zero-width non-breaking space (U+FEFF).
  // Although such a text string would be rendered as blank and look like it is
  // of zero length, it would in fact contain characters.

  test.passes([
    'string literal of zero length',
    'string object of zero length',
  ])

  test.run()

})
