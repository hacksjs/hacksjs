// @ts-check

import { isAnyObject } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'
import { all_mock_primitive_keys } from './__mocks__/primitives'

describe('isAnyObject()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isAnyObject)

  // The tests that fail for isAnyObject() are expected to be exactly
  // the same as those that pass for isAnyPrimitive(). To enforce this, the
  // tests for each function share the same list of mocks.
  builder.fails(all_mock_primitive_keys)

  builder.run()

})
