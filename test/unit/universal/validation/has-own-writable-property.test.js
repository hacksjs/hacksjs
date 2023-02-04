// @ts-check

import { hasOwnWritableProperty } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('hasOwnWritableProperty()', () => {

  const test = new ValidationFunctionTest()

  test.fn((value) => {
    return hasOwnWritableProperty(value, 'mutable')
  })

  test.passes([
    'object with own explicit writable property',
    'object with own implicit writable property',
  ])

  test.run()

})
