import { node } from './node.js';

// const node1 = node('value');
const linkedList = function createLinkedList() {
  let HEAD = null;
  let length = 0;

  const append = function appendNodeToList(value) {
    let newNode = node(value);
    length += 1;
    if (HEAD === null) return (HEAD = newNode);
    let current = HEAD;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  };

  const prepend = function preprendNodeToList(value) {
    let newNode = node(value);
    length += 1;
    if (HEAD === null) return (HEAD = newNode);
    newNode.nextNode = HEAD;
    HEAD = newNode;
  };

  //    HEAD               2
  //     A  -->   B  -->   C   -->   D
  //                    current

  const size = function getSize() {
    return length;
  };

  //   console.log()
  const head = function getHead() {
    if (HEAD === null) return null;
    return HEAD;
  };

  const tail = function getTail() {
    if (HEAD === null) return null;
    let current = HEAD;
    while (current !== null) {
      current = current.nextNode;
      if (current.nextNode === null) return current.value;
    }
  };

  const insertAt = function insertAtSpecifiedIndex(value, index) {
    if (HEAD === null) return null;
    const newNode = node(value);
    length += 1;
    let current = HEAD;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    const nextNode = current.nextNode;
    current.nextNode = newNode;
    newNode.nextNode = nextNode;
  };

  const atIndex = function getNodeAtSpecifiedIndex(index) {
    if (HEAD === null) return null;
    let current = HEAD;
    let currentValue;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
      currentValue = current.value;
    }
    return currentValue;
  };

  return { append, prepend, size, head, tail, insertAt, atIndex };
};

export default linkedList;
