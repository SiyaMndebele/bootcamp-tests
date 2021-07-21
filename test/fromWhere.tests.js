describe('fromWhere', function(){
    it('should return "town" the car is from' , function(){

assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');
assert.equal(fromWhere('CC'), 'Some other place!');

       
    });

});