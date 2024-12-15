/**
 * @newtyf
 * @param {string} s
 * define the a,b and c characters string
 * @return {number}
 * the number of susbstrings where have at least one ocurrence of a, b, and c
 */
const numberOfSubstrings = (s) => {

  let abc = [-1, -1, -1];
  let count = 0

  // iterate into the string
  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    // the indexs of the minimal ss that approve the condition of a,b,c
    switch (element) {
      case 'a':
        abc[0] = index
        break;
      case 'b':
        abc[1] = index
        break;
      case 'c':
        abc[2] = index
        break;
      default:
        break;
    }

    // if a,b and c have the an index more than -1, we have a valid minmal ss so if thats
    // true we can capture the minnumal index and plus one to determine the quanitty rest of ss in reverse what pass the condition
    if (abc[0] > -1 && abc[1] > -1 && abc[2] > -1) {
      count += Math.min(...abc) + 1
    }

  }

  return count;

};

// This is my first solution with brute force, but is very slow and its not optimal
const numberOfSubstringsWithBruteForce = (s) => {
  let countOfSS = 0;

  // it variable is for set the initial point for slice the string
  let pivot = 0;

  // it variable is for set the length of the slice because i want to ss with minimun 3 of length like: 'abc',   'abca',  'abcab', 'abcabc',
  let end = 3;

  let checked = false

  // while the initial point is not more the length of the s minus 3 for have at lest three elements in the ss
  while (pivot <= s.length - 3) {

    // validate if end is not more the size of the s,  if the end is more than size of the s we increase the pivot and reset the end to 3 sum the pivot
    if (end <= s.length && !checked) {
      const ss = s.slice(pivot, end);

      // validate if the ss iclude a,b and c
      if (checked === false) {
        if (ss.includes("a") && ss.includes("b") && ss.includes("c")) {
          checked = true
          countOfSS += 1 + s.length - end
        }
      }
      end += 1;
    } else {
      pivot += 1;
      end = 3 + pivot;
      checked = false
    }
  }

  return countOfSS
};

module.exports = numberOfSubstrings;
