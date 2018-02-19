/**
 *
 * Condition Statements
 *
 * */

function group(age){

    if ( typeof age != 'number' ) return 'NA';

    if ( age <= 18 ) return 'Kid';
    else if ( age < 25 ) return 'Young Adult';
    else if ( age < 60 ) return 'Adult';
    else return 'Senior';
}

const assert = require('assert');
describe('Conditions', function(){

    it('Age 10 should be Kid', function(){
        assert.equal(group(10), 'Kid');
    });

    it('Age 24 should be Young Adult', function(){
        assert.equal(group(24), 'Young Adult');
    });

    it('Age 25 should be Adult', function(){
        assert.equal(group(25), 'Adult');
    });

    it('Age 100 should be Senior', function(){
        assert.equal(group(100), 'Senior')
    })
});