var addTwoNumbers = function(l1, l2) {
    return add(l1, l2, null);
};

var add = function(l1, l2, prevSum) {
    const roundUp = prevSum > 9 ? 1 : 0;

    if (!l1 && !l2) {
        return roundUp ? new ListNode(roundUp) : null;
    }

    const valueL1 = l1 ? l1.val : 0;
    const valueL2 = l2 ? l2.val : 0;
    const nextL1 = l1 ? l1.next : null;
    const nextL2 = l2 ? l2.next : null;
    const currValue = valueL1 + valueL2 + roundUp;
    const sumNode = new ListNode(currValue % 10);

    sumNode.next = add(nextL1, nextL2, currValue);

    return sumNode;
}