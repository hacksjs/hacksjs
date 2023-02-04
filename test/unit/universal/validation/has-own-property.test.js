// @ts-check

import { hasOwnProperty } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('hasOwnProperty()', () => {

  const test = new ValidationFunctionTest()

  test.fn((value) => {
    return hasOwnProperty(value, 'prop')
  })

  test.passes([
    'object constructed with own property',
    'object literal with own property',
    'object literal with own property with null value',
    'object literal with own property with undefined value',
  ])

  test.run()

})
