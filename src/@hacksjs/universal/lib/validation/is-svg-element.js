// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

/**
 * Checks if a given object is a DOM node that represents an SVG tag, or part of
 * an SVG graphic.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * isSvgElement('<svg>...</svg>') // → false
 */
const isSvgElement = (test) => {
  const owner = test.ownerSVGElement
  return !!owner || owner === null
}

export { isSvgElement }
