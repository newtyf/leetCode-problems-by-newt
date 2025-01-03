/**
 * @newtyf
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {

  if (s.length !== t.length) {
    return false;
  }

  const firstHash = new Map();
  const secondHash = new Map();
  for (let index = 0; index < s.length; index++) {
    const elementS = s[index];
    const elementT = t[index];
    firstHash.set(elementS, firstHash.get(elementS) ? firstHash.get(elementS) + 1 : 1)
    secondHash.set(elementT, secondHash.get(elementT) ? secondHash.get(elementT) + 1 : 1)
  }

  let IsAnagram = true;
  firstHash.forEach((_, key) => {
    if (firstHash.get(key) !== secondHash.get(key)) IsAnagram = false;
  })
  return IsAnagram

};

module.exports = isAnagram