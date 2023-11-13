const {addTwoNumbers} = require("./solution")

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test("merged and sorted two listnode with nodes", () => {
  const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

  let addedList = addTwoNumbers(list1, list2);

  let adderLinkedList = [];
  let ref = addedList;
  while (ref !== null) {
    adderLinkedList.push(ref.val)
    ref = ref.next;
  }

  expect(adderLinkedList).toEqual([7,0,8]);
});
