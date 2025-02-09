const topKFrequent = require('./solution');
const {describe, expect, it} = require('@jest/globals');

describe("Tests for get the k most frequent elements", () => {
  it('Input: nums = [1,1,1,2,2,3], k = 2', () => {
    const nums = [1,1,1,2,2,3], k = 2
    expect(topKFrequent(nums, k)).toContainEqual(1,2)
  })

  it('Input: nums = [1], k = 1', () => {
    const nums = [1], k = 1
    expect(topKFrequent(nums, k)).toContainEqual(1)
  })

  it('Input: nums = [4,1,-1,2,-1,2,3], k = 2', () => {
    const nums = [4,1,-1,2,-1,2,3], k = 2
    expect(topKFrequent(nums, k)).toContainEqual(2,-1)
  })
})