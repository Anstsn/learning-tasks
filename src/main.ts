import { traversalTree } from "./functions/diff2.function";

let node1 = { value:11 }, node2 = { value:13 }, node3 = { value:9 }, 
    node4 = { value:4 }, node5 = { value:7 }, node6 = { value:1 }, 
    node7 = { value:2 }, node8 = { value:5 };
    
(node1 as any).children = [ node2, node6, node7 ];
(node2 as any).children = [ node3, node4 ];
(node4 as any).children = [ node5 ];
(node7 as any).children = [ node8 ];

console.log(traversalTree([node1]));