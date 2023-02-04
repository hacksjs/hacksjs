// @ts-check

import { isNumber } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'
import { all_mock_valid_number_keys } from './__mocks__/numbers'

describe('isNumber()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isNumber)

  // The list of tests expected to pass for `isNumber()` should
  // be identical to `isValidNumber()`, except with the addition
  // of the "nan" test, which should pass.

  const all_mock_number_keys = all_mock_valid_number_keys.slice()
  all_mock_number_keys.push('nan')

  test.passes(all_mock_number_keys)

  test.run()

})
