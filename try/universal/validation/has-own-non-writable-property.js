// @ts-check

import { hasOwnNonWritableProperty } from '../../../src/@hacksjs/universal/lib/validation'

const test1 = {}
Object.defineProperty(test1, 'immutable', {
  value: 1,
  writable: false,
  enumerable: false
})

console.log(hasOwnNonWritableProperty(test1, 'immutable')) // → true

const test2 = {}
Object.defineProperty(test2, 'immutable', {
  value: 1,
  writable: true,
  enumerable: false
})

console.log(hasOwnNonWritableProperty(test2, 'immutable')) // → false
