function linkedListPalindrome(head) {
  //head empty
  if (!head || !head.next) return true;

  let slow = head,
    fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = reverseLinkedList(slow);
  let firstHalfNode = head;

  while (secondHalfReversed !== null) {
    if (secondHalfReversed.value !== firstHalfNode.value) {
      return false;
    }
    secondHalfReversed = secondHalfReversed.next;
    firstHalfNode = firstHalfNode.next;
  }

  return true;
}

function reverseLinkedList(head) {
  let prevNode = null;
  let currNode = head;
  while (currNode !== null) {
    let nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}
