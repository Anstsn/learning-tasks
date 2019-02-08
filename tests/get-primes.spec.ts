import { getPrimes } from '../src/functions/get-primes.function';

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
