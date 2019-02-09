import { expect } from 'chai';
import 'mocha';

import { add, five, one, seven, subtract, two, Person, myNew, findSumOfAllValues } from '../src/functions/diff.function';

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