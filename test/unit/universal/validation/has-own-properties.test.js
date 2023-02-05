// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { hasOwnProperties } from '../../../../src/@hacksjs/universal/lib/validation'

describe('hasOwnProperties()', () => {

  const test = new ValidationFunctionTest()

  test.fn(hasOwnProperties)

  test.passes([
    // Arrays will have own properties matching the available
    // indexes: 0, 1, 2, 3, etc.
    'array literal with elements',
    'array literal with elements with undefined values',
    'array constructed with elements',
    'array constructed with elements with undefined values',

    'object constructed with own property',
    'object literal with own property',
    'object literal with own property with null value',
    'object literal with own property with undefined value',
    'object with own implicit writable property',

    'string object with visible characters',
    'string object with three space characters',
    'string object with "en space" character',
    'string object with "en space" character - unicode encoded',
    'string object with "line feed" character - escaped',
    'string object with "line feed" character - unicode encoded',
    'string object with "narrow no-break space" character',
    'string object with "narrow no-break space" character - unicode encoded',
    'string object with "null" control character - unicode encoded',
    'string object with "soft hyphen" character',
    'string object with "soft hyphen" character - unicode encoded',
    'string object with "zero-width non-breaking space" character',
    'string object with "zero-width non-breaking space" character - unicode encoded',

    'typed array from another typed array',
    'typed array from array',
    'typed array from array buffer',
    'typed array from length',
    'typed array from iterator object',
  ])

  test.run()

})
