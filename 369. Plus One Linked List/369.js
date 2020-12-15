/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function(head) {
    const pseudoHead = new ListNode(0, head);

    let pointer = pseudoHead;
    let nodeToIncrement = pointer;

    while(pointer) {
        if (pointer.val !== 9) {
            nodeToIncrement = pointer;
        }

        pointer = pointer.next;
    }

    nodeToIncrement.val = nodeToIncrement.val + 1;

    pointer = nodeToIncrement.next;

    while(pointer) {
        if (pointer.val === 9) {
            pointer.val = 0;
        }

        pointer = pointer.next;
    }

    if (pseudoHead.val === 0) {
        return head;
    } else {
        return pseudoHead;
    }
};