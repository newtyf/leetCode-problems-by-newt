/**
 * @newtyf
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = new Map()

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    let difference = target - element;

    if (hash.has(difference)) return [hash.get(difference), index];
    hash.set(element, index);
  }
};

module.exports = twoSum