import { toReversePolishEntry } from './functions/RPN.function';

// const tt = '3+4!+(10-5)';
const tt = '(4+5)*x - (y/2 + tort-15)';
const t = toReversePolishEntry(tt, [{ name: 'x', value: 1 }, { name: 'y', value: 2 }, { name: 'tort', value: 3 }]);

console.log(tt, '=>', t);
