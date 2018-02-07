/*
* Objects
* Q: difference between shallow copy and deep copy
*
* */

var assert = require('assert');

var addr = {street: '130 E El Camino Real', city: 'Sunnyvale', State: 'CA', zipcode: '94087'}
var realProp1 = {
    type: 'Single Family',
    address: addr,
    rooms: 3,
    baths: 2,
    price: 1788788
}

// shallow copy
var realPropShallow = Object.assign({}, realProp1);

// deep copy
var realPropDeep = JSON.parse(JSON.stringify(realProp1));

addr.city = 'Mountain View';

describe('Objs', function(){

    it ('Should return 0 when shallow copy city is changed', function(){
        assert.equal(realPropShallow.address.city, 'Mountain View')
    })

    it('Should return 0 when deep copy city not changed', function(){
        assert.equal(realPropDeep.address.city, 'Sunnyvale');
    })

})