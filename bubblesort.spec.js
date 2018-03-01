describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles one element array', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('handles multiple elements array', function(){
        expect( bubbleSort([1, 5, 7, 2, 9, 10, 3]) ).toEqual( [1, 2, 3, 5, 7, 9, 10] );
    });
});

