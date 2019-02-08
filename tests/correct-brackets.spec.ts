import { correctBrackets } from '../src/functions/correct-brackets.function';

import { expect } from 'chai';
import 'mocha';

describe('Test correctBrackets()', () => {

    it('brackets string: [[[({)()]]]', () => {
        const isCorrect = correctBrackets('[[[({)()]]]');
        expect(isCorrect).to.equal(false);
    });

    it('brackets string: [[[({})()]]]', () => {
        const isCorrect = correctBrackets('[[[({})()]]]');
        expect(isCorrect).to.equal(true);
    });

    it('brackets string: [[[()]]]', () => {
        const isCorrect = correctBrackets('[[[()]]]');
        expect(isCorrect).to.equal(true);
    });

    it('brackets string: [[[()]]', () => {
        const isCorrect = correctBrackets('[[[()]]');
        expect(isCorrect).to.equal(true);
    });

    it('brackets string: [[]]]', () => {
        const isCorrect = correctBrackets('[[]]]');
        expect(isCorrect).to.equal(false);
    });

    it('brackets string: )[[[()]]]', () => {
        const isCorrect = correctBrackets(')[[[()]]]');
        expect(isCorrect).to.equal(false);
    });
});
