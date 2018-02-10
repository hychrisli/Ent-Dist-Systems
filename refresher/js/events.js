/**
 * Javascript Events
 * Test DOM Events with jsdom and jquery
 *
 * */

// imports
const assert = require('assert');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM(`...`);
const $ = require('jquery')(dom.window);

$('body').append('<button id="btn"></button>');
$('body').append('<p id="word">Before</p>');

$('#btn').on('click', function(){
    $('#word').text('After');
});

//Assert
describe('Events', function(){

    it('Should be Before', function(){
        assert.equal($('#word').text(), 'Before');
    });

    it('Should be After', function(){
        $('#btn').trigger('click');
        assert.equal($('#word').text(), 'After');
    });

});

