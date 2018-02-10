/**
*
* Array operations. Check if it's array, if an array is empty
* Append and delete items from the array.
*
* */


let a = [];
let b = ['door', 'desk'];
const assert = require('assert');

describe('Arrays', function(){

    it ('Should be array', function(){
        assert.equal(a.constructor === Array, true);
    })

    it ('Should be empty now', function(){
        assert.equal(a.length, 0)
    })

    it ('Should be appended with a value', function(){
        a.push('chair');
        assert.equal(a.length, 1);
        assert.equal(a[0], 'chair')
    })

    it ('Should be concatenated a and b', function(){
        let c = a.concat(b);
        assert.equal(c.length, 3);
        assert.equal(c[1], 'door');
    })

})
