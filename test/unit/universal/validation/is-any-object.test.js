// @ts-check

import { isAnyObject } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'
import { all_mock_primitive_keys } from './__mocks__/primitives'

describe('isAnyObject()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isAnyObject)

  // The tests that fail for isAnyObject() are expected to be exactly
  // the same as those that pass for isAnyPrimitive(). To enforce this, the
  // tests for each function share the same list of mocks.
  test.fails(all_mock_primitive_keys)

  test.run()

})
