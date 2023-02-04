// @ts-check

import { isAnyPrimitive } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'
import { all_mock_primitive_keys } from './__mocks__/primitives'

describe('isAnyPrimitive()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isAnyPrimitive)

  // The tests that pass for isAnyPrimitive() are expected to be exactly
  // the same as those that fail for isAnyObject(). To enforce this, the
  // tests for each function share the same list of mocks.
  builder.passes(all_mock_primitive_keys)

  builder.run()

})
