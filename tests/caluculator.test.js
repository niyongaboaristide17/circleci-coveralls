import chai from 'chai';
import { Calculator } from '../src/controllers/calculator';

const should = chai.should()

describe('CALCULATOR', function () {

    describe('ADD', function () {
        it('should return 4', function () {
            Calculator.add(1,2).should.equal(3);
        });
    });

});