// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isPlainObject } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isPlainObject()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isPlainObject)

  test.passes([
    'object constructed with no own properties',
    'object constructed with own property',
    'object literal with no own properties',
    'object literal with own property',
    'object literal with own property with null value',
    'object literal with own property with undefined value',
    'object with own explicit writable property',
    'object with own implicit writable property',
    'object with own non-writable property',
  ])

  test.run()

})
