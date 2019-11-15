const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage();
    });

    it('should have a Mortgage class', () => {
        expect(mortgage).to.exist;
    });

    it('should have a monthly payment function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

    it('should have a Principle property', () => {
        expect(mortgage).to.have.property('principal');
    });

    it('should have an interest property', () => {
        expect(mortgage).to.have.property('interest');
    });

    it('should have a term property', () => {
        expect(mortgage).to.have.property('term');
    });

    it('should have a period propety', () => {
        expect(mortgage).to.have.property('period');
    });
});