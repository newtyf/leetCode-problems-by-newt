// Search Insert Position

const searchIndex = (nums, target) => {
  let exist = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      exist = true;
      return i;
    }
  }

  if (!exist) {
    nums.push(target);
    nums.sort((a,b) => {
      return a - b;
    });
    for (let index = 0; index < nums.length; index++) {
      if (nums[index] === target) {
        return index;
      }
    }
  }
}

module.exports = {searchIndex};