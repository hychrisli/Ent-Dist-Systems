/*
* Functions
* Q: How to use function as a counter (only allow increment by one) ?
* regular function v.s. closure function
*
* */

// oop approach ES6
var cnt = Symbol();
class Counter {
    constructor(){
        this[cnt] = 0;
    }
    add(){this[cnt] += 1;}
    get(){return this[cnt]}
}

var counter1 = new Counter();
counter1.add();
counter1.add();

// Closure function approach
const addOne = function(){
    let cnt = 0;
    return function(){ return cnt += 1 };
}();

addOne();
addOne();
var counter2 = addOne();


// tests
const assert = require('assert');
describe('Funcs', function(){

    it ( 'Should return 0 when counter1.get() returns 2', function(){
        assert.equal(counter1.get(), 2);
    })

    it ( 'Should return 0 when counter2 returns 3', function(){
        assert.equal(counter2, 3);
    })
})
