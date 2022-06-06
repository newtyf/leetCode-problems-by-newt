let input = [1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,333,444]

const removeDuplicates = (nums) => {

  for (let index = 0; index < nums.length; index++) {
    let current = nums[index];
    let prev = nums[index - 1];

    if (current === prev) {
      nums.splice(index, 1);
      index--
    }

  }

  return nums.length;
}
// the returt value is the length of the array after remove duplicated
const a = removeDuplicates(input)
console.log(a);