// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isBlankText } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isBlankText()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isBlankText)

  // Notes
  //
  // This test is expected to fail for the "soft hyphen" character. Also
  // known as or discretionary hyphen or optional hyphen, this is an invisible
  // marker that typesetters may sometimes swap for a visible hyphen character
  // for the purpose of word-wrapping. As such, the soft hyphen is considered
  // to be a non-whitespace character.
  //
  // This test is also expected to fail for some control (aka non-printing)
  // characters such as the "null" character (U+0000), presumably because they
  // tend to be rendered with a substitute character. Formatting characters
  // such as LF and CR, though inherited from the original family of control
  // characters, do pass as blank/whitespace characters, however.

  test.passes([
    'string literal of zero length',
    'string literal with three space characters',
    'string literal with "en space" character',
    'string literal with "en space" character - unicode encoded',
    'string literal with "line feed" character - escaped',
    'string literal with "line feed" character - unicode encoded',
    'string literal with "narrow no-break space" character',
    'string literal with "narrow no-break space" character - unicode encoded',
    'string literal with "zero-width non-breaking space" character',
    'string literal with "zero-width non-breaking space" character - unicode encoded',
    'string object of zero length',
    'string object with three space characters',
    'string object with "en space" character',
    'string object with "en space" character - unicode encoded',
    'string object with "line feed" character - escaped',
    'string object with "line feed" character - unicode encoded',
    'string object with "narrow no-break space" character',
    'string object with "narrow no-break space" character - unicode encoded',
    'string object with "zero-width non-breaking space" character',
    'string object with "zero-width non-breaking space" character - unicode encoded',
  ])

  test.run()

})
