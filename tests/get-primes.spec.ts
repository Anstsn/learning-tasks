import { getPrimes, getPrimes2 } from '../src/functions/get-primes.function';

import { expect } from 'chai';
import 'mocha';

describe('Test getPrimes()', () => {

    it('Get primes up to 8', () => {
        const primes = getPrimes(8);
        expect(primes.length).to.equal([2, 3, 5, 7].length);
    });

    it('Get primes up to 15', () => {
        const primes = getPrimes(15);
        expect(primes.length).to.equal([2, 3, 5, 7, 11, 13].length);
    });

    it('Get primes up to 27',
        () => {
            const primes = getPrimes(27);
            expect(primes.length).to.equal(
            [2, 3, 5, 7, 11, 13, 17, 19, 23].length);
    });

    it('Get primes up to 103',
    () => {
        const primes = getPrimes(103);
        expect(primes.length).to.equal(
        [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
        .length);
    });
});

describe('Test getPrimes2()', () => {

    it('Get primes2 count 4', () => {
        const primes = getPrimes2(4);
        expect(primes.length).to.equal([2, 3, 5, 7].length);
    });

    it('Get primes2 count 6', () => {
        const primes = getPrimes2(6);
        expect(primes.length).to.equal([2, 3, 5, 7, 11, 13].length);
    });

    it('Get primes2 count 9',
        () => {
            const primes = getPrimes2(9);
            expect(primes.length).to.equal(
            [2, 3, 5, 7, 11, 13, 17, 19, 23].length);
    });

    it('Get primes2 count 27',
    () => {
        const primes = getPrimes2(27);
        expect(primes.length).to.equal(
        [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]
        .length);
    });
});
