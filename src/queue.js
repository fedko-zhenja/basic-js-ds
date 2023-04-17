const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor(x) {
        this.headElement = null;
        this.tailElement = null;
      }

  enqueue(value) {
    let node = new ListNode(value);
    if(this.headElement) {
        this.tailElement.next = node;
        this.tailElement = node;
    } else if (!this.headElement){
        this.headElement = node;
        this.tailElement = node;
    }
    this.length++;
  }

  dequeue() {
    let firstElement = this.headElement;
    this.headElement = this.headElement.next;

    return firstElement.value;
  }


  getUnderlyingList() {
    return this.headElement;
  }
}

module.exports = {
  Queue
};
