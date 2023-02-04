// @ts-check

import { isPlainObject } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isPlainObject()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isPlainObject)

  builder.passes([
    'object constructed with no own properties',
    'object constructed with own property',
    'object literal with no own properties',
    'object literal with own property',
    'object literal with own property with null value',
    'object literal with own property with undefined value',
    'object with own explicit writable property',
    'object with own implicit writable property',
    'object with own non-writable property',
  ])

  builder.run()

})
