import { Person, myNew } from './functions/diff.function';

const person1 = new Person('Alex', 32);
var person2 = myNew(Person, 'Vasia', 34);

console.log(person1, person2);