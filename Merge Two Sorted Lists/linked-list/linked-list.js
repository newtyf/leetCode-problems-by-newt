class Node {
  constructor(fact, next) {
    this.fact = fact;
    this.next = next;
  }
}

class linkedList  {
  constructor() {
    this.start = null;
    this.size = 0;
  }

  addNode(fact) {

    let newNode = new Node(fact, null)

    if (!this.start) {
      this.start = newNode;
    } else {
      let current = this.start;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;

  }
}

let list = new linkedList();
console.log(list);
list.addNode(10)
list.addNode(5)
console.log(list);