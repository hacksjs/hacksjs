// @ts-check

import { isValidNumber } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'
import { all_mock_valid_number_keys } from './__mocks__/numbers'

describe('isValidNumber()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isValidNumber)

  // The list of tests expected to pass for `isValidNumber()` should
  // be identical to `isNumber()`, except the "nan" test should fail.
  builder.passes(all_mock_valid_number_keys)

  builder.run()

})
