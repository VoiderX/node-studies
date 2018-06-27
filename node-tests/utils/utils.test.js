const expect = require('expect')
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    // if (res !== 44) {
    //     throw new Error(`Expected 44,but got ${res}`);
    // }
    expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
    var res = utils.square(4);
    // if(res!=16){
    //     throw new Error(`Expected 16,but got ${res}`);
    // }
    expect(res).toBe(16);
});