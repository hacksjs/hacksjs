// @ts-check

import { isBigInt } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isBigInt()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isBigInt)

  builder.passes([
    'bigint literal',
    'bigint literal octal',
    'bigint literal hexadecimal',
    'bigint literal binary',
    'bigint factory',
    'bigint factory octal',
    'bigint factory hexadecimal',
    'bigint factory binary',
  ])

  builder.run()

})
