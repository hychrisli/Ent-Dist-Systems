/*
* Variables are used to store information
* Q: Difference between == and ===
* */

var intVal = 10;
var floatVal = 10.0;
var strVal = '10';

var assert = require('assert');

describe('Vars', function () {
    it('should return 0 when intVal == strVal ', function () {
        assert.equal(intVal == strVal, true);
    })

    it( 'Should return 0 when intVal !== strVal', function () {
        assert.equal( intVal === strVal, false);
    })

    it( 'Should return 0 when intVal === floatVal', function(){
        assert.equal( intVal === floatVal, true);
    })

})
