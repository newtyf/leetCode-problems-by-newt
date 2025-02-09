/**
 * @newtyf
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Time complexity O(k * n) => O(n^2)
// var topKFrequent = function(nums, k) {
//   const hashMap = new Map();

//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];

//     if (hashMap.has(element)) {
//       hashMap.set(element, hashMap.get(element) + 1);
//     } else {
//       hashMap.set(element, 1);
//     }
//   }

//   if (hashMap.size === k) {
//     return [...hashMap.keys()]
//   }

//   let topFrequentValues = [];
//   for (let index = 0; index < k; index++) {
//     let maxValue = 0;
//     let moreFrequent = null;
//     for (const key of hashMap.keys()) {
//       if (hashMap.get(key) > maxValue) {
//         moreFrequent = key;
//         maxValue = hashMap.get(key);
//       }
//     }
//     topFrequentValues.push(moreFrequent);
//     hashMap.delete(moreFrequent)
//   }

//   return topFrequentValues;

// };

// Time complexity O(n * log n)
// var topKFrequent = function(nums, k) {
//   let hashMap = new Object;

//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];

//     if (hashMap[element]) {
//       hashMap[element] = hashMap[element] + 1;
//     } else {
//       hashMap[element] = 1;
//     }
//   }

//   let array = Object.entries(hashMap);
//   array.sort((a, b) =>  b[1] - a[1])
//   let topFrequentValues = [];
//   for (let index = 0; index < k; index++) {
//     const element = array[index][0];
//     topFrequentValues.push(Number(element))
//   }

//   return topFrequentValues;
// };

// Solution with buckets
var topKFrequent = function(nums, k) {
  let hashMap = new Object;

  // use array fill with arrays, fill the array with the same reference,
  // so when i push in one element of the array all elmenets will be pushed with the value,
  //  because share the same reference
  let bucketList = new Array(nums.length + 1).fill([]);

  // count elements
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (hashMap[element]) {
      hashMap[element] = hashMap[element] + 1;
    } else {
      hashMap[element] = 1;
    }
  }

  // set elementos into index that match their count
  // 0, 1, 2, 3, 4, 5
  // [ [], [ 3 ], [ 2 ], [ 1 ], [], [] ]
  Object.entries(hashMap).forEach(([n,c]) => {
    bucketList[c] = bucketList[c].concat(Number(n))
  });


  let topFrequentValues = []
  for (let i = bucketList.length - 1; i > 0; i--) {
    const bucket = bucketList[i];
    for (let j = 0; j < bucket.length; j++) {
      const element = bucket[j];
      topFrequentValues.push(element)
      if (topFrequentValues.length === k) {
        return topFrequentValues;
      }
    }
  }

};

module.exports = topKFrequent