const groupAnagrams = require('./solution');
const {describe, expect, it} = require('@jest/globals');

describe("Tests for validate that the anagrams are grouped", () => {
  it('["eat","tea","tan","ate","nat","bat"] was grouped correctly', () => {
    let strs = ["eat","tea","tan","ate","nat","bat"]

    expect(groupAnagrams(strs)).toContainEqual(["bat"],["nat","tan"],["ate","eat","tea"])
  })

  it('[""] was grouped correctly', () => {
    let strs = [""]

    expect(groupAnagrams(strs)).toContainEqual([""])
  })

  it('["ate", "nat", "ate", "nat"] was grouped correctly', () => {
    let strs = ["ate", "nat", "ate", "nat"]

    expect(groupAnagrams(strs)).toContainEqual(["nat", "nat"], ["ate", "ate"])
  })

  it('["ddddddddddg","dgggggggggg"] was grouped correctly', () => {
    let strs = ["ddddddddddg","dgggggggggg"]

    expect(groupAnagrams(strs)).toContainEqual(["dgggggggggg"],["ddddddddddg"])
  })
})