/**
 *  Build and parse JSON documents
 * */

let addr = {"street": "1 Washington Sq", "city": "San Jose", "state": "CA"};
let me = {"name": "Chris", "hobby": "gardening", "addr": addr};
let us = [me];
const assert = require('assert');

describe("JSON", function(){

    it ("Should get the right elements", function(){
        assert.equal(me.name, "Chris");
        assert.equal(me.addr.city, "San Jose");
    });

    for ( let i = 0; i < 4; i++ ) {
        let that = JSON.parse(JSON.stringify(me));
        that.name += i + 1;
        us.push(that);
    }

    it ("Should get the right person", function(){
        assert.equal(us[1].name, "Chris1");
        assert.equal(us[4].name, "Chris4");
    })
});