import chai from 'chai';
import { Calculator } from '../src/controllers/calculator';

const should = chai.should()

describe('CALCULATOR', function () {

    describe('ADD', function () {
        it('should return 3', function () {
            Calculator.add(1,2).should.equal(3);
        });
    });

    describe('SUBSTRACT', function () {
        it('should return -1', function () {
            Calculator.substract(1,2).should.equal(-1);
        });
    });

    describe('MULTIPLY', function () {
        it('should return 2', function () {
            Calculator.multiply(1,2).should.equal(2);
        });
    });

    describe('DIVIDE', function () {
        it('should return 4', function () {
            Calculator.divide(1,2).should.equal(0.5);
        });
    });

});