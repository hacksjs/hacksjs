// @ts-check

/**
 * @copyright Hacks Ltd
 * @license   MIT
 */

// URL pattern based on rfc1738 and rfc3986.
// Modified from: https://gist.github.com/jboulhous/6437078

const percent_encoded = '%[\\da-fA-F]{2}'
const dec_octet = '(25[0-5]|2[0-4][\\d]|[0-1][\\d][\\d]|[1-9][\\d]|[\\d])' // 0-255
const ipv4address = '(' + dec_octet + '(\\.' + dec_octet + '){3})'
const hostname = '([a-zA-Z\\d\\-\\u00C0-\\u017F]+\\.)+([a-zA-Z]{2,})'
const port = '[\\d]+'
const chars = "a-zA-Z\\d$\\-_.+!*'(),;:@&="
const path_segment = '([' + chars + ']|' + percent_encoded + ')*'

const WEB_URL_REGEXP = new RegExp(
  '^' +
  '((https?):\\/\\/)?' +                                           // http://          - optional
  "(([a-zA-Z\\d$\\-_.+!*'(),;:&=]|" + percent_encoded + ')+@)?' +  // username@        - optional
  '(' + ipv4address + '|localhost|' + hostname + ')' +             // domain.tld       - required
  '(:' + port + ')?' +                                             // :port            - optional
  '(\\/' +                                                         // /                - required if path, query or fragment
    '(' + path_segment + '(\\/' + path_segment + ')*)?' +          // path/to/resource - optional
    '(\\?' + '([' + chars + '/?]|' + percent_encoded + ')*)?' +    // ?query           - optional
    '(\\#' + '([' + chars + '/?]|' + percent_encoded + ')*)?' +    // #fragment        - optional
  ')?' +
  '$',
)

/**
 * Test for a string that contains what looks to be a valid URL.
 *
 * @param {*} test The value to test.
 * @returns {boolean} `true` if the validation passes, `false` otherwise.
 *
 * @example
 * const test = 'https://example.com/'
 * matchesUriFormat(test) // → true
 */
const matchesUriFormat = (test) => {
  return WEB_URL_REGEXP.test(test)
}

export { matchesUriFormat, WEB_URL_REGEXP }
