import linkedList from './LinkedList/linkedList.js';

const node1 = linkedList();
node1.append('value2');
node1.prepend('value1');
node1.append('value3');
node1.append('value4');
node1.append('value5');
console.log(node1.tail());
console.log(node1);
node1.insertAt('inserted at 2', 2);
console.log(node1.size());
console.log(node1.head());
console.log(node1.atIndex(3));
