// @ts-check

import { isHTMLForm } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTest } from './__builders__'

describe('isHTMLForm()', () => {

  const test = new ValidationFunctionTest()

  test.fn(isHTMLForm)

  test.passes([
    'dom element: form',
  ])

  test.run()

})
