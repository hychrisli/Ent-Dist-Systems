


class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getLegs() {
        return 4;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
}

class Chicken extends Animal {
    constructor(name){
        super(name)
    }
    getLegs() {
        return 2;
    }
}

const chicken = new Chicken('Coco');
const cat = new Cat('Kitty');


const assert = require('assert');
describe('Inheritance', function(){

    it('Should be cat name: Kitty', function(){
        assert.equal(cat.getName(), 'Kitty');
    });

    it('Kitty cat should have 4 legs', function(){
        assert.equal(cat.getLegs(), 4);
    });

    it('Should be chicken name: Coco', function(){
        assert.equal(chicken.getName(), 'Coco');
    });

    it('Coco Chicken should have 2 legs', function(){
        assert.equal(chicken.getLegs(), 2);
    })
});