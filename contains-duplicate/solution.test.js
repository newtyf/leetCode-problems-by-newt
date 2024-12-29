const containsDuplicate = require("./solution");

describe('Determinate if a nums array have duplicateds', () => {
  test('not contains duplicated', () => {

    const nums = [1,2,3,4]

    expect(containsDuplicate(nums)).toBeFalsy();
  });

  test('contains duplicated', () => {

    const nums = [1,2,3,1]

    expect(containsDuplicate(nums)).toBeTruthy();
  });
});