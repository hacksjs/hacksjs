// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

import { objectToString, object_tostring_map } from '../objects'

/**
 * Test for a `NodeList` instance.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 */
const isHTMLNodeList = (test) => {
  return (objectToString(test) === object_tostring_map.node_list)
}

const isNodeList = isHTMLNodeList

export { isHTMLNodeList, isNodeList }
