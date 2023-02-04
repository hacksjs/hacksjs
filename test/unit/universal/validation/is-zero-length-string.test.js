// @ts-check

import { isZeroLengthString } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isZeroLengthString()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isZeroLengthString)

  // This test is expected to fail for a string value containing only "non-space
  // blank" characters, such as the zero-width non-breaking space (U+FEFF).
  // Although such a text string would be rendered as blank and look like it is
  // of zero length, it would in fact contain characters.

  builder.passes([
    'string literal of zero length',
    'string object of zero length',
  ])

  builder.run()

})
