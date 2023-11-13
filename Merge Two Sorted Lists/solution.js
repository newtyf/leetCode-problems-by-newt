/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {

  if (list1 === null) {
      return list2
  }

  if (list2 === null) {
      return list1
  }

  let current1 = list1;

  while (current1.next != null) {
      current1 = current1.next;
  }

  current1.next = list2;

  let swapped = false;
  do {
      swapped = false;
      let current = list1;

      while (current.next != null) {
          if (current.val > current.next.val) {
              let tmp = current.next.val;
              current.next.val = current.val;
              current.val = tmp;
              swapped = true;
          }
          current = current.next;
      }
  } while (swapped);

  return list1;
};

module.exports = { mergeTwoLists };