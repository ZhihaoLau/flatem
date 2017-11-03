const expect = require('chai').expect
import * as flatem from '../src/index'

describe('flatem', () => {
    describe('#partial', () => {
        it('should return a partialApplied function', () => {
            function add (x, y) {
                return x + y;
            }
            let add3 = flatem.partial(add, 3)
            expect(add3).to.be.a('function')
            expect(add3(3)).to.equal(6)
            expect(add3(2)).to.equal(5)
        })
    })
})
