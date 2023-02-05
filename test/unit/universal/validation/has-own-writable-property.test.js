// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { hasOwnWritableProperty } from '../../../../src/@hacksjs/universal/lib/validation'

describe('hasOwnWritableProperty()', () => {

  const test = new ValidationFunctionTest()

  test.fn((value) => {
    return hasOwnWritableProperty(value, 'mutable')
  })

  test.passes([
    'object with own explicit writable property',
    'object with own implicit writable property',
  ])

  test.run()

})
