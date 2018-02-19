/**
 *
 *
 *
 */


const chai = require('chai');
const AppError = new Error("Application Error");

function error(){
    try{
        eval("2++3");
    }catch(SyntaxError){
        throw AppError
    }
}

describe('Errors', function(){

    it("Should be Application Eror", function(){
        chai.expect(error).to.throw(AppError);
    });

});