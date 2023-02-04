// @ts-check

import { isValidNumber } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'
import { all_mock_valid_number_keys } from './__mocks__/numbers'

describe('isValidNumber()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isValidNumber)

  // The list of tests expected to pass for `isValidNumber()` should
  // be identical to `isNumber()`, except the "nan" test should fail.
  test.passes(all_mock_valid_number_keys)

  test.run()

})
