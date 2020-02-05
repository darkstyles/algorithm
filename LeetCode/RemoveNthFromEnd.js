/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const list = [];
    let node = head;
    let index = 0;

    while (node) {
        list[index++] = node;
        node = node.next;
    }

    if (index === 1) {
        head = null;
    } else if (index - n === 0){
        head = list[index - n + 1];
    } else {
        list[index - n - 1].next = list[index - n].next;
    }

    return head;
};