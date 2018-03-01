describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect( split([1,6,3,2,5,4,7]) ).toEqual( [[1,6,3], [2,5,4,7]]  || [[1,6,3,2], [5,4,7]] );
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect( merge([1,3,4], [2,5,7] ).toEqual( [1,2,3,4,5,7] ));
    });
  });