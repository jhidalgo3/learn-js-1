define(
['../src/hello'],
function(hello){
    describe('hello', function(){
        it('should say hello', function(){
            expect(hello()).toBe('hello world')
        })
    })
})
  