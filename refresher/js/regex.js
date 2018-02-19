/**
 *  Regular Express to extract information
 *
 *
 */


const log = `199.72.81.55 - - [01/Jul/1995:00:00:01 -0400] "GET /history/apollo/ HTTP/1.0" 200 6245`;
const ipRes = log.match(/^\S*/i);
const tsRes = log.match(/\[([^\]]+)\]/);
const yearRes = tsRes[1].match(/\/\d+:/);
const noneRes = log.match(/POST/);

const assert = require('assert');
describe("Regex", function(){
    it("Should extract requester IP", function(){
        assert.equal(ipRes != null && ipRes.length == 1, true);
        assert.equal(ipRes[0], '199.72.81.55');
    });

    it ("Should extract timestamp", function(){
        assert.equal(tsRes != null && tsRes.length == 2, true);
        assert.equal(tsRes[1], '01/Jul/1995:00:00:01 -0400');
    });

    it ("Should extract year", function(){
        assert.equal(yearRes != null && yearRes.length == 1, true);
        assert.equal(yearRes[0].substring(1,5), '1995');
    });

    it ("Should not find POST", function(){
        assert.equal(noneRes != null, false);
    })
});
