describe('The isFromBellville', function(){
    it('should return "true", if registration starts with "CY"' , function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);

       
    });

});

