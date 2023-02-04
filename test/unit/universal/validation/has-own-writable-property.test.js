// @ts-check

import { hasOwnWritableProperty } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('hasOwnWritableProperty()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn((value) => {
    return hasOwnWritableProperty(value, 'mutable')
  })

  builder.passes([
    'object with own explicit writable property',
    'object with own implicit writable property',
  ])

  builder.run()

})
