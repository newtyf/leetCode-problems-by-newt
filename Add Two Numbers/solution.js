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
  let refNodeOne = l1;
  let refNodeTwo = l2;

  let newList = null;
  let refList = newList;

  let carr = 0;

  while (refNodeOne !== null || refNodeTwo !== null) {
    let result = 0;
    if (refNodeOne === null && refNodeTwo !== null) {
      result = 0 + refNodeTwo.val + carr;
      if (result >= 10) {
        result -= 10;
        carr = 1;
      } else {
        carr = 0;
      }
      refNodeOne = refNodeOne;
      refNodeTwo = refNodeTwo.next;
    } else if (refNodeOne !== null && refNodeTwo === null) {
      result = refNodeOne.val + 0 + carr;
      if (result >= 10) {
        result -= 10;
        carr = 1;
      } else {
        carr = 0;
      }
      refNodeOne = refNodeOne.next;
      refNodeTwo = refNodeTwo;
    } else {
      result = refNodeOne.val + refNodeTwo.val + carr;
      if (result >= 10) {
        result -= 10;
        carr = 1;
      } else {
        carr = 0;
      }
      refNodeOne = refNodeOne.next;
      refNodeTwo = refNodeTwo.next;
    }

    if (newList === null) {
      newList = new ListNode(result);
      refList = newList
    } else {
      while (refList.next != null) {
        refList = refList.next;
      }
      refList.next = new ListNode(result);
    }

    if (refNodeOne === null && refNodeTwo === null && carr != 0) {
      while (refList.next != null) {
        refList = refList.next;
      }
      refList.next = new ListNode(carr);
    }

    refList = newList;
  }

  return newList;
};

module.exports = { addTwoNumbers };