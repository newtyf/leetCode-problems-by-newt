function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let refNodeOne = l1
  let refNodeTwo = l2
  let numberOne = ""
  let numberTwo = ""

  while (refNodeOne != null) {
    numberOne+=refNodeOne.val;
    refNodeOne = refNodeOne.next
  }

  while (refNodeTwo != null) {
    numberTwo+=refNodeTwo.val;
    refNodeTwo = refNodeTwo.next
  }

  let sum = (BigInt(numberOne.split("").reverse().join("")) + BigInt(numberTwo.split("").reverse().join(""))).toString().split("").map(v => parseInt(v))

  console.log(sum)

  let newList = new ListNode(sum.pop())
  let refList = newList

  while (refList != null) {
    if (sum.length !== 0) {
      refList.next = new ListNode(sum.pop())
    }
    refList = refList.next
  }

  return newList
};

module.exports = {addTwoNumbers}


let plus = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(9))),new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9)))))

let ref = plus;
  while (ref !== null) {
    console.log(ref.val)
    ref = ref.next;
  }