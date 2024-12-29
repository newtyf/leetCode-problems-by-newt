/**
 * @newtyf
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {

    // with brute force
    // let duplicated = false;
    // for (let i = 0; i < nums.length; i++) {
    //     const currentValue = nums[i];
    //     for (let j = 0; j < nums.length; j++) {
    //         if (j == i) continue;
    //         if (currentValue === nums[j]) duplicated = true;
    //     }
    // }
    // return duplicated;

    // using hash tables, more efficient
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
          return true;
        }
        hashMap.set(nums[i])
    }

    return false;
}

module.exports = containsDuplicate