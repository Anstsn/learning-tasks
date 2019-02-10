import { zipArray } from "./functions/diff.function";

var t = zipArray([3, 2, 1, 5, 6, -1, 10]); // "-1,1-3,5-6,10"

console.log(t);