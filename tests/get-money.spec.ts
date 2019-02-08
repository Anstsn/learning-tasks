import { getMoney } from '../src/functions/get-money.function';

import { expect } from 'chai';
import 'mocha';

describe('Test getMoney()', () => {

    it('Limits 1', () => {
        const limits = {
            5000: 0,
            1000: 5,
            500: 2,
            100: 0,
            50: 0,
            10: 112,
        };

        const moneySet = getMoney(120, limits);

        expect(equalObjectTopProps(moneySet.res, {10: 12})).to.equal(true);
    });

    it('Limits 2', () => {
        const limits = {
            5000: 0,
            1000: 5,
            500: 2,
            100: 2,
            50: 10,
            10: 112,
        };

        const moneySet = getMoney(1920, limits);

        expect(equalObjectTopProps(moneySet.res, {
            1000: 1,
            500: 1,
            100: 2,
            50: 4,
            10: 2,
        })).to.equal(true);

        expect(equalObjectTopProps(moneySet.limits, {
            5000: 0,
            1000: 4,
            500: 1,
            100: 0,
            50: 6,
            10: 110,
        })).to.equal(true);
    });

    it('Limits 3', () => {
        const limits = {
            5000: 4,
            1000: 5,
            500: 2,
            100: 5,
            50: 100,
            30: 23,
        };

        const moneySet = getMoney(120, limits);

        expect(equalObjectTopProps(moneySet.res, {30: 4})).to.equal(true);
    });
});

function equalObjectTopProps(obj1, obj2): boolean {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    return !Object.keys(obj1).some(key => obj1[key] !== obj2[key]);
}
