// @ts-check

// Test framework
import { describe } from '../../../includes/test-framework'

// Test builder for validation functions
import { ValidationFunctionTest } from './includes/validate-function-test'

// Component under test
import { isBigInt } from '../../../../src/@hacksjs/universal/lib/validation'

describe('isBigInt()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isBigInt)

  test.passes([
    'bigint literal',
    'bigint literal octal',
    'bigint literal hexadecimal',
    'bigint literal binary',
    'bigint factory',
    'bigint factory octal',
    'bigint factory hexadecimal',
    'bigint factory binary',
  ])

  test.run()

})
