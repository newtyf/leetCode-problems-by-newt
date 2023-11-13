const {mergeTwoLists} = require("./solution")

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

test("merged and sorted two listnode with nodes", () => {
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  let mergedLists = mergeTwoLists(list1, list2);

  let mergedSortedLinkedList = [];
  let ref = mergedLists;
  while (ref !== null) {
    mergedSortedLinkedList.push(ref.val)
    ref = ref.next;
  }

  expect(mergedSortedLinkedList).toEqual([1,1,2,3,4,4]);
});

test("merged and sorted one listnode with nodes with other with 0 nodes", () => {
  const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const list2 = null

  let mergedLists = mergeTwoLists(list1, list2);

  let mergedSortedLinkedList = [];
  let ref = mergedLists;
  while (ref !== null) {
    mergedSortedLinkedList.push(ref.val)
    ref = ref.next;
  }

  expect(mergedSortedLinkedList).toEqual([1,2,4]);
});

test("merged and sorted two listnode with 0 nodes", () => {
  const list1 = null;
  const list2 = null

  let mergedLists = mergeTwoLists(list1, list2);

  let mergedSortedLinkedList = [];
  let ref = mergedLists;
  while (ref !== null) {
    mergedSortedLinkedList.push(ref.val)
    ref = ref.next;
  }

  expect(mergedSortedLinkedList).toEqual([]);
});