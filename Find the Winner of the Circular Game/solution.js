const Queue = require("./queue/queue");

/**
 * @newtyf
 * @param {string} n
 * @param {string} k
 * @return {number}
 */
function FindTheWinner(n, k) {
  let friends = new Queue();

  for(i = 0; i < n; i++) {
    friends.enqueue(i + 1);
  }

  while (friends.size() > 1) {
    for(i = 0; i < k - 1; i++) {
      first = friends.front();
      friends.dequeue();
      friends.enqueue(first);
    }
    friends.dequeue();
  }
  return friends.front();
}

module.exports = FindTheWinner

