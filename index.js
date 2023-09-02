class LinkedListNode {
  value;
  next;

  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  head;
  tail;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = this.head;
    }
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = deletedNode.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  deleteTail() {
    if (!this.tail) {
      return null;
    }

    let deletedTail = this.tail;

    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    let deletedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedNode;
    }

    this.head = this.head.next;
    return deletedNode;
  }

  length() {
    let length = 0;
    let currentNode = this.head;

    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }
}
