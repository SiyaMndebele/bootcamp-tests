describe('The totalPhoneBill', function(){
    it('should return "total bill" in a string calls made and sms sent' , function(){

        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

       
    });

});