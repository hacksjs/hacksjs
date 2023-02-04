// @ts-check

import { isBigInt } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

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
