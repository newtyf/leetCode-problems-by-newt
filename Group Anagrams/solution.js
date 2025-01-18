//? TIme limited exceed solution, with brute force solution
/* const isAnagram = (s, t) => {

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

* @newtyf
* @param {string[]} strs ["eat","tea","tan","ate","nat","bat"]
* @return {string[][]}
const groupAnagrams = (strs) => {
  let groupedAnagrams = []
  for (let index = 0; index < strs.length; index++) {
    const pivotWord = strs[index];
    let temp = []
    temp.push(pivotWord)
    for (let j = 0; j < strs.length; j++) {
      const word = strs[j];
      if (j !== index && isAnagram(word, pivotWord)) {
        temp.push(word)
        strs.splice(j, 1)
        j--;
      }
    }
    groupedAnagrams.push(temp)
  }

  return groupedAnagrams;
}; */

/**
 * @newtyf
 * @param {string[]} strs ["eat","tea","tan","ate","nat","bat"]
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  let groupedAnagrams = {}
  for (let i = 0; i < strs.length; i++) {
    const element = strs[i];
    let repeatedKey = new Array(26).fill(0);

    for (let j = 0; j < element.length; j++) {
      const index = element.charCodeAt(j) - 97;
      repeatedKey[index] ++;
    }

    if (!groupedAnagrams[repeatedKey]) {
      groupedAnagrams[repeatedKey] = [];
    }
    groupedAnagrams[repeatedKey].push(element);
  }

  return Object.values(groupedAnagrams)
};

module.exports = groupAnagrams

