/**
 * @newtyf
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  const h = haystack.split(needle)

  return h.length === 1 ? -1 : h[0].length;
}

module.exports = strStr