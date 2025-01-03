const isAnagram = require('./solution');
const {describe, expect, it} = require('@jest/globals');

describe("Tests for validate anagrams", () => {
  it('anagram and nagaram are anagrams', () => {
    let s = "anagram"
    let t = "nagaram"
    expect(isAnagram(s, t)).toBeTruthy()
  })

  it('rat and car are an anagrams', () => {
    let s = "rat"
    let t = "car"
    expect(isAnagram(s, t)).toBeFalsy()
  })
})