import { traversalTree, traversalTree2, traversalTree3 } from './functions/diff2.function';

const node1 = { value: 11 };
const node2 = { value: 13 };
const node3 = { value: 9 };
const node4 = { value: 4 };
const node5 = { value: 7 };
const node6 = { value: 1 };
const node7 = { value: 2 };
const node8 = { value: 5 };

(node1 as any).next = [ node2, node6, node7 ];
(node2 as any).next = [ node3, node4 ];
(node4 as any).next = [ node5 ];
(node7 as any).next = [ node8 ];

console.log(traversalTree([node1]));
console.log(traversalTree2([node1]));
console.log(traversalTree3([node1]));
