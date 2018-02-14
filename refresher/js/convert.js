/**
 *  Explicit type conversion and automatic type conversion
 *
 *
 * */

const assert = require('chai').assert;

describe('Conversion', function(){

    it ( 'Should be explicitly converted', function(){

        assert.isTrue(Number("") === 0);
        assert.isTrue(Number("  ") === 0);
        assert.isTrue(typeof Date().toString() === typeof "s");

    });

    it ( 'Should be implicitly converted', function(){
        assert.equal(true && 3, 3);
        assert.isTrue(2 && true);
        assert.equal( 0 && true, 0);
        assert.isNotTrue( 5 && false );
        assert.equal("5" + 3, "53");
        assert.equal("5" - 3, 2);
    });
});