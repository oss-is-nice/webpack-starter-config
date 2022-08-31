import { describe } from 'mocha';
import { expect } from 'chai';

describe("Test runner", () => {
    it("is set up properly", () => {
        const actual : 2 | null = 2; 
        expect(actual).to.equal(2);
    })
})