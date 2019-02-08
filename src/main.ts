import { correctBrackets } from './functions/correct-brackets.function';

const t = correctBrackets('[[[({)()]]]');

// console.log('correctBrackets', t);

console.log(correctBrackets('[[[({)()]]]'));
console.log(correctBrackets('[[[({})()]]]'));
console.log(correctBrackets('[[[()]]]'));
console.log(correctBrackets('[[[()]]'));
console.log(correctBrackets('[[]]]'));
console.log(correctBrackets(')[[[()]]]'));
