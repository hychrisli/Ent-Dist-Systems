/**
 * Test use strict exceptions using Chai
 *
 *
 * */

"use strict";

const chai = require('chai');

describe('Strict', function(){

    it('should declare variable',function(){
        chai.expect(()=> x = 3.14).to.throw(ReferenceError);
    });

    it('should not assign values to getter', function(){
        const obj = { get val() {return 0}};
        chai.expect(()=> obj.val = 1).to.throw(TypeError);
    });

    it('should not delete variable names', function(){
        chai.expect(()=> eval('var y; delete y;')).to.throw(SyntaxError);
    });

});
