// describe('.is()', function () {

//     it('match a string to a string', function () {
//         expect( fn.is('string', 'string') ).to.be.true;
//     });

//     it('not match a string to a number', function () {
//         expect( fn.is('string', 123) ).to.be.false;
//     });

//     it('match a number to a number', function () {
//         expect( fn.is('number', 123) ).to.be.true;
//     });

//     it('not match a number to a string', function () {
//         expect( fn.is('number', 'string') ).to.be.false;
//     });

//     it('match true to a boolean', function () {
//         expect( fn.is('boolean', true) ).to.be.true;
//     });

//     it('not match true to a string', function () {
//         expect( fn.is('string', true) ).to.be.false;
//     });

//     it('match an array to array', function () {
//         expect( fn.is('array', []) ).to.be.true;
//     });

//     it('not match an array to object', function () {
//         expect( fn.is('object', []) ).to.be.false;
//     });

//     it('match an object to object', function () {
//         expect( fn.is('object', {}) ).to.be.true;
//     });

//     it('not match an object to array', function () {
//         expect( fn.is('array', {}) ).to.be.false;
//     });

//     it('match a Date to date', function () {
//         expect( fn.is('date', new Date()) ).to.be.true;
//     });

//     it('not match a Date to number', function () {
//         expect( fn.is('number', new Date()) ).to.be.false;
//     });

//     it('match undefined to undefined', function () {
//         expect( fn.is('undefined', undefined) ).to.be.true;
//     });

//     it('not match undefined to null', function () {
//         expect( fn.is('null', undefined) ).to.be.false;
//     });

//     it('match null to null', function () {
//         expect( fn.is('null', null) ).to.be.true;
//     });

//     it('not match null to undefined', function () {
//         expect( fn.is('undefined', null) ).to.be.false;
//     });

//     it('match function to function', function () {
//         expect( fn.is('function', function () {}) ).to.be.true;
//     });

//     it('not match function to object', function () {
//         expect( fn.is('object', function () {}) ).to.be.false;
//     });

//     it('match a Regex to regexp', function () {
//         expect( fn.is('regexp', new RegExp()) ).to.be.true;
//     });

//     it('not match a Regex to object', function () {
//         expect( fn.is('object', new RegExp()) ).to.be.false;
//     });

// });
