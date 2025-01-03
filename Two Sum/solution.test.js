const twoSum = require('./solution');
const {describe, expect, it} = require('@jest/globals');

describe("Tests for get the indices of the two numbers such that they add up to target", () => {
  it('the split of the nums that sum 9 is [0,1]', () => {
    const nums = [2,7,11,15], target = 9
    expect(twoSum(nums, target)).toEqual([0,1])
  })

  it('the split of the nums that sum 6 is [1,2]', () => {
    const nums = [3,2,4], target = 6
    expect(twoSum(nums, target)).toEqual([1,2])
  })

  it('the split of the nums that sum 6 is [0,1]', () => {
    const nums = [3,3], target = 6
    expect(twoSum(nums, target)).toEqual([0,1])
  })

  it('the split of the nums that sum 6 is [0,2]', () => {
    const nums = [3,2,3], target = 6
    expect(twoSum(nums, target)).toEqual([0,2])
  })

  it('the split of the nums that sum -8 is [0,2]', () => {
    const nums = [-1,-2,-3,-4,-5], target = -8
    expect(twoSum(nums, target)).toEqual([2,4])
  })
})