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

it('should set firstName and last Name',()=>{
    var user={};
    utils.setName(user,'Gabriel Abreu');
    expect(user).toInclude({
        firstName: 'Gabriel',
        lastName: 'Abreu'
    });
});

// it('should expect some values',()=>{
//     // expect(12).toNotBe(11);

//     // expect({
//     //     name: 'Gabriel',
//     //     batata: 'sim'
//     // }).toEqual(
//     //     {
//     //         name: 'Gabriel',
//     //         batata: 'sim'
//     //     });
    
//     // expect ([2,3,4]).toExclude(5);

//     expect({
//         name : 'Gabriel',
//         age : 21,
//         location: 'Paraná'
//     }).toInclude({
//         age :21
//     });
// });