import { expect } from 'chai';
import 'mocha';

import { 
    add, 
    five, 
    one, 
    seven, 
    subtract, 
    two, 
    Person, 
    myNew, 
    findSumOfAllValues, 
    flattern, 
    add2, 
    add3,
    isPalindrom,
    zipArray,
    joinFunc1,
    joinFunc2,
    sumAllArrayElements,
    isArrayMonotone,
    getProperty,
    zipString
} from '../src/functions/diff.function';

describe('Diff 1', () => {

    it('five(add(one()))', () => {
        const result = five(add(one()));
        expect(result).to.equal(6);
    });

    it('seven(subtract(two()))', () => {
        const result = seven(subtract(two()));
        expect(result).to.equal(5);
    });
});

describe('Diff 2 myNew()', () => {

    it('Person', () => {
        const person1 = new Person('Alex', 32);
        var person2 = myNew(Person, 'Vasia', 34);

        expect(person1 instanceof Person).to.equal(true);
        expect(person2 instanceof Person).to.equal(true);
    });
});

describe('Diff 3 findSumOfAllValues()', () => {

    it('findSumOfAllValues 10', () => {
        
        const obj = {
            value: 4,
            next: [
                {
                    value: 3,
                    next: []
                },
                {
                    value: 3,
                    next: []
                },
            ]
        }

        expect(findSumOfAllValues(obj)).to.equal(10);
    });

    it('findSumOfAllValues 69', () => {
        
        const obj = {
            value: 4,
            next: [
                {
                    value: 3,
                    next: [
                        {
                            value: 2,
                            next: []
                        },
                        {
                            value: 1,
                            next: []
                        },
                    ]
                },
                {
                    value: 5,
                    next: [
                        {
                            value: 6,
                            next: [
                                {
                                    value: 7,
                                    next: []
                                },
                                {
                                    value: 8,
                                    next: []
                                },
                                {
                                    value: 11,
                                    next: [
                                        {
                                            value: 9,
                                            next: []
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    value: 13,
                    next: []
                },
            ]
        }

        expect(findSumOfAllValues(obj)).to.equal(69);
    });
});

describe('Diff 4 flattern', () => {

    it('flattern [1, [1, 2, [3, 4]], [2, 4]]', () => {
        const arr = [1, [1, 2, [3, 4]], [2, 4]];
        const newArr = flattern(arr);

        expect(newArr.toString()).to.equal([1, 1, 2, 3, 4, 2, 4].toString());
    });
});

describe('Diff 5 add2', () => {

    it('add (2)(5)() === 7', () => {
        const result = add2(2)(5)();

        expect(result).to.equal(7);
    });

    it('add (4)(4)(5)(11)(3)(-27)() === 0', () => {
        const result = add2(4)(4)(5)(11)(3)(-27)()

        expect(result).to.equal(0);
    });

    it('add (4)() === 4', () => {
        const result = add2(4)();

        expect(result).to.equal(4);
    });
});

describe('Diff 6 add3 w', () => {

    it('add (2)(5) === 7', () => {
        const result = '' + add3(2)(5);
        
        expect(+result).to.equal(7);
    });

    it('add (4)(4)(5)(11)(3)(-27) === 0', () => {
        const result = '' + add3(4)(4)(5)(11)(3)(-27)

        expect(+result).to.equal(0);
    });

    it('add (4) === 4', () => {
        const result = '' + add3(4);

        expect(+result).to.equal(4);
    });
});

describe('Diff 7 isPalindrom', () => {

    it('"Ш4л4ш"', () => {                
        expect(isPalindrom('Ш4л4ш')).to.equal(true);
    });

    it('"Eva, can I see bees in a cave?"', () => {                
        expect(isPalindrom('Eva, can I see bees in a cave?')).to.equal(true);
    });

    it('"Яндекс"', () => {                
        expect(isPalindrom('Яндекс')).to.equal(true);
    });
    
});

describe('Diff 8 zipArray', () => {

    it('[3, 2, 1, 5, 6, -1, 10]', () => {                
        expect(zipArray([3, 2, 1, 5, 6, -1, 10])).to.equal('-1,1-3,5-6,10');
    });
    
    it('[1,4,5,10,7,11,5,87,65,85,85]', () => {                
        expect(zipArray([1,4,5,10,7,11,5,86,65,85,85])).to.equal('1,4-5,7,10-11,65,85-86');
    });

    it('[3,5,8,1,6,2,6,23,7,8,12]', () => {                
        expect(zipArray([3,5,8,1,6,2,6,23,7,8,12])).to.equal('1-3,5-8,12,23');
    });

    it('[22,64,7,12,5,7,3,12,2,2,3,4,5]', () => {                
        expect(zipArray([22,64,7,12,5,7,3,12,2,2,3,4,5])).to.equal('2-5,7,12,22,64');
    });
});

describe('Diff 9', () => {

    it('Аналог .join 1 (...args)', () => {
        expect(joinFunc1('!', 1, 0, 5, -11)).to.equal('1!0!5!-11');
    });

    it('Аналог .join 2 (js arguments)', () => {
        expect(joinFunc2('!', 1, 0, 5, -11)).to.equal('1!0!5!-11');
    });
});

describe('Diff 10', () => {

    it('Сумма чисел массива [1, 2, "3x"]', () => {
        expect(sumAllArrayElements([1, 2, "3x"])).to.equal(6);
    });

    it('Сумма чисел массива [1, 2, "x3"]', () => {
        expect(sumAllArrayElements([1, 2, "x3"])).to.equal(6);
    });

    it('Сумма чисел массива [1, [1, 2], 2]', () => {
        expect(sumAllArrayElements([1, [1, 2], 2])).to.equal(6);
    });
});

describe('Diff 11 Монотонность массива', () => {

    it('[0, 1, 1, 5, 9, 9, 15]', () => {
        expect(isArrayMonotone([0, 1, 1, 5, 9, 9, 15])).to.equal(true);
    });

    it('[0, 1, 5, 9, 15]', () => {
        expect(isArrayMonotone([0, 1, 5, 9, 15])).to.equal(true);
    });

    it('[15, 8, 4, 2, 1]', () => {
        expect(isArrayMonotone([15, 8, 4, 2, 1])).to.equal(true);
    });

    it('[0, 1, 5, 15, 4]', () => {
        expect(isArrayMonotone([0, 1, 5, 15, 4])).to.equal(false);
    });
});

describe('Diff 12 getProperty', () => {
    const o = {
        a: {
            b: {},
            c: 42
        },
        z: null
    };

    it('a.c', () => {
        expect(getProperty(o, 'a.c')).to.equal(42);
    });

    it('a.d', () => {
        expect(getProperty(o, 'a.d')).to.equal(undefined);
    });

    it('z', () => {
        expect(getProperty(o, 'z')).to.equal(null);
    });
});

describe('Diff 13 zipString', () => {
    it('AAABbbbBcCCC', () => {
        expect(zipString('AAABbbbBcCCC')).to.equal('A3Bb3BcC3');
    });

    it('FffFFFghsKKkkLkkL', () => {
        expect(zipString('FffFFFghsKKkkLkkL')).to.equal('Ff2F3ghsK2k2Lk2L');
    });

    it('qwerRRttYuuwioiwqjJJJhls', () => {
        expect(zipString('qwerRRttYuuwioiwqjJJJhls')).to.equal('qwerR2t2Yu2wioiwqjJ3hls');
    });
});