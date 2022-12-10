import { describe } from 'mocha';
import { expect } from 'chai';
import { aBooleanValue } from '.';

describe("Test runner", () => {
    it("is set up properly", () => {
        expect(aBooleanValue).to.equal(true);
    })
})