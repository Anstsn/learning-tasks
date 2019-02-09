import { expect } from 'chai';
import 'mocha';

import { add, five, one, seven, subtract, two } from '../src/functions/diff.function';

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