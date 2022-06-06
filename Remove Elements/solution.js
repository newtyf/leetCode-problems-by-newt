let input = [3, 2, 2, 3];

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(removeElement(input, 2));
