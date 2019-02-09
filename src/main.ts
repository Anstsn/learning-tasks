import { add, five, one, seven, subtract, two } from "../src/functions/diff.function";

const result6 = five(add(one())); // 6
const result5 = seven(subtract(two())); // 5

console.log(`result6 = ${result6}`, `result5 = ${result5}`);