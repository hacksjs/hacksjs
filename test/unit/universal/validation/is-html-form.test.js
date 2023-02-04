// @ts-check

import { isHTMLForm } from '../../../../src/@hacksjs/universal/lib/validation'
import { ValidationFunctionTestBuilder } from './__builders__'

describe('isHTMLForm()', () => {

  const builder = new ValidationFunctionTestBuilder()

  builder.fn(isHTMLForm)

  builder.passes([
    'dom element: form',
  ])

  builder.run()

})
