describe('The isWeekend', function(){
    it('should return "true, " if it is weekday' , function(){

    assert.equal(isWeekday('Saturday'), false);
    assert.equal(isWeekday('Monday'), true);

       
    });

});