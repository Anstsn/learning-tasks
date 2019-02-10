import { expect } from 'chai';
import 'mocha';

import { countNumber } from '../src/functions/diff2.function';

describe('Diff count numbers', () => {

    it('121221121211212211121112111111211', () => {;
        expect(countNumber(1, '121221121211212211121112111111211')).to.equal(6);
    });

    it('12221222122212221122223222322', () => {;
        expect(countNumber(1, '12221222122212221122223222322')).to.equal(2);
    });

    it('12121212', () => {;
        expect(countNumber(1, '12121212')).to.equal(1);
    });

    it('[1,1,1,1,2,1,1]', () => {;
        expect(countNumber(1, [1,1,1,1,2,1,1])).to.equal(4);
    });

    it('[1,2,1,3,1,4,1,2,1,1]', () => {;
        expect(countNumber(1, [1,2,1,3,1,4,1,2,1,1])).to.equal(1);
    });

    it('[1,2,1,2,1,2]', () => {;
        expect(countNumber(1, [1,2,1,2,1,2])).to.equal(1);
    });
});