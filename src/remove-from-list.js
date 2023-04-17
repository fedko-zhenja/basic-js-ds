const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(arrayNumber, searchNumber) {

    while (arrayNumber.value === searchNumber) {
        arrayNumber = arrayNumber.next;
    }

    let defaultState  = arrayNumber;

    while (defaultState.next !== null) {

        if (defaultState.next.value === searchNumber) {
            defaultState.next = defaultState.next.next;
        } else if (defaultState.next.value !== searchNumber) {
            defaultState = defaultState.next;
        }

    }

    return arrayNumber;
}

module.exports = {
  removeKFromList
};
